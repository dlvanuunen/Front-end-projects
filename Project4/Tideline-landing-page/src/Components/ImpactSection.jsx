import ImpactCard from "../Parts/ImpactCard"

function ImpactSection(){


return<>

<section className="impact column ">

<h2>Sustainability Impact </h2>


<div className="impact-container ">
<ImpactCard icon="recycle" header="Reclaimed Ocean Glass" text="Every piece starts as discarded glass from the ocean"/>
<ImpactCard icon="hammer" header="Hand-Forged" text="Crafted by skilled artisans using traditional techniques"/>
<ImpactCard icon="heart" header="Funds Ocean Cleanup" text="A portion of proceeds supports marine conservation"/>

</div>

</section>

</>
}


export default ImpactSection