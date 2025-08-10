import React from 'react'
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Offers from '../components/Offer/Offers';
import NewCollections from '../components/new collections/NewCollections';
import NewsLetter from '../components/newsletter/NewsLetter';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}
 
export default Shop
