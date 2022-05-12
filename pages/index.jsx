import React from 'react'

import { client } from '../lib/client'
import { Product, FooterBanner, HeroBanner } from '../components'

const Home = ({ products, banners }) => {
  return (
    <div>
      <HeroBanner heroBanner={banners.length && banners[0]} />
      <div className='products-heading'>
        <h2>Mais Vendidos</h2>
        <p>Mouse Gamer para todos os gostos</p>
      </div>

      <div className='products-container'>
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={banners && banners[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]'
  const products = await client.fetch(productQuery)

  const bannerQuery = '*[_type == "banner"]'
  const banners = await client.fetch(bannerQuery)

  return {
    props: { products, banners }
  }
}

export default Home