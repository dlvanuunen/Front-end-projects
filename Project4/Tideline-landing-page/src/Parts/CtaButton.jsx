

function CtaButton({text, type=""}){

const classes= {"alt": "cta-altstyle", "blue": "cta-blue", "": ""}

return <a href="#" className={"cta-button "+classes[type]}>{text}</a>    
// Replace with styled link instead later...

}

export default CtaButton;