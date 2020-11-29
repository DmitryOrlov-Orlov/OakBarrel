import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import './App.css';

import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Catalog from './Catalog/Catalog';
import PaymentAndDelivery from './PaymentAndDelivery/PaymentAndDelivery';
import Wholesalers from './Wholesalers/Wholesalers';
import Articles from './Articles/Articles';
import Contacts from './Contacts/Contacts';

import data from './goods.json';

function App() {
  const nav = [
    { 'path': '/', 'text': 'Главная' },
    { 'path': '/about', 'text': 'О нас' },
    { 'path': '/cat', 'text': 'Каталог' },
    { 'path': '/payment', 'text': 'Оплата и доставка' },
    { 'path': '/wholesalers', 'text': 'Оптовикам' },
    { 'path': '/articles', 'text': 'Статьи' },
    { 'path': '/contacts', 'text': 'Контакты' },
  ];

  return (
    <div className="App">
      <Router>
        <Header nav={nav} />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/cat'><Catalog data={data} /></Route>
          <Route path='/payment' component={PaymentAndDelivery}></Route>
          <Route path='/wholesalers' component={Wholesalers}></Route>
          <Route path='/articles' component={Articles}></Route>
          <Route path='/contacts' component={Contacts}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
