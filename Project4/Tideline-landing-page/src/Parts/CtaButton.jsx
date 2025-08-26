

function CtaButton({text, type=""}){

const classes= type==="alt"  ? "cta-button cta-altstyle" : "cta-button"

return <a href="#" className={classes}>{text}</a>    
// Replace with styled link instead later...

}

export default CtaButton;