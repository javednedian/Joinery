import Image from "next/image";
import Link from "next/link";

export default function doorsAndWindows() {
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
	background-image: url('../images/Vanity Unit Installation.jpg') !important;
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

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Doors & Windows</h5>

				<p className="mt-4 text-white">Home/<span>Doors & Windows</span></p>

			</div>

		</div>

	  </div>

 </section>

        <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">
                <div className="col-md-6 my-auto">


				<h2 className="main_heading">Doors & Windows</h2>
        
				<h4 className="sub_heading">1.Craftsmanship That Defines Every Detail</h4>

<p className="my-4">When it comes to transforming a space, the doors and windows often set the tone long before you step inside. High-quality doors joinery and windows joinery are not just functional necessities; they are statements of style, durability, and personality. Every curve, joint, and finish reflects the skill of true craftsmanship, something that ready-made solutions often fail to deliver. </p>
      <p className="my-4">This is where bespoke door joinery services step in, offering homeowners, designers, and businesses the opportunity to bring their vision to life with precision and elegance. Whether you are looking for timeless wooden doors, sleek contemporary windows, or something entirely custom, the right joinery turns an ordinary frame into a masterpiece.</p>
			</div>
	    <div className="col-md-6 my-auto">

				<img src="/images/joinery7.jpg" className="w-100" style={{borderRadius: "30px" ,height: "450px"}}/>
                
			</div>
    </div>

    <h4 className="sub_heading">2.Bespoke Solutions for Every Home and Space</h4>

<p className="my-4">No two homes are the same, and neither should their doors and windows be. Bespoke door joinery ensures that every detail, from the choice of wood to the type of finish, is carefully tailored to your preferences and the character of your property. With custom-made designs, you can enjoy perfect proportions, smooth operation, and aesthetics that align seamlessly with your interior or exterior style. </p>
<p className="my-4">Similarly, windows joinery is about more than just light and ventilation; it’s about creating frames that elevate the entire ambiance of your living space. Whether you are upgrading a classic villa or designing a modern apartment, crafted joinery solutions provide durability, insulation, and beauty that mass-produced options simply cannot match.</p>
    
	<h4 className="sub_heading">3.Excellence in Dubai’s Joinery Craft</h4>
    <p className="my-4">In a city where architecture meets innovation, doors joinery Dubai and windows joinery Dubai services have become synonymous with quality and sophistication. Clients here demand the highest standards, not just in looks but also in performance. From energy-efficient windows that keep interiors cool to robust door systems that provide security without compromising elegance, the joinery offered in Dubai combines tradition with cutting-edge techniques.</p>

<p className="my-4"> Every project is approached with meticulous care, ensuring long-lasting results that blend functionality with a touch of luxury. Choosing professional door joinery services in Dubai means investing in craftsmanship that complements your home’s value, enhances its appeal, and stands the test of time.</p>
</div>
<div className="col-md-12 mt-4 text-center">

				 <Link href="/contact-us"><button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img src="/images/arrow.png"/></span></button></Link>


					</div>
</section>

</>
  );
}






