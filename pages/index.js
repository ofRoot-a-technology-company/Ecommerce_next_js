import React from 'react'

export const Home = () => {
  return (
    <>
        HeroBanner
        <div>
            <h2>Best Selling Products</h2>
            <p>Speakers of many variations</p>
        </div>

        <div>
           {
            ['Product 1', 'Product 2'].map(
            (product) => product)
            }
        </div>
    </>

  )
}
export default Home
