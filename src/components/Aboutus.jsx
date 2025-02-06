import React from "react";
import { Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section>
       
      
        <div>
          <h1 className="text-black text-4xl font-bold text-center mt-20">
          About Our Company
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Creating immaculate environments across Africa</h2>
            <p className="text-gray-600">
            The employees that work for Cleandot are the heart and soul of our organisation. They really mean the world to us and our customers. We provide the very best training for those involved at Cleandot from day one, offering continual professional development, career & leadership development opportunities.
            </p>
            <p className="text-gray-600 mt-4">
            We are an equal opportunity employer and recruit on that basis. We are committed to ensuring that our workplaces are free from unlawful or unfair discrimination based on colour, race, nationality, ethnicity, marital status, disability, religious beliefs or age. No compromise, no exceptions.
            </p>
            <p className="text-gray-600 mt-4">
            Built into our culture is a relentless focus on our Customers and ensuring we walk the talk. From the onset, we remind every new hire that the Customer is our reason for being. We encourage our team members to speak up, challenge status quo to lift our performance bar even higher and engender a spirit of excellence in everything we do.
            </p>
            <p className="text-gray-600 mt-4">
            We take pride in how we conduct ourselves and recognise the privilege we have as extensions of our Customers' business and community.
            </p>
          </div>
          <div>
            <img src="/public/abpoot.jpg" alt="Cleaning Supplies" className="rounded-lg shadow-lg w-full h-full" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Why Choose Sonic Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700">Why Choose Sonic?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto my-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Customers tell us they value our dedication, competence, and attention to our work and their world.
            They feel safe and secure knowing the places they occupy are cared for in the best possible manner.
          </p>
        </div>

        {/* Grid Section for Values & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Valuing our Customers</h3>
            <p className="text-gray-600 mt-2">
              Over the years, we’ve grown from strength to strength, largely through the power of our Customers’ advocacy.
              There is no substitute for hard work, open communications, visible results, and attention to detail.
              Our Customers deserve nothing less, and it’s not something we take lightly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800">Valuing our Team</h3>
            <p className="text-gray-600 mt-2">
              Our People are the lifeblood of our organization and our biggest strength.
              From our humble inception 12 years ago to over 200+ strong workforce today, our outlook has not changed –
              the sum is greater than individual parts.
              Our low turnover and engaged staff are a testament that working in Cleandot is more than just a job.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800">Our Philosophy</h3>
            <p className="text-gray-600 mt-2">
              We are honest, reliable, and loyal in everything we do. Our Customers trust us with their families and spaces every single day.
              We repay that trust by turning up on time, doing our best, admitting (and fixing!) our mistakes when they occur, and simply getting the job done. Rinse and repeat.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800">Our Standards</h3>
            <p className="text-gray-600 mt-2">
              We hold ourselves accountable for the quality of cleaning and the manner in which it is done.
              Our supervisors and team leads work in tandem with our onsite and customer teams to ensure we leave any premises we clean better than the way we found it.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default AboutUs;
