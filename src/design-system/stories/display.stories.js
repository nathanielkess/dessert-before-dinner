import React from 'react'
import { 
  ImageBox as ImageBoxComponent,
} from './../components';

export default {
  title: 'Display',
}

export const ImageBox = () => {
  return (
    <ImageBoxComponent src="https://www.themealdb.com/images/category/beef.png" />
  )
}
