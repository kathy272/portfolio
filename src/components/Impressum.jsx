
import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
const Impressum = () => {
    return (
        <div className="min-h-screen bg-primary">
            <Navbar />

            <main className="bg-primary max-w-[90vw] text-secondary px-20 py-24">
                <div className="mx-auto">

                    <h1 className="text-4xl font-light uppercase mb-12">
                        Impressum
                    </h1>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            Media Owner
                        </h2>
                        <p>Katharina Kendlbacher</p>
                        <p>Maxglanerhauptstraße 25, 5020 Salzburg</p>
                        <p>Austria</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            Location of Trade Authorisation
                        </h2>
                        <p>Salzburg, Austria</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            Subject Matter of the Website
                        </h2>
                        <p>
                            This website serves as a personal
                            professional portfolio presenting my
                            creative work, projects, professional
                            experience and skills in design,
                            multimedia and digital communication.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            Contact
                        </h2>
                        <p>
                            Email: kendlbacherkatharina@gmail.com
                        </p>
                        <p>
                            LinkedIn:{" "}
                            <a
                                href="https://www.linkedin.com/in/katharina-kendlbacher-10a3212b1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-secondary"
                            >
                                LinkedIn Profile
                            </a>
                        </p>
                    </section>

                </div>
            </main>

            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default Impressum;
