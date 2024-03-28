import { Cell } from './Cell';

export default {
  component: Cell,
  tags: ['autodocs'],
};

export const Alive = {
  args: {
    isAlive: true,
    onClick: () => console.log('click'),
  },
};

export const NotAlive = {
  args: {
    isAlive: false,
    onClick: () => console.log('click'),
  },
};
