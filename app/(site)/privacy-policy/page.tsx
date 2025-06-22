const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-lg text-gray-400 mt-2">Last updated: June 21, 2025</p>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 p-8 sm:p-10 rounded-2xl shadow-lg">
          <div className="prose prose-invert prose-lg max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:text-primary prose-h2:mb-4 prose-p:text-gray-300 prose-a:text-primary hover:prose-a:text-primary-400 prose-strong:text-white">
            <p>
              Welcome to RY7 Studios. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            
            <h2>1. Data Collection & Usage</h2>
            <p>
              We collect personally identifiable information, such as your name and email address, when you register on our site. This information is used to set up and manage your account, provide our services, and communicate with you.
            </p>
            
            <h2>2. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your experience. Cookies help us understand how you use our site and what services you are interested in. This allows us to personalize your content and improve our services. You can control the use of cookies at the individual browser level.
            </p>
            
            <h2>3. Third-party Integration</h2>
            <p>
              Our website uses third-party services for authentication and backend management.
            </p>
            <ul>
              <li><strong>Supabase:</strong> Used for our database and authentication. Their privacy policy can be viewed <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</li>
              <li><strong>Google Authentication:</strong> Allows you to sign up and log in using your Google account. Google's privacy policy can be found <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">here</a>.</li>
            </ul>
            
            <h2>4. User Rights & Data Deletion</h2>
            <p>
              You have the right to access, update, or delete your personal information at any time. You can manage your profile information from your user dashboard. To request a full data deletion, please contact us directly.
            </p>
            
            <h2>5. Contact Information for Data Requests</h2>
            <p>
              If you have any questions or requests regarding your data, please contact us at: <a href="mailto:privacy@ry7studios.com">privacy@ry7studios.com</a>. We will respond to your request within a reasonable timeframe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage; 