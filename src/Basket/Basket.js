import classes from './Basket.module.css';

function Basket() {
  return (
    <div className={classes.Basket}>
      <p> 17000 &#8381;</p>
      <div className={classes.count}>5</div>
      <img className={classes.img} />

    </div>
  )
}

export default Basket;