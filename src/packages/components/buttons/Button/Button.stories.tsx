import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
  label: "Default",
};
export const DefaultDisable = Template.bind({});
DefaultDisable.args = {
  label: "Default",
  disable:true
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Default",
  outlined:true
};


export const OutlinedDisable = Template.bind({});
OutlinedDisable.args = {
  label: "Default",
  outlined:true,
  disable:true
};