import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ConctactPage = () => {
  return (
    <>
      <Navbar />
      <main className="container bg-primary-foreground">
        <div className="max-w-[50%] mx-auto pt-40 pb-20">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-black mb-5">
              Contact Us
            </h1>
            <p>
              We&apos;re currently working on this page to provide you with the
              best experience possible. Check back soon or contact us if you
              need immediate assistance.
            </p>
          </div>
          <div className="flex gap-4 mt-14 items-center justify-center">
            <Link
              href="/"
              className="inline-flex items-center text-primary-foreground justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-primary hover:bg-secondary hover:text-secondary-foreground h-10 px-4 py-2">
              <ArrowLeft />
              Back to home
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input border-gray-300 bg-background hover:bg-secondary hover:text-secondary-foreground h-10 px-4 py-2">
              Contact Support
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ConctactPage;
