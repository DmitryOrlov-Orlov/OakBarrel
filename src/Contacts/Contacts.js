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

      <div className={classes.icons}>
        <a href="https://instagram.com/nazim_nazimovich_?igshid=1tj08ijhov5vx">
          <i className={classes.instogram}></i>
        </a>
        <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fc%2F79994357436&e=ATP94kP_1O82lWo8s_3qioGcrn9fr2pLtJCASNUpqSGpXJydGKiES7Hux-qYEupaSI3ZMUux9CwCsz3t&s=1">
          <i className={classes.whatsapp}></i>
        </a>
        <a href="">
          <i className={classes.telegram}></i>
        </a>
      </div>

    </div >
  )
}

export default Contacts;