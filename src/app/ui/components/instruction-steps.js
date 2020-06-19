import React from 'react';

export const InstructionSteps = ({
  steps,
  className,
}) => {
  return (
    <ol className={`numeric ${className}`}>
      { steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))} 
    </ol>
  )
}