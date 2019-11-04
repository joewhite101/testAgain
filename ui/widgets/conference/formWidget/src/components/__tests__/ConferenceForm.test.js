import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import 'components/__mocks__/i18nMock';
import conferenceMock from 'components/__mocks__/conferenceMocks';
// import { mockConferenceWithDateStrings } from 'components/__mocks__/conferenceMocks';
import ConferenceForm from 'components/ConferenceForm';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme();

describe('Conference Form', () => {
  it('shows form', () => {
    const { getByLabelText } = render(
      <ThemeProvider theme={theme}>
        <ConferenceForm conference={conferenceMock} />
      </ThemeProvider>
    );
    expect(getByLabelText('entities.conference.asdf').value).toBe(
      'Culpa voluptatem aliquid ut. Voluptas maiores numquam eos. Ut atque animi ut non voluptas porro culpa. Quo aut non maxime eos beatae dolor aut. Repellendus suscipit qui eum ducimus. Minus non esse quis.'
    );
  });
});
