'use client';

import React from 'react';
import { Cell } from '../Cell/Cell';

interface Props {
  gridData: boolean[][];
  onCellClick: (rowIndex: number, colIndex: number) => void;
}

export const CellGrid = ({ gridData, onCellClick }: Props) => {
  return (
    <div className="grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell: boolean, colIndex: number) => (
            <Cell key={colIndex} isAlive={cell} onClick={() => onCellClick(rowIndex, colIndex)} />
          ))}
        </div>
      ))}
    </div>
  );
};
