import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"handsfree"} heading={"Handsfree"}/>
      <HorizontalCardProduct category={"watches"} heading={"Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouses"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"headsets"} heading={"Headsets"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"tablet"} heading={"Tablet"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
      <VerticalCardProduct category={"processor"} heading={"Provessor"}/>
      <VerticalCardProduct category={"printers"} heading={"Printers"}/>


    </div>
  )
}

export default Home