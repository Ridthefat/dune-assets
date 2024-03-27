import type { Meta, StoryObj } from '@storybook/react';
import { CustomToken } from './Leader';

const meta = {
  component: CustomToken,
  argTypes: {
    image: {
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof CustomToken>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Alia: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/alia.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Alia',
    strength: '5',
  },
};

export const WannaYueh: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/wanna.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Wanna Yueh',
    strength: '5',
  },
};

export const MotherRamolla: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/ramallo.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Mother Ramollo',
    strength: '5',
  },
};

export const PrincesIrulan: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/irulan.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Princes Irulan',
    strength: '5',
  },
};

export const LadyFenring: Story = {
  args: {
    background: `url('/generated/utils/background/bene-gesserit.jpg') top left / cover no-repeat`,
    image: 'image/leader/ladyfenring.png',
    logo: 'vector/logo/bene-gesserit.svg',
    name: 'Lady Fenring',
    strength: '5',
  },
};
