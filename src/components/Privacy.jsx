
import React from "react";
import { Navbar, Contact } from "./";

const Privacy = () => {
    return (
        <div className="min-h-screen bg-primary">
            <Navbar />

            <main className="bg-primary text-secondary px-6 py-24">
                <div className="mx-auto">

                    <h1 className="text-4xl font-light uppercase mb-4">
                        Privacy Policy
                    </h1>

                    <p className="mb-12">
                        Last updated: November 2026
                    </p>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            1. Data Controller
                        </h2>
                        <p>Katharina Kendlbacher</p>
                        <p>Email: kendlbacherkatharina@gmail.com</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            2. General Information
                        </h2>
                        <p>
                            This website is a personal portfolio
                            presenting my professional background,
                            projects and creative work.
                        </p>
                        <p className="mt-3">
                            I do not operate an account registration
                            system, contact form database or analytics
                            service on this website.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            3. Hosting and Server Logs
                        </h2>

                        <p>
                            This website is hosted using GitHub Pages,
                            a hosting service provided by GitHub.
                        </p>

                        <p className="mt-3">
                            When you visit this website, GitHub may
                            process technical information about your
                            visit, including your IP address and other
                            technical data, for the purpose of providing,
                            maintaining and securing the website.
                        </p>

                        <p className="mt-3">
                            Depending on the services used, personal
                            data may also be processed outside the
                            European Economic Area. For further
                            information about international data
                            transfers and the safeguards applied,
                            please refer to GitHub's Privacy Statement.
                        </p>

                        <p className="mt-3">
                            For further information about how GitHub
                            processes personal data, please refer to:
                        </p>

                        <a
                            href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-secondary"
                        >
                            GitHub Privacy Statement
                        </a>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            4. Contact
                        </h2>

                        <p>
                            This website provides an email link that
                            opens your own email application. No
                            information is submitted to a contact form
                            or stored in a website database.
                        </p>

                        <p className="mt-3">
                            If you contact me via email, the personal
                            information you provide, such as your email
                            address and the content of your message,
                            will be processed to respond to your inquiry.
                        </p>

                        <p className="mt-3">
                            The legal basis for processing is Article
                            6(1)(b) GDPR where the inquiry relates to
                            pre-contractual measures, or Article
                            6(1)(f) GDPR where I have a legitimate
                            interest in responding to general inquiries.
                        </p>

                        <p className="mt-3">
                            Emails are received and stored using Gmail,
                            a service provided by Google. Google may
                            process personal data in accordance with
                            its own privacy policy.
                        </p>

                        <p className="mt-3">
                            Your emails are retained only as long as
                            necessary to handle the inquiry and any
                            resulting obligations.
                        </p>

                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-secondary"
                        >
                            Google Privacy Policy
                        </a>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            5. External Links
                        </h2>
                        <p>
                            This website contains links to external
                            websites, including LinkedIn.
                        </p>
                        <p className="mt-3">
                            Clicking these links will take you to the
                            respective platforms, which process personal
                            data according to their own privacy policies.
                            I have no control over their data processing.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            6. Google Fonts
                        </h2>
                        <p>
                            This website uses Google Fonts to display
                            text in the fonts Poppins and Inter.
                        </p>
                        <p className="mt-3">
                            The fonts are loaded directly from Google
                            servers. When visiting this website, your
                            browser connects to Google's servers, which
                            may involve the transmission of your IP
                            address and technical information.
                        </p>
                        <p className="mt-3">
                            For further information about Google's data
                            processing, please refer to:
                        </p>
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-secondary"
                        >
                            Google Privacy Policy
                        </a>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            7. Cookies and Analytics
                        </h2>

                        <p>
                            This website does not use analytics,
                            advertising or marketing tracking services.
                            No analytics services such as Google
                            Analytics are integrated.
                        </p>

                        <p className="mt-3">
                            This website is not designed to use
                            nonessential tracking cookies.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            8. Your Rights
                        </h2>
                        <p>
                            Under the GDPR, you have the right to access,
                            rectify, erase and restrict the processing
                            of your personal data, as well as the right
                            to data portability where applicable.
                        </p>
                        <p className="mt-3">
                            You also have the right to object to
                            processing based on legitimate interests.
                        </p>
                        <p className="mt-3">
                            To exercise your rights, please contact me at:
                            {" "}
                            kendlbacherkatharina@gmail.com
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-xl mb-4">
                            9. Right to Lodge a Complaint
                        </h2>
                        <p>
                            If you believe that your personal data is
                            being processed unlawfully, you have the
                            right to lodge a complaint with the Austrian
                            Data Protection Authority.
                        </p>
                        <a
                            href="https://www.dsb.gv.at/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-secondary"
                        >
                            Austrian Data Protection Authority
                        </a>
                    </section>

                </div>
            </main>

            <div className="relative z-0">
                <Contact />
            </div>
        </div>
    );
};

export default Privacy;
