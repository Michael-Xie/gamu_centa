'use client';
import { CellGrid } from '@/components/CellGrid/CellGrid';
import { Button, Container } from '@mantine/core';
import { useEffect, useState } from 'react';
import { getNextGrid } from './_utilities/gameOfLife';

const createBlankGrid = (numRows: number, numCols: number) => {
  return Array(numRows).fill(Array(numCols).fill(false));
};
export default function Page() {
  const NUM_COL = 10;
  const NUM_ROW = 10;
  const [gridData, setGridData] = useState(createBlankGrid(NUM_ROW, NUM_COL));
  const [startGeneration, setStartGeneration] = useState(false);
  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const newGridData = gridData.map((row, i) =>
      i === rowIndex ? row.map((col: boolean, j: number) => (j === colIndex ? !col : col)) : row
    );
    setGridData(newGridData);
  };

  const handleResetCellGrid = () => {
    setGridData(createBlankGrid(NUM_ROW, NUM_COL));
    setStartGeneration(false);
  };

  const handleStartToggle = () => {
    setStartGeneration(!startGeneration);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (startGeneration) {
        setGridData(getNextGrid(gridData));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [gridData, startGeneration]);

  return (
    <Container>
      <h1>Hello, Conway's Game of Life page!</h1>
      <Button onClick={handleStartToggle}>{startGeneration ? 'Pause' : 'Start'}</Button>
      <Button onClick={handleResetCellGrid}>Reset</Button>
      <CellGrid gridData={gridData} onCellClick={handleCellClick} />
    </Container>
  );
}
