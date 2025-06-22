const TermsOfServicePage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Terms of Service</h1>
          <p className="text-lg text-gray-400 mt-2">Last updated: June 21, 2025</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-8 sm:p-10 rounded-2xl shadow-lg">
          <div className="prose prose-invert prose-lg max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:text-primary prose-h2:mb-4 prose-p:text-gray-300 prose-a:text-primary hover:prose-a:text-primary-400 prose-strong:text-white">
            <p>
              By accessing and using the RY7 Studios platform, you agree to comply with and be bound by the following terms and conditions.
            </p>
            
            <h2>1. Usage License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on RY7 Studios' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h2>2. Service Commitments</h2>
            <p>
              As a "Seller", you commit to delivering services as described in your listings. As a "Buyer", you commit to providing clear requirements and timely payments. All users agree to communicate respectfully.
            </p>
            
            <h2>3. User Conduct</h2>
            <p>
              You agree not to use the platform for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the platform in any way that could damage the platform, the services, or the general business of RY7 Studios.
            </p>

            <h2>4. Payment Terms</h2>
            <p>
              For Pro plans, you agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. All payments are managed through a secure third-party payment processor.
            </p>
            
            <h2>5. Termination Conditions</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2>6. Dispute Resolution</h2>
            <p>
              Any disputes arising out of or in connection with this agreement shall be resolved through binding arbitration in accordance with the rules of the designated arbitration body.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage; 