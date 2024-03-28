import { Cell } from './Cell';
import { fn } from '@storybook/test';

export default {
  component: Cell,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Alive = {
  args: {
    isAlive: true,
  },
};

export const NotAlive = {
  args: {
    isAlive: false,
  },
};
