import { PiRecycleBold } from "react-icons/pi";
import { LuHammer } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

function ImpactCard({icon="recycle", header="header", text="Lorem ipsum dolor sit amet consectetur adipisicing."}) {

    const icons={"recycle":  <PiRecycleBold className="icon"/>, "hammer":  <LuHammer className="icon"/>, "heart":  <FaRegHeart className="icon"/>}

  return (
    <>
      <div className="impact-card">
      
<div className="icon-container">

<div className="circle">
        {icons[icon]}
</div>
</div>
      
      
    
      
      
        <h3> {header}</h3>
        <p>{text} </p>
      </div>
    </>
  );
}

export default ImpactCard;
