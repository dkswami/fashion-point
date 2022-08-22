import SHOP_DATA from '../../shopData';
import ProductCard from '../../components/product-card/product-card.component';
import './products.styles.scss';

const Products = () => {
  return (
    <div className="products-container">
        <div className='preview'>
      {
        SHOP_DATA.map((product) => {
          return(
            
            <ProductCard key={product.id} product={product} />
          )          
        })
      }
      </div>
    </div>
  );
}

export default Products;
