import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number,

  asdf: PropTypes.string,
});

export const formValues = PropTypes.shape({
  asdf: PropTypes.string,
});

export const formTouched = PropTypes.shape({
  asdf: PropTypes.bool,
});

export const formErrors = PropTypes.shape({
  asdf: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]),
});
