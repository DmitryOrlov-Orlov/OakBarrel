import classes from './CardProduct.module.css';

function CardProduct(props) {
  return (
    <div className={classes.CardProduct}>
      Card Product
      <div className={classes.image}><img src={props.image} alt="" /></div>
      <h5>{props.title}</h5>
      <p>{props.cost} &#8381;</p>
      <button data-key={props.articul}>В корзину</button>

    </div>
  )
}

export default CardProduct;