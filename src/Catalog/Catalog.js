import classes from './Catalog.module.css';

function Catalog(props) {
  console.log(props.data);
  return (
    <div className={classes.Catalog}>
      Catalog
      <h1><b> Каталог</b></h1>
    </div>
  )
}

export default Catalog;