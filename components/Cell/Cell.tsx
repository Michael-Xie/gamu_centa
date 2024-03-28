import React from 'react';
import { Button } from '@mantine/core';

interface Props {
  isAlive: boolean;
  onClick: () => void;
}
export const Cell = ({ isAlive, onClick }: Props) => {
  return <Button onClick={onClick} color={isAlive ? 'yellow' : 'gray'} radius={0} />;
};
