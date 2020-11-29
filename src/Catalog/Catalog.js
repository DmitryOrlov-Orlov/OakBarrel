import classes from './Catalog.module.css';

import CardProduct from '../CardProduct/CardProduct';
import { useState } from 'react';

function Catalog(props) {
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  const addToCart = (event) => {
    event.preventDefault();
    if (!event.target.dataset.key) return false;
    let cartTemp = cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
    setCart(cartTemp);

    let countS = count;
    countS++;
    setCount(countS);
    console.log(cartTemp);
    console.log(countS);


  }


  return (
    <div className={classes.Catalog}>
      Catalog
      <h1>Каталог</h1>
      <div className={classes.Products} onClick={addToCart}>

        {props.data.map((item, index) =>
          <CardProduct
            key={index}
            id={item.id}
            title={item.title}
            cost={item.cost}
            image={item.image}
            hit={item.hit}
            articul={item.articul}
          />
        )}
      </div>
    </div>
  )
}

export default Catalog;