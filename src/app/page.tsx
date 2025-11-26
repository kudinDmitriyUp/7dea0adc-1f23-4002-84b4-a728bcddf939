"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Rocket, Star, Zap, Users, Globe, TrendingUp, Lightbulb, Linkedin, Twitter } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="small"
      background="circleGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="TechShop"
          navItems={[
            { name: "About", id: "about" },
            { name: "Approach", id: "approach" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Invest in Tomorrow's Technology Leaders"
          description="TechShop identifies and funds visionary entrepreneurs building the next generation of transformative tech companies. We combine strategic capital with deep industry expertise to accelerate growth."
          tag="Venture Capital"
          tagIcon={Rocket}
          buttons={[
            { text: "Explore Our Portfolio", href: "portfolio" },
            { text: "Schedule a Pitch", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144179352-mnnebd0x.jpg"
          imageAlt="Modern venture capital office with tech startup atmosphere"
          frameStyle="browser"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Who We Are"
          description="TechShop is a premier venture capital firm dedicated to fueling innovation. With over two decades of combined experience, our team has backed some of the most successful tech companies in the industry."
          tag="Our Story"
          tagIcon={Star}
          bulletPoints={[
            {
              title: "Early-stage Focus",
              description: "We invest in promising startups at Series A and B stages with disruptive technology and visionary founders",
              icon: Zap
            },
            {
              title: "Strategic Support",
              description: "Beyond capital, we provide mentorship, networking, and operational guidance to accelerate growth",
              icon: Users
            },
            {
              title: "Global Reach",
              description: "Our international network connects portfolio companies with talent, partners, and new markets worldwide",
              icon: Globe
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144181034-0t9saikn.jpg"
          imageAlt="Professional team discussing investment strategy"
          textboxLayout="default"
          imagePosition="right"
        />
      </div>

      <div id="approach" data-section="approach">
        <FeatureCardTwo
          title="Our Investment Approach"
          description="We follow a disciplined process to identify and support exceptional founders and breakthrough technologies"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          features={[
            {
              title: "Market Validation",
              description: "We seek companies addressing large, addressable markets with proven demand and clear path to scale",
              icon: TrendingUp
            },
            {
              title: "Founding Team",
              description: "Exceptional founders with relevant domain expertise, proven execution ability, and unwavering commitment",
              icon: Users
            },
            {
              title: "Technology Edge",
              description: "Proprietary technology, defensible IP, or unique competitive advantages that create long-term value",
              icon: Lightbulb
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <SocialProofTwo
          title="Portfolio Companies"
          description="We've partnered with industry-leading companies reshaping their respective sectors"
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144181678-mdarii2n.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144182776-b7msnwqc.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144183658-9y0hs2v9.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144184538-7prrgvzz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144185309-lg91t3ja.jpg"
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Founders Say"
          description="Hear from the visionary leaders we've had the privilege to partner with and support"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Sarah Chen",
              role: "CEO & Founder",
              company: "CloudFlow AI",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144187571-jz8mqiam.jpg",
              imageAlt: "Sarah Chen, CEO of CloudFlow AI"
            },
            {
              id: "2",
              name: "Marcus Rodriguez",
              role: "Founder",
              company: "SecureVault",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144188300-xleg5w5v.jpg",
              imageAlt: "Marcus Rodriguez, Founder of SecureVault"
            },
            {
              id: "3",
              name: "Emily Watson",
              role: "CEO",
              company: "DataSense Analytics",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144189333-pv2lk5ho.jpg",
              imageAlt: "Emily Watson, CEO of DataSense Analytics"
            },
            {
              id: "4",
              name: "James Park",
              role: "Co-Founder",
              company: "NextGen Biotech",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144189863-arjv1cv4.jpg",
              imageAlt: "James Park, Co-Founder of NextGen Biotech"
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "Founder & CTO",
              company: "QuantumLeap Tech",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144191140-0t55arx2.jpg",
              imageAlt: "Lisa Thompson, Founder of QuantumLeap Tech"
            },
            {
              id: "6",
              name: "David Kumar",
              role: "CEO",
              company: "GreenScale Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144192039-u19lls4o.jpg",
              imageAlt: "David Kumar, CEO of GreenScale Solutions"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Our Leadership Team"
          description="Seasoned investors and operators with proven track records of building and scaling successful companies"
          animationType="slide-up"
          textboxLayout="default"
          members={[
            {
              id: "1",
              name: "Michael Zhang",
              role: "Managing Partner & Co-Founder",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144193226-ynoa968g.jpg",
              imageAlt: "Michael Zhang, Managing Partner",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "2",
              name: "Jennifer Lee",
              role: "Partner & Chief Investment Officer",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144194125-gbzyemis.jpg",
              imageAlt: "Jennifer Lee, Chief Investment Officer",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            },
            {
              id: "3",
              name: "Robert Walsh",
              role: "Partner & Operating Advisor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144194935-dt4mugrq.jpg",
              imageAlt: "Robert Walsh, Operating Advisor",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" }
              ]
            },
            {
              id: "4",
              name: "Victoria Santos",
              role: "Principal Investor",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_340noUjwh7KpDNuxXriz4d54I9H/uploaded-1764144196369-gmc0mpvt.jpg",
              imageAlt: "Victoria Santos, Principal Investor",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Ready to Scale Your Vision?"
          description="Whether you're a founder with a breakthrough idea or an established company looking for growth capital, we'd love to hear from you. Reach out to schedule a conversation with our team."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: true },
            { name: "funding_stage", type: "text", placeholder: "Current Funding Stage", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your company and vision...",
            rows: 5,
            required: true
          }}
          buttonText="Send Inquiry"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="TechShop"
          columns={[
            {
              items: [
                { label: "Home", href: "/" },
                { label: "About Us", href: "about" },
                { label: "Our Approach", href: "approach" }
              ]
            },
            {
              items: [
                { label: "Portfolio", href: "portfolio" },
                { label: "Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Investor Relations", href: "/investors" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}