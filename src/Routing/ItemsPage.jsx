import ItemGet from '../components/Items/ItemGet'
import ItemCreate from '../components/Items/ItemCreate'
import ItemCard from '../components/Items/ItemCard';
import Product from '../components/Product';
import Euros from '../components/Items/Euro';

function ItemsPage(props) {
    return (
        <div>
            <h1>Items</h1>
            <ItemCreate />
            <ItemGet />
            <ItemCard />
            <div className="home">
                <Product id="1" name='Apple iPhone 15, 128gb Black' price={699.00} quantity={1} image='https://media.currys.biz/i/currysprod/M10254987_black?$l-large$&fmt=auto' />
                
                <Product id="2" name='Samsung Galaxy S24 Ultra, 512GB' price={1349.00} quantity={1} image='https://media.currys.biz/i/currysprod/10259965?$l-large$&fmt=auto' />
                <Product id="3" name='Google Pixel 8 Pro, 256GB' price={1009.00} quantity={1} image='https://media.4rgos.it/i/Argos/3269264_R_Z001A?w=1500&h=880&qlt=70&fmt=webp' />
            </div>
        </div>
    );
}

export default ItemsPage;