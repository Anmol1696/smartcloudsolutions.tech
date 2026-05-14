import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { OssBar } from "@/components/sections/OssBar";
import { Engagement } from "@/components/sections/Engagement";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Capabilities />
        <SelectedWork />
        <OssBar />
        <Engagement />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
