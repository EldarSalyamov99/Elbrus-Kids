import React from 'react';

export default function Board(): JSX.Element {
  const levels = [
    ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
    ['Level 10', 'Level 9', 'Level 8', 'Level 7', 'Level 6'],
    ['Level 11', 'Level 12', 'Level 13', 'Level 14', 'Level 15']
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {levels.map((levelRow, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex', flexDirection: rowIndex % 2 === 0 ? 'row' : 'row-reverse' }}>
          {levelRow.map((level, columnIndex) => (
            <div key={columnIndex} style={{ width: '80px', height: '80px', border: '2px solid #000', borderRadius: '50%', backgroundColor: '#fff', color: '#000', fontWeight: 'bold', cursor: 'pointer' }}>
              {level}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}