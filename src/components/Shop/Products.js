import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyProducts = [ 
  {id:1, price:200, title:'my first book', description:"love it"},
  {id:2, price:3200, title:'my second book', description:"love it"},
  {id:3, price:2000, title:'my third book', description:"love it"}

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyProducts.map((items)=>{
          return (
            <ProductItem
            key ={items.id}
            title={items.title}
            price={items.price}
            description={items.description}
          />
          )
        })}
       
      </ul>
    </section>
  );
};

export default Products;
