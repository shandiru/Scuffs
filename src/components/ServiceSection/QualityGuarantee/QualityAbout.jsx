import React from 'react';

const QualityAbout = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground mt-10">Our Commitment to Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            We stand behind every repair with comprehensive warranties and guarantees because we believe in the quality of our workmanship and want you to have complete confidence in our services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Comprehensive Warranty Coverage</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-6 w-6 text-accent">
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">12 Month Standard Warranty</h4>
                  <p className="text-muted-foreground">All repairs covered for 12 months against defects in workmanship and materials</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award h-6 w-6 text-accent">
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                    <circle cx="12" cy="8" r="6"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Lifetime Structural Warranty</h4>
                  <p className="text-muted-foreground">Structural and frame repairs backed by lifetime warranty</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thumbs-up h-6 w-6 text-accent">
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">100% Satisfaction Guarantee</h4>
                  <p className="text-muted-foreground">If you're not completely satisfied, we'll make it right</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <img alt="Quality guarantee documentation" className="w-full h-74 object-cover rounded-lg" src="/quality.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default QualityAbout;
