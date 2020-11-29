import classes from './Contacts.module.css'

function Contacts() {
  return (
    <div className={classes.Contacts}>
      Contacts
      <h1>Контакты</h1>
      <div className={classes.iconPhoneBlock}>
        <i className={classes.icon_phone}></i> <p className={classes.phone}><b> +7-(999)-435-74-36</b></p>
      </div>
      <p>Адрес:</p>
      <p>Старый Бондарь</p>
      <p>Ростовская область</p>
      <p>г. Ростов-на-Дону, ул. Берегова 5, въезд со двора.</p>
      <a href="https://instagram.com/nazim_nazimovich_?igshid=1tj08ijhov5vx">
        <i className={classes.icon_instogram}></i>
      </a>


    </div>
  )
}

export default Contacts;