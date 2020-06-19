import React from 'react'
import { 
  ImageBox as ImageBoxComponent,
  FigureCard as FigureCardComponent,
  FigureCardVertical as FigureCardVerticalComponent,
  LinkButton,
  Modal as ModalComponent
} from './../components'


export default {
  title: 'Display',
}

export const ImageBox = () => {
  return (
    <ImageBoxComponent src="https://www.themealdb.com/images/category/beef.png" />
  )
}

export const FigureCard = () => {
  return (
    <FigureCardComponent 
      title="Brown Stew Chicken"
      src="https://www.themealdb.com/images/category/beef.png"
    >
      <p className="copy">Chicken is a type of domesticated fowl, a subspecies of the red junglefowl. It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011.[1] Humans commonly keep chickens as a source of food (consuming both their meat and eggs) and, more rarely, as pets.</p>
      <LinkButton rightIcon="arrow-right" className="mt-4">More</LinkButton>
    </FigureCardComponent>
  )
}

export const Test = () => {
  return (
    <FigureCardVerticalComponent 
      title="Brown Stew Chicken"
      src="https://www.themealdb.com/images/category/beef.png"
    >
      <p className="copy text-center">Lorem ipsom</p>
    </FigureCardVerticalComponent>
  )
}

export const Modal = () => {
  return (
    <ModalComponent onClose={() => { console.log('close clicked')}}>
      <p>Modal</p>
    </ModalComponent>
  ) 
}
