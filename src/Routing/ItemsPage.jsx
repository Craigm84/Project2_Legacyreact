import ItemGet from '../components/Items/ItemGet'
import ItemCreate from '../components/Items/ItemCreate'
import ItemCard from '../components/Items/ItemCard';
import Product from '../components/Product';

function ItemsPage(props) {
    return ( 
        <div>
            <h1>Items</h1>
            <ItemCreate />
            <ItemGet />
            <ItemCard />
          
            <Product id="1" name='Apple iPhone 15, 128gb Black' price={699.00} quantity={1} image='https://media.currys.biz/i/currysprod/M10254987_black?$l-large$&fmt=auto' />
      
        <Product id="2" name='Samsung Galaxy S24 Ultra, 512GB' price={1349.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259965?$l-large$&fmt=auto' />

        <Product id="3" name='Google Pixel 8 Pro, 256GB' price={1009.00} quantity={1} image='https://media.4rgos.it/i/Argos/3269264_R_Z001A?w=1500&h=880&qlt=70&fmt=webp' />


        {/* <Product id="4" name='HP Gaming Laptop, Ultra 7' price={1499.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259825?$l-large$&fmt=auto' />

        <Product id="5" name='Asus Zenbook UX3402ZA' price={599.00} quantity={1} image='https://media.currys.biz/i/currysprod/10254681?$l-large$&fmt=auto' />

        <Product id="6" name='Apple iPad Air, 64GB' price={599.00} quantity={1} image='https://media.currys.biz/i/currysprod/M10236081_silver-grey?$l-large$&fmt=auto' />

        <Product id="7" name='Microsoft Xbox Series S, 512GB' price={249.00} quantity={1} image='https://media.currys.biz/i/currysprod/10205195?$l-large$&fmt=auto' />

        <Product id="8" name='Samsung Galaxy S24 Ultra, 512GB' price={1349.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259965?$l-large$&fmt=auto' />

        <Product id="9" name='Meta Quest 3 Mixed Reality Headset, 128GB' price={479.00} quantity={1} image='https://media.currys.biz/i/currysprod/10256215?$l-large$&fmt=auto' /> */}


        </div>
     );
}

export default ItemsPage;