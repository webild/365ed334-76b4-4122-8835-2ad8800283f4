"use client";
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleStepsBento from '@/components/bento/SimpleStepsBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';

const mockTestimonials = [
  { quote: "Great service!", name: "John Doe" },
  { quote: "Highly recommend it!", name: "Jane Smith" },
];

const mockServices = [
  { title: "Service One", description: "Description of service one", icon: <Image src="/images/logo.svg" alt="Icon 1" /> },
  { title: "Service Two", description: "Description of service two", icon: <Image src="/images/logo.svg" alt="Icon 2" /> },
];

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <input type="text" placeholder="Name" className="border p-2" required />
      <input type="email" placeholder="Email" className="border p-2" required />
      <textarea placeholder="Message" className="border p-2" required></textarea>
      <button type="submit" className="bg-blue-600 text-white py-2">Submit</button>
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'funAndTrendy',
      colorTemplate: 1,
      textAnimation: 'slide'
    }}>
      <section id="hero" className="bg-gradient-to-r from-blue-50 to-white p-10">
        <SimpleHero title="Welcome to Our Website" description="We provide the best services" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </section>
      <section id="about" className="bg-white p-10">
        <MinimalAbout description="We are a leading company in our field." />
      </section>
      <section id="services" className="bg-soft-noise p-10">
        <SimpleKPIBento items={mockServices} className="custom-class" />
      </section>
      <section id="testimonials" className="bg-white p-10">
        <h2 className="text-2xl mb-4">Testimonials</h2>
        {mockTestimonials.map((testimonial, index) => (
          <div key={index} className="border p-4 mb-2">{testimonial.quote} - <strong>{testimonial.name}</strong></div>
        ))}
      </section>
      <section id="contact" className="bg-f8fbff p-10">
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <ContactForm />
      </section>
      <footer className="bg-f7f7f7 p-10">
        <SimpleFooter columns={[{ title: 'Privacy', items: [{ label: 'Privacy Policy', onClick: () => {} }] }]} copyrightText="© 2023 Generic Company" onPrivacyClick={() => {}} />
      </footer>
    </SiteThemeProvider>
  );
}