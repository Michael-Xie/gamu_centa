import { fn } from '@storybook/test';
import { CellGrid } from './CellGrid';

export default {
  component: CellGrid,
  tags: ['autodocs'],
  args: { onCellClick: fn() },
};

export const Default = {
  args: {
    gridData: [
      [true, false],
      [false, true],
    ],
  },
};
