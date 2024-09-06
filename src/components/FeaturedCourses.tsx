"use client"
import Link from "next/link";
import courseData from "../data/music_courses.json"
import {BackgroundGradient} from "@/components/ui/background-gradient";

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,

}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className={"py-12 bg-gray-900"}>
            <div className={"text-center"}>
                <h3 className={"uppercase text-base text-teal-600 font-semibold tracking-wide"}>
                    featured courses
                </h3>
                <h2
                    className={"mt-2 text-3xl leading-8 font-bold tracking-tight sm:text-4xl"}
                >
                    Learn With the Best</h2>
            </div>
            <div className={"mt-10"}>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"}>
                    {featuredCourses.map((course: Course) => (
                        <div className={"flex justify-center"} key={course.id}>
                            <BackgroundGradient className={"flex flex-col rounded-[22px] bg-white" +
                                " dark:bg-zinc-900 overflow-hidden h-full max-w-sm"}>
                                <div className={"p-4 sm:p-6 flex flex-col items-center text-center flex-grow"}>
                                    <p
                                        className={"text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200"}
                                    >{course.title}</p>
                                    <p
                                        className={"text-sm text-neutral-600 dark:text-neutral-400 flex-grow"}
                                    >{course.description}</p>
                                    <Link href={`/courses/${course.slug}`}>
                                    <button
                                        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                        <span
                                            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                                        <span
                                            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-normal text-white backdrop-blur-3xl">
                                            learn more
                                            </span>
                                    </button>
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"mt-20 text-center capitalize"}>
                <Link href={"/courses"}>
                    view all courses
                </Link>

            </div>
        </div>
    );
};

export default FeaturedCourses;