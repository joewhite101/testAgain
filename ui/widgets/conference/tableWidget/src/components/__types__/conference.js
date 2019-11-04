import PropTypes from 'prop-types';

const conferenceType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,

    asdf: PropTypes.string,
  })
);

export default conferenceType;
