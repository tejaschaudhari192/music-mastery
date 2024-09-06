import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import SchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
            <HeroSection/>
            <FeaturedCourses/>
            <WhyChooseUs/>
            <SchoolTestimonials/>
            <UpcomingWebinars/>
        </main>
    );
}
