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
            <Link href="/registers" className={cn(buttonVariants({ size: "lg" }))}>
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
