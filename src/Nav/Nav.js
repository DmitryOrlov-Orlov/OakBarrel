
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav(props) {
  let navItem = props.nav.map((item, index) => {
    return (
      <Link key={index} to={item.path}>{item.text}</Link>
    )
  })
  return (
    <nav className={classes.Nav}>
      {navItem}
    </nav>
  )
}

export default Nav;