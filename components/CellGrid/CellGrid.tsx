import React, { useState } from 'react';
import { Cell } from '../Cell/Cell';

interface Props {
  numRows: number;
  numCols: number;
}

export const CellGrid = ({ numRows, numCols }: Props) => {
  const [gridData, setGridData] = useState(Array(numRows).fill(Array(numCols).fill(false)));

  const handleButtonClick = (rowIndex: number, colIndex: number) => {
    const newGridData = gridData.map((row, i) =>
      i === rowIndex ? row.map((col: boolean, j: number) => (j === colIndex ? !col : col)) : row
    );
    setGridData(newGridData);
  };

  return (
    <div className="grid">
      {gridData.map((row, rowIndex) => (
        <div key={rowIndex} className="row" style={{ borderColor: 'black' }}>
          {row.map((cell: boolean, colIndex: number) => (
            <Cell
              key={colIndex}
              isAlive={cell}
              onClick={() => handleButtonClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
