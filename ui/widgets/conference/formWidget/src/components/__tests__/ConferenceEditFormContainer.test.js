import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { apiConferenceGet, apiConferencePut } from 'api/conferences';
import ConferenceEditFormContainer from 'components/ConferenceEditFormContainer';
import 'components/__mocks__/i18nMock';
import conferenceMock from 'components/__mocks__/conferenceMocks';

jest.mock('api/conferences');

describe('ConferenceEditFormContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const errorMessageKey = 'errors.dataLoading';
  const successMessageKey = 'common.dataSaved';

  const onErrorMock = jest.fn();
  const onUpdateMock = jest.fn();

  it('loads data', async () => {
    apiConferenceGet.mockImplementation(() => Promise.resolve(conferenceMock));
    const { queryByText } = render(
      <ConferenceEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiConferenceGet).toHaveBeenCalledTimes(1);
      expect(apiConferenceGet).toHaveBeenCalledWith('1');
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
    });
  });

  it('saves data', async () => {
    apiConferenceGet.mockImplementation(() => Promise.resolve(conferenceMock));
    apiConferencePut.mockImplementation(() => Promise.resolve(conferenceMock));

    const { findByTestId, queryByText } = render(
      <ConferenceEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiConferencePut).toHaveBeenCalledTimes(1);
      expect(apiConferencePut).toHaveBeenCalledWith(conferenceMock);
      expect(queryByText(successMessageKey)).toBeInTheDocument();
      expect(onErrorMock).toHaveBeenCalledTimes(0);
      expect(queryByText(errorMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully loaded', async () => {
    apiConferenceGet.mockImplementation(() => Promise.reject());
    const { queryByText } = render(
      <ConferenceEditFormContainer id="1" onError={onErrorMock} onUpdate={onUpdateMock} />
    );

    await wait(() => {
      expect(apiConferenceGet).toHaveBeenCalledTimes(1);
      expect(apiConferenceGet).toHaveBeenCalledWith('1');
      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(queryByText(errorMessageKey)).toBeInTheDocument();
      expect(queryByText(successMessageKey)).not.toBeInTheDocument();
    });
  });

  it('shows an error if data is not successfully saved', async () => {
    apiConferenceGet.mockImplementation(() => Promise.resolve(conferenceMock));
    apiConferencePut.mockImplementation(() => Promise.reject());
    const { findByTestId, getByText } = render(
      <ConferenceEditFormContainer id="1" onError={onErrorMock} />
    );

    const saveButton = await findByTestId('submit-btn');

    fireEvent.click(saveButton);

    await wait(() => {
      expect(apiConferenceGet).toHaveBeenCalledTimes(1);
      expect(apiConferenceGet).toHaveBeenCalledWith('1');

      expect(apiConferencePut).toHaveBeenCalledTimes(1);
      expect(apiConferencePut).toHaveBeenCalledWith(conferenceMock);

      expect(onErrorMock).toHaveBeenCalledTimes(1);
      expect(getByText(errorMessageKey)).toBeInTheDocument();
    });
  });
});
