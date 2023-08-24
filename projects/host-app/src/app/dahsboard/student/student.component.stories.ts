import { Meta, StoryObj } from '@storybook/angular';

import { StudentComponent } from './student.component';

type ComponentWithCustomControls = StudentComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Student',
  component: StudentComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Student` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Student: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
