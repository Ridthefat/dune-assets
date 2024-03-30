import type { Meta, StoryObj } from '@storybook/react';
import { TreacheryCard } from './Treachery';

const meta = {
  component: TreacheryCard,
} satisfies Meta<typeof TreacheryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MaleCheapHero: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Cheap Hero',
    decals: [
      {
        id: 'vector/decal/cheap-hero.svg',
        muted: false,
        offset: [0, 20],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Leader',
  },
};

export const FemaleCheapHero: Story = {
  args: {
    head: `/generated/utils/background/special.jpg`,
    icon: [`/generated/utils/background/striped-special.jpg`, 'vector/icon/hand-alt.svg'],
    iconOffset: [0, 2],
    name: 'Cheap Hero',
    decals: [
      {
        id: 'vector/decal/cheap-heroine.svg',
        muted: false,
        offset: [0, 20],
        outline: true,
        scale: 0.9,
      },
    ],
    text: 'Text goes here',
    subName: 'Special - Leader',
  },
};
