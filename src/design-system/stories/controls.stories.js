import React from 'react'
import { 
  PillButton as PillButtonComponent,
  PillToggle as PillToggleComponent,
} from './../components';

export default {
  title: 'Controls',
}

export const PillButton = () => {
  return (
    <div>
      <PillButtonComponent>Chicken</PillButtonComponent>
      <br />
      <br />
      <PillButtonComponent on>Chicken</PillButtonComponent>
    </div>
  )
}

export const PillToggle = () => {
  return (
    <div>
      <PillToggleComponent>Chicken</PillToggleComponent>
      <br />
      <br />
      <PillToggleComponent on>Chicken</PillToggleComponent>
    </div>
  )
}