import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <div>
        <Head>
          <title>Smart Cloud Solutions</title>
          <meta name="description" content="Smart Cloud Solutions - Your trusted partner in software consultancy and cloud solutions." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <section id="home" className="my-8">
            <h1 className="text-4xl font-bold">Welcome to Smart Cloud Solutions</h1>
            <p className="text-lg mt-4">Your trusted partner in software consultancy and cloud solutions.</p>
          </section>

          <section id="about" className="my-8">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="mt-4">Smart Cloud Solutions is a leading software consultancy firm based in the UAE. We specialize in delivering cutting-edge cloud solutions and software development services to help businesses thrive in the digital era.</p>
          </section>

          <section id="services" className="my-8">
            <h2 className="text-3xl font-semibold">Our Services</h2>
            <ul className="list-disc list-inside mt-4">
              <li>Cloud Consulting</li>
              <li>Software Development</li>
              <li>IT Strategy and Planning</li>
              <li>Project Management</li>
            </ul>
          </section>

          <section id="contact" className="my-8">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-4">Email: anmol1696@gmail.com</p>
            <p>Phone: +971 58 697 8210</p>
          </section>
        </main>

        <Footer />
      </div>
  );
}
