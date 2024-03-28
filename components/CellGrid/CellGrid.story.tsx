import { fn } from '@storybook/test';
import { CellGrid } from './CellGrid';

export default {
  component: CellGrid,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export const Default = {
  args: {
    numRows: 10,
    numCols: 10,
  },
};
