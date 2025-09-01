import React from "react";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl md:text-5xl text-foreground mb-4">
            Our Credentials
          </h2>
          <p className="font-dm-sans text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognized excellence in vehicle body repair services with
            industry-leading certifications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Awards */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {/* Award Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-award w-6 h-6 text-primary"
                    >
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                      <circle cx="12" cy="8" r="6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl text-card-foreground">
                      Best Business of 2025
                    </h3>
                    <p className="font-dm-sans text-muted-foreground">
                      ThreeBest Rated Excellence Award
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans text-card-foreground">
                  Recognized as one of the top vehicle body repair specialists,
                  demonstrating consistent excellence in service quality and
                  customer satisfaction.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {/* Shield Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-shield w-6 h-6 text-primary"
                    >
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl text-card-foreground">
                      Top 3 Car Body Shops
                    </h3>
                    <p className="font-dm-sans text-muted-foreground">
                      Sheffield, UK - Certificate of Excellence
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans text-card-foreground">
                  Certified as one of the top 3 car body shops in Sheffield, UK,
                  after extensive customer reviews and quality assessments.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-card border-border">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {/* Star Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star w-6 h-6 text-primary"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-xl text-card-foreground">
                      5-Star Rating
                    </h3>
                    <p className="font-dm-sans text-muted-foreground">
                      Consistent Customer Excellence
                    </p>
                  </div>
                </div>
                <p className="font-dm-sans text-card-foreground">
                  Maintaining a perfect 5-star rating through commitment to
                  quality workmanship, customer service, and professional
                  standards.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 shadow-lg">
              <h3 className="font-space-grotesk font-bold text-xl text-card-foreground mb-4 text-center">
                Official Certifications
              </h3>
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    alt="Best Business of 2025 - ThreeBest Rated Excellence Award"
                    className="object-contain w-full h-full"
                    src="/certificate1.png" // replace with your local path
                  />
                </div>
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    alt="Certificate of Excellence 2025 - Top 3 Car Body Shops Sheffield"
                    className="object-contain w-full h-full"
                    src="/certificate2.png" // replace with your local path
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
