"use client"
import { MinimalNavbar } from '@/components/navigation/MinimalNavbar';
import { ContentTextbox } from '@/components/textbox/ContentTextbox';
import { SimpleHero } from '@/components/sections/layouts/hero/SimpleHero';
import { Tokenomics } from '@/components/sections/layouts/tokenomics/ExpandingTokenomics';
import { Testimonials } from '@/components/sections/layouts/testimonials/Testimonials';
import { BentoFAQ } from '@/components/sections/layouts/faq/BentoFAQ';
import { SimpleFooter } from '@/components/sections/layouts/footer/SimpleFooter';
import Image from 'next/image';

const mockTestimonials = [{
  quote: "This service is fantastic!",
  name: "John Doe"
}, {
  quote: "I love using this product!",
  name: "Jane Smith"
}];

const mockFAQs = [{
  title: "What is your return policy?",
  content: "You can return items within 30 days for a full refund."
}, {
  title: "Do you ship internationally?",
  content: "Yes, we ship worldwide!"
}];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero" className="bg-gradient-to-r from-blue-100 to-white py-20">
        <SimpleHero title="Welcome to Our Website" description="Your one-stop solution for all your needs!" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </section>
      <section id="about" className="bg-white py-20">
        <ContentTextbox title={<h2>About Us</h2>} description={<p>We provide top-notch services to ensure satisfaction.</p>}>
          <ul className="list-disc pl-5">
            <li>Quality services</li>
            <li>Customer-oriented</li>
            <li>24/7 Support</li>
          </ul>
        </ContentTextbox>
      </section>
      <section id="services" className="bg-soft-noise py-20">
        <ContentTextbox title={<h2>Our Services</h2>} description={<p>Explore our offerings below:</p>}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Services would be added here accordingly */}
          </div>
        </ContentTextbox>
      </section>
      <section id="testimonials" className="bg-white py-20">
        <ContentTextbox title={<h2>Testimonials</h2>} description={<p>What our clients say:</p>}>
          <div>
            {mockTestimonials.map((testimony, index) => (
              <blockquote key={index} className="border-l-4 pl-4 border-blue-500">
                <p className="italic">{testimony.quote}</p>
                <p className="font-bold">- {testimony.name}</p>
              </blockquote>
            ))}
          </div>
        </ContentTextbox>
      </section>
      <section id="contact" className="bg-f8fbff py-20">
        <ContentTextbox title={<h2>Contact Us</h2>} description={<p>Feel free to reach out!</p>}>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" className="border p-2" required/>
            <input type="email" placeholder="Your Email" className="border p-2" required/>
            <textarea placeholder="Your Message" className="border p-2" required></textarea>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
          </form>
        </ContentTextbox>
      </section>
      <section id="privacy" className="bg-f7f7f7 py-20">
        <ContentTextbox title={<h2>Privacy Policy</h2>} description={<p>Your privacy is important to us.</p>}>
          <a href="#" className="text-blue-500">Read full policy</a>
        </ContentTextbox>
      </section>
      <section id="terms" className="bg-f7f7f7 py-20">
        <ContentTextbox title={<h2>Terms of Use</h2>} description={<p>Understand our terms before using our services.</p>}>
          <a href="#" className="text-blue-500">Read full terms</a>
        </ContentTextbox>
      </section>
      <footer>
        <SimpleFooter columns={[{ title: 'Company', items: [{ label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {}},]}]} copyrightText="© 2023 Company Name" onPrivacyClick={() => {}} />
      </footer>
    </div>
  );
}
