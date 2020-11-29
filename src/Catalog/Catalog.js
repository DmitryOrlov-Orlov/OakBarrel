import classes from './Catalog.module.css';

import CardProduct from '../CardProduct/CardProduct';

function Catalog(props) {
  console.log(props.data);



  return (
    <div className={classes.Catalog}>
      Catalog
      <h1>Каталог</h1>

      <div className={classes.Products}>


        {props.data.map((item, index) =>
          <CardProduct
            key={index}
            id={item.id}
            title={item.title}
            cost={item.cost}
            image={item.image}
            hit={item.hit}
          />
        )}
      </div>
    </div>
  )
}

export default Catalog;