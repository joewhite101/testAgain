import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18nMock';
import conferenceMocks from 'components/__mocks__/conferenceMocks';
import ConferenceTable from 'components/ConferenceTable';

describe('ConferenceTable', () => {
  it('shows conferences', () => {
    const { getByText } = render(<ConferenceTable conferences={conferenceMocks} />);
    expect(
      getByText(
        'Culpa voluptatem aliquid ut. Voluptas maiores numquam eos. Ut atque animi ut non voluptas porro culpa. Quo aut non maxime eos beatae dolor aut. Repellendus suscipit qui eum ducimus. Minus non esse quis.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Possimus vero harum numquam aut nam necessitatibus numquam. Rem totam possimus illum nobis itaque. Impedit facere dolores expedita. Nesciunt perspiciatis voluptas corporis. Saepe atque omnis culpa quis est ipsam consequuntur quisquam. Mollitia quasi assumenda pariatur autem labore laudantium suscipit sunt.'
      )
    ).toBeInTheDocument();
  });

  it('shows no conferences message', () => {
    const { queryByText } = render(<ConferenceTable conferences={[]} />);
    expect(
      queryByText(
        'Culpa voluptatem aliquid ut. Voluptas maiores numquam eos. Ut atque animi ut non voluptas porro culpa. Quo aut non maxime eos beatae dolor aut. Repellendus suscipit qui eum ducimus. Minus non esse quis.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Possimus vero harum numquam aut nam necessitatibus numquam. Rem totam possimus illum nobis itaque. Impedit facere dolores expedita. Nesciunt perspiciatis voluptas corporis. Saepe atque omnis culpa quis est ipsam consequuntur quisquam. Mollitia quasi assumenda pariatur autem labore laudantium suscipit sunt.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.conference.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <ConferenceTable conferences={conferenceMocks} onSelect={onSelectMock} />
    );
    fireEvent.click(
      getByText(
        'Culpa voluptatem aliquid ut. Voluptas maiores numquam eos. Ut atque animi ut non voluptas porro culpa. Quo aut non maxime eos beatae dolor aut. Repellendus suscipit qui eum ducimus. Minus non esse quis.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
