import CtaButton from "../Parts/CtaButton";

function StorySection() {
  return (
    <>
      <section className="story">
        <div className="story-container column">

      
        <img src="/images/raw-glass.jpg"></img>
             <div className="story-text">

        <h2>The Story</h2>

        <p>
          Every shard reborn carries the story of a tide. Our artisans transform
          discarded ocean glass into functional works of art, honoring both the
          sea's beauty and our commitment to sustainability.
        </p>
        <p>
          Each piece begins its journey in the ocean's embrace, weathered by
          salt and waves until it reaches our workshop. There, skilled hands
          shape it into dinnerware that brings the ocean's serenity to your
          table.
        </p>

        <p>
          The imperfections tell the story—no two pieces are identical, just as
          no two waves are the same. This is luxury with purpose, beauty with
          meaning.
        </p>

        <CtaButton text="Discover Our Story" type="alt" />
       </div>
        
        
        </div>
      </section>
    </>
  );
}

export default StorySection;
