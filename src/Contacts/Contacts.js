import classes from './Contacts.module.css'

function Contacts() {
  return (
    <div className={classes.Contacts}>
      Contacts
      <h1><b> Контакты</b></h1>
      <div className={classes.iconPhone}>
        <i className={classes.icon}></i> <p className={classes.phone}><b> +7-(999)-435-74-36</b></p>
      </div>
      <p>Адрес:</p>
      <p>Старый Бондарь</p>
      <p>Ростовская область</p>
      <p>г. Ростов-на-Дону, ул. Берегова 5, въезд со двора.</p>


    </div>
  )
}

export default Contacts;