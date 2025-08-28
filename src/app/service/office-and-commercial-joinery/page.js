import Image from "next/image";
import Link from "next/link";

export default function officeAndCommercialJoinery() {
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
	background-image: url('../images/Waterproofing & Tiling.jpg') !important;
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

				<h5 className="main_heading text-white" style={{fontSize: "55px"}}>Office & Commercial Joinery</h5>

				<p className="mt-4 text-white">Home/<span>Office & Commercial Joinery</span></p>

			</div>

		</div>

	  </div>

 </section>

        <section className="feature_sec py-4">

	  <div className="container my-5">

		<div className="row">
                <div className="col-md-6 my-auto">


				<h2 className="main_heading">Office & Commercial Joinery</h2>
				<h4 className="sub_heading">1.Precision That Defines Professional Spaces</h4>

				<p className="my-4">Creating a functional yet inspiring workplace requires more than just furniture; it requires thoughtful craftsmanship that blends practicality with design. This is where commercial joinery specialists' step in, delivering tailored solutions for offices, retail environments, and corporate spaces. From boardrooms to reception areas, every detail matters.</p>
    <p className="my-4">Professional office joinery ensures that desks, partitions, storage units, and shelving are not only durable but also aligned with the brand’s personality and culture. With custom commercial joinery, businesses can maximize their space, improve workflow, and create interiors that leave a lasting impression on clients and employees alike.
</p>

<h4 className="sub_heading">2.Bespoke Joinery for Offices and Workspaces</h4>

    <p className="my-4">Every business is unique, and so are its spatial needs. Commercial bespoke joinery allows organizations to move beyond off-the-shelf solutions, opting instead for designs that perfectly reflect their vision. Whether it’s an open-plan setup, executive office, or collaborative workspace, tailored office joinery services Dubai guarantee solutions that balance style with efficiency.</p>

			</div>
	    <div className="col-md-6 my-auto">

				<img src="/images/joinery9.jpg" className="w-100" style={{borderRadius: "30px" ,height: "450px"}}/>
                
			</div>
    </div>

    <p className="my-4"> Even for those working remotely, home office joinery brings the same level of quality to personal workspaces, ensuring comfort, organization, and professional appeal at home. With the right joinery partner, every workspace, big or small, becomes a hub of productivity and elegance.</p>

    <h4 className="sub_heading">3.Office & Commercial Joinery in Dubai</h4>
    <p className="my-4">Dubai has become a global hub for business, innovation, and design. Naturally, the demand for high-quality commercial interior joinery and office fit out joinery solutions is ever-growing. Companies here require interiors that are not only visually impressive but also built to withstand daily use in a fast-paced environment. </p>
    <p className="my-4">Professional office joinery Dubai services provide everything from reception counters and meeting room tables to storage walls and customized workstations, all designed to match the city’s modern standards. By choosing trusted commercial joinery Dubai experts, businesses invest in interiors that elevate their brand, support their team, and deliver long-term value through exceptional craftsmanship.</p>
</div>
<div className="col-md-12 mt-4 text-center">

				 <Link href="/contact-us"><button className="btn btn-primary main_btn mb-3">Book Service Now<span className="arrow_btn3"><img src="/images/arrow.png"/></span></button></Link>


					</div>
</section>

</>
  );
}