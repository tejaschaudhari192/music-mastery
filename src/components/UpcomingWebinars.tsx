import Link from "next/link";
import {HoverEffect} from "@/components/ui/card-hover-effect";

const featuredWebinars = [
    {
        title: 'Understanding Music Theory',
        description:
            'Dive deep into the fundamentals of music theory and enhance your musical skills.',
        slug: 'understanding-music-theory',
        isFeatured: true,
    },
    {
        title: 'The Art of Songwriting',
        description:
            'Learn the craft of songwriting from experienced musicians and songwriters.',
        slug: 'the-art-of-songwriting',
        isFeatured: true,
    },
    {
        title: 'Mastering Your Instrument',
        description:
            'Advanced techniques to master your musical instrument of choice.',
        slug: 'mastering-your-instrument',
        isFeatured: true,
    },
    {
        title: 'Music Production Essentials',
        description:
            'Get started with music production with this comprehensive overview.',
        slug: 'music-production-essentials',
        isFeatured: true,
    },
    // Added two more webinars
    {
        title: 'Live Performance Techniques',
        description:
            'Enhance your live performance skills with expert tips and strategies.',
        slug: 'live-performance-techniques',
        isFeatured: true,
    },
    {
        title: 'Digital Music Marketing',
        description:
            'Learn how to promote your music effectively in the digital age.',
        slug: 'digital-music-marketing',
        isFeatured: true,
    },
];

const UpcomingWebinars = () => {
    return (
        <div className={"p-12 bg-gray-900"}>
            <div className={"max-w-7xl mx-auto px-4 sm:px-6"}></div>
            <div className={"text-center"}>
                <h3 className={"uppercase text-base text-teal-600 font-semibold tracking-wide"}>
                    featured webinars
                </h3>
                <h2
                    className={"mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl capitalize"}
                >
                    enhance your musical journey</h2>
            </div>
            <div className={"mt-10"}>
                    <HoverEffect items={featuredWebinars.map(webinar => (
                        {
                            title: webinar.title,
                            description:webinar.description,
                            link:"/"
                        }
                    ))}/>
            </div>
            <div className={"mt-10 text-center"}>
                <Link href={"/"}>
                    <button
                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <span
                                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                        <span
                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-normal text-white backdrop-blur-3xl capitalize">
                                            view all webinars
                                            </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UpcomingWebinars;