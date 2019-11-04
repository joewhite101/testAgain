import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import conferenceType from 'components/__types__/conference';

const ConferenceFieldTable = ({ t, i18n: { language }, conference }) => {
  const translationKeyPrefix = `entities.conference.`;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{t('common.name')}</TableCell>
          <TableCell>{t('common.value')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}id`)}</span>
          </TableCell>
          <TableCell>
            <span>{conference.id}</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>{t(`${translationKeyPrefix}asdf`)}</span>
          </TableCell>
          <TableCell>
            <span>{conference.asdf}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

ConferenceFieldTable.propTypes = {
  conference: conferenceType,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string,
  }).isRequired,
};

ConferenceFieldTable.defaultProps = {
  conference: [],
};

export default withTranslation()(ConferenceFieldTable);
