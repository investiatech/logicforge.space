import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="space-y-6 pb-4 pt-8 md:pb-8 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold tracking-tight text-gray-800 text-5xl lg:text-7xl mb-4">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800'>AI Driven Solutions</span> for Smarter Decision Making.
          </h1>
          <p className="max-w-[68rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mb-6">
            Project Logic Forge is a pioneering software company dedicated to transforming the landscape of data analytics and intelligent automation. With a focus on leveraging cutting-edge technologies, such as artificial intelligence, machine learning, and advanced data integration, Logic Forge provides businesses with innovative tools to turn complex data into actionable insights. Our solutions empower organizations to make smarter decisions, streamline operations, and drive sustainable growth.
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Request a Demo
            </Link>
            <Link
              href={"https://github.com/investiatech"}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
          <Image
            src="man-on-a-bicycle.svg"
            alt="Landscape picture"
            className="max-h-[40rem] max-w-full mt-6 justify-center items-center"
            width={800}
            height={600}
          />
        </div>
      </section>

      <section id="about" className="container py-8">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center justify-center gap-4 text-center mb-8">
          <h2 className="font-bold text-gray-800 text-3xl tracking-tight sm:text-3xl md:text-4xl">Logic Forge is The Best Choice for Data Solutions.
          </h2>
          <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-justify">
            Logic Forge Software Solutions is at the forefront of the data revolution, dedicated to helping businesses unlock the true potential of their data. By leveraging advanced artificial intelligence, machine learning, and state-of-the-art analytics, we provide comprehensive solutions that transform raw data into strategic assets.  The code is available on{" "}
            <Link
              href={"https://github.com/investiatech"}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
      <section id="mission" className="container py-8">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center justify-center gap-4 text-center mb-8">
          <h2 className="font-bold text-gray-800 text-3xl tracking-tight sm:text-3xl md:text-4xl">
            Empowering Businesses Through Data-Driven Innovation.
          </h2>
          <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-justify">
            Our mission is to empower organizations to make data-driven decisions with confidence. We aim to simplify complexity through intuitive software, enabling businesses to achieve greater efficiency, innovation, and growth.<br />{" "}
          </p>
        </div>
      </section>
      <section id="mission" className="container py-8">
        <div className="mx-auto flex max-w-[64rem] flex-col items-center justify-center gap-4 text-center mb-8">
          <h2 className="font-bold text-gray-800 text-3xl tracking-tight sm:text-3xl md:text-4xl">
            Pioneering the Future of Data Intelligence.
          </h2>
          <p className="max-w-[95%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-justify">
            We envision a world where every organization, regardless of its size or industry, can harness the power of data to innovate, optimize, and excel. Through continuous innovation, we aspire to be the trusted partner in your journey toward data excellence. At Logic Forge Software Solutions, we envision a world where data-driven insights are at the core of every business decision. Our goal is to lead the way in transforming raw data into strategic assets that empower organizations to innovate, optimize, and excel. Through relentless innovation and a commitment to excellence, we aspire to be the trusted partner for businesses seeking to unlock their full potential.<br />{" "}
            .{" "}
          </p>
        </div>
      </section>
      <footer>
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-left">
              Built by{" "}
              <a
                href={"http://investia.tech"}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Investia.Tech
              </a>
              . Illustrations by{" "}
              <a
                href="https://popsy.co"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Popsy
              </a>
              . The source code is available on{" "}
              <a
                href={"https://github.com/investiatech"}
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
