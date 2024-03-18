import React from 'react'
import "./Home.css";
import Product from './components/Product';
import ItemCard from './components/Items/ItemCard';

function Home() {




  return (
    <div className="home">
      <div className="home_container">
        {/* <img className="home_image" src="https://i.pinimg.com/originals/47/88/7a/47887a5167b6db91506466e691e0b9c2.jpg" alt="" /> */}

        <div className="home_row">
        {/* <Product id="1" name='Apple iPhone 15, 128gb Black' price={699.00} quantity={1} image='https://media.currys.biz/i/currysprod/M10254987_black?$l-large$&fmt=auto' /> */}

        {/* <Product id="2" name='Samsung Galaxy S24 Ultra, 512GB' price={1349.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259965?$l-large$&fmt=auto' />

        <Product id="3" name='Google Pixel 8 Pro, 256GB' price={1009.00} quantity={1} image='https://media.4rgos.it/i/Argos/3269264_R_Z001A?w=1500&h=880&qlt=70&fmt=webp' />


        <Product id="4" name='HP Gaming Laptop, Ultra 7' price={1499.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259825?$l-large$&fmt=auto' />

        <Product id="5" name='Asus Zenbook UX3402ZA' price={599.00} quantity={1} image='https://media.currys.biz/i/currysprod/10254681?$l-large$&fmt=auto' />

        <Product id="6" name='Apple iPad Air, 64GB' price={599.00} quantity={1} image='https://media.currys.biz/i/currysprod/M10236081_silver-grey?$l-large$&fmt=auto' />

        <Product id="7" name='Microsoft Xbox Series S, 512GB' price={249.00} quantity={1} image='https://media.currys.biz/i/currysprod/10205195?$l-large$&fmt=auto' />

        <Product id="8" name='Samsung Galaxy S24 Ultra, 512GB' price={1349.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259965?$l-large$&fmt=auto' />

        <Product id="9" name='Meta Quest 3 Mixed Reality Headset, 128GB' price={479.00} quantity={1} image='https://media.currys.biz/i/currysprod/10256215?$l-large$&fmt=auto' /> */}

       


<ItemCard />

        </div>

        {/* <div className="home_row">

        </div>

        <div className="home_row">

        </div> */}
      </div>
    </div>
  )
}

export default Home
