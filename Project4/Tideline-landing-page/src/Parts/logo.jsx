function Logo({type=""}){

const classes = type==="nav" ? "logo logo-nav" : "logo";


return(<>

<svg className={classes} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

  <circle className="outer" cx="50" cy="50" r="40" />

  <circle className="inner" cx="50" cy="50" r="20" />
</svg>

</>)}


export default Logo