import PropTypes from 'prop-types';

export const IconButton = ({ icon }) => {
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        'storybook-button-medium',
        'storybook-button--primary',
      ].join(' ')}
    >
      <span class="material-symbols-outlined">{icon}</span>
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.string,
};

IconButton.defaultProps = {
  icon: 'search',
};
