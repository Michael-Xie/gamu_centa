'use client';

import React from 'react';
import { Button, PartialVarsResolver, ButtonFactory } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  return {
    root: {
      '--button-bd': 'solid black 0.5px',
    },
  };
};
interface Props {
  isAlive: boolean;
  onClick: () => void;
}
export const Cell = ({ isAlive, onClick }: Props) => {
  return (
    <Button onClick={onClick} color={isAlive ? 'yellow' : 'gray'} radius={0} vars={varsResolver} />
  );
};
