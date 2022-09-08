import { IconButton } from './IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
};

const Template = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'search',
};
