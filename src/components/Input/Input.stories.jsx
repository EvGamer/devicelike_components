import React from 'react';

import Input from './Input';

export default {
  title: 'Basic/Input',
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
