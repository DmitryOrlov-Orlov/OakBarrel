import classes from './Home.module.css';
import MainBanner from '../MainBanner/MainBanner'

function Home() {
  return (
    <div className={classes.Home}>
      Home
      <MainBanner />
    </div>
  )
}

export default Home;