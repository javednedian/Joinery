import Image from "next/image";
import Link from "next/link";

export default function residentialJoineryWorks() {
  return (
	<>

{/* <style jsx>{` 

.form_box{
	background-color: #f5f5f5;
	padding: 45px 45px;
}

.form-control{
	margin-bottom: 20px;
    font-size: 14px;
    line-height: normal;
    padding: 10px 20px;
    font-weight: normal;
    border-width: 0 0 1px 0;
    font-family: inherit;
    background-color: transparent;
    border-radius: 10px;
    border: unset;
    transition: all 500ms ease;
    -webkit-transition: all 500ms ease;
    background-color: #ffffff;
	font-family: 'Outfit', sans-serif;
}

.field{
	height: 50px;
}

.error{
	color: red;
	font-size: 14px;
}

.bread_title{
	background-image: url('../images/Bathtub to Shower Conversion.jpg') !important;
	background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
	background-blend-mode: color;
    background-color: #0000005e;
}
`}
</style> */}

<section className="bread_title py-5">

	  <div className="container my-5">

		<div className="row py-5">

			<div className="col-md-12 mt-4 text-center">

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Residential Joinery Works</h5>

				<p className="mt-4 text-white">Home/<span>Residential Joinery Works</span></p>

			</div>

		</div>

	  </div>

 </section>

        <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">
                <div className="col-md-6 my-auto">


				<h2 className="main_heading">Residential Joinery Works</h2>
				<h4 className="sub_heading">1.Bringing Character and Comfort into Every Home</h4>

				<p className="my-4">A home is not just a place to live, it reflects personal style, comfort, and identity. The role of residential joinery in shaping this environment is invaluable. Every door, wardrobe, staircase, or shelving unit contributes to how a space feels and functions. Unlike factory-made solutions, residential joinery focuses on bespoke craftsmanship, ensuring that each element is tailored to the homeowner’s vision. </p>
    <p className="my-4">From classic wooden details that radiate warmth to sleek modern finishes that embody contemporary living, custom joinery turns an ordinary house into a distinctive home. The precision, durability, and artistry involved in residential joinery guarantee interiors that are as practical as they are beautiful.
</p>
			</div>
	    <div className="col-md-6 my-auto">

				<img  src="/images/joinery10.jpg" className="w-100" style={{borderRadius: "30px" ,height: "450px"}}/>
                
			</div>
    </div>


    <h4 className="sub_heading">2.Custom Residential Joinery for Modern Living</h4>

    <p className="my-4">Every family has unique needs, and every home tells a different story. This is where custom residential joinery services make all the difference. Whether it’s designing a kitchen that maximizes storage without compromising elegance, building wardrobes that blend seamlessly with bedroom interiors, or crafting staircases that serve as a centrepiece, custom joinery adapts to both lifestyle and design preferences.</p>
    <p className="my-4">Unlike generic options, bespoke joinery considers the dimensions of your home, your daily routines, and your desired aesthetic. This level of detail allows homeowners to create spaces that are not only functional but also deeply personal. From open-plan apartments to spacious villas, custom joinery ensures that no two homes are ever the same.
</p>
    {/* <p className="my-4">Clients often find that switching to a shower also makes cleaning quicker and easier. With fewer nooks and crannies than a traditional tub, and options for low-maintenance materials like acrylic panels or large-format tiles, your new shower can stay sparkling clean with minimal effort.</p> */}

    <h4 className="sub_heading">3.Residential Joinery Services That Add Lasting Value</h4>
    <p className="my-4">Choosing professional residential joinery services is an investment in long-term comfort and style. Beyond enhancing aesthetics, bespoke joinery provides practical benefits such as increased storage, better space utilization, and improved durability compared to mass-produced furniture. Kitchen cabinetry designed with joinery expertise ensures smooth functionality for years, while custom wardrobes eliminate wasted space with tailored fittings. </p>
    <p className="my-4">Shelving and storage units can be designed to complement the home’s architecture, and wall panelling or flooring crafted through skilled joinery brings warmth and character to interiors. Each service is carried out with a focus on precision, ensuring that the final result stands the test of time while enhancing the overall value of the property.</p>
    {/* <p className="my-4">Throughout the process, transparency is key. You’ll always know what to expect, with regular updates, clear timelines, and professional guidance every step of the way. And when the work is complete, you’ll be left with a bathroom that not only looks incredible but feels like it was made just for you.</p> */}
    
</div>
<div className="col-md-12 mt-4 text-center">

				 <Link href="/contact-us"><button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img  src="/images/arrow.png"/></span></button></Link>


					</div>
</section>
   </>
  );
}