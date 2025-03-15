import { useState } from 'react';

const Privacy = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="privacy" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-8 fade-up">Privacy Notice</h2>
          <div className="prose prose-lg max-w-none fade-up">
            <p>
              Your privacy is important to us. This privacy notice explains how we collect, store, and use your personal information in accordance with data protection laws.{' '}
              To read more,{' '}
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-primary hover:text-primary/80 underline"
              >
                click here
              </button>
            </p>
            
            {isExpanded && (
              <div className="mt-8 prose prose-sm bg-white p-6 rounded-lg">
                <h3>Purpose of privacy notice</h3>
                <p>The processing of personal data is governed by the General Data Protection Regulation 2016/679 (the GDPR). This legislation will replace current data privacy law, giving more rights to you as an individual and more obligations to organisations holding your personal data.</p>
                
                <p>One of the rights is a right to be informed, which means we have to give you even more information than we do now about the way in which we use, share and store your personal information.</p>
                
                <p>This means that we will be publishing a new privacy notice so you can access this information, along with information about the increased rights you have in relation to the information we hold on you and the legal basis on which we are using it.</p>
                
                <p>This new privacy notice comes into effect and will be published on our website on 25 May 2018.</p>
                
                <h3>Who are we?</h3>
                <p>Huina Huo is the data controller at Huina Huo Acupuncture. This means we decide how your personal data is processed and for what purposes.</p>
                
                <h3>Whose information does this privacy notice apply to?</h3>
                <p>This privacy notice applies to information we collect from:</p>
                <ul>
                  <li>patients</li>
                  <li>prospective patients</li>
                  <li>former patients</li>
                  <li>people who subscribe to our newsletters</li>
                  <li>visitors to our website</li>
                </ul>

                <h3>What is personal data?</h3>
                {/* Continue with all the new sections... */}
                
                <div className="mt-4 text-sm text-gray-500">
                  <p>For more information, please contact us at info@huinalondon.com</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
