import React, { useState } from 'react';
import { FormInput } from './FormInput';
import { ProgressIndicator } from './ProgressIndicator';

interface FormData {
  companyName: string;
  companyEmail: string;
  contactName: string;
}

export const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    companyEmail: '',
    contactName: ''
  });

  const [currentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const isFormValid = formData.companyName && formData.companyEmail && formData.contactName;

  return (
    <div className="w-[650px] h-[960px] absolute shadow-[0px_166px_47px_0px_rgba(186,186,186,0.00),0px_106px_43px_0px_rgba(186,186,186,0.01),0px_60px_36px_0px_rgba(186,186,186,0.05),0px_27px_27px_0px_rgba(186,186,186,0.09),0px_7px_15px_0px_rgba(186,186,186,0.10)] bg-white rounded-3xl right-8 top-8 max-md:w-[90%] max-md:max-w-[600px] max-md:h-auto max-md:min-h-[800px] max-md:right-5 max-md:top-5 max-sm:w-[95%] max-sm:rounded-2xl max-sm:right-[2.5%] max-sm:top-2.5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/00d5223251927070f05d04314abaf483dadfe068?width=1859"
        alt="OBJECTS"
        className="w-[929px] h-[868px] shrink-0 opacity-30 absolute left-[-140px] top-[485px]"
      />
      <div className="w-[849px] h-[849px] shrink-0 absolute left-[-100px] top-[30px]">
        <div className="w-[849px] h-[849px] shrink-0 opacity-50 absolute bg-[#DAF8EE] rounded-[128px] left-0 top-0" />
      </div>
      <div className="flex w-[450px] flex-col items-center gap-8 absolute h-[500px] left-[100px] top-[130px] max-md:w-[90%] max-md:left-[5%] max-md:top-20 max-sm:w-[85%] max-sm:gap-6 max-sm:left-[7.5%] max-sm:top-[60px]">
        <header>
          <h2 className="self-stretch text-black text-center text-5xl font-semibold leading-[55.2px] relative max-md:text-4xl max-sm:text-[32px]">
            Sign Up
          </h2>
        </header>
        
        <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
        
        <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6 self-stretch relative max-sm:gap-5">
          <FormInput
            label="Company Name"
            placeholder="Enter company name..."
            required
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
          
          <FormInput
            label="Email of Company Contact"
            placeholder="Enter company contact number..."
            required
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleInputChange}
          />
          
          <FormInput
            label="Name of Company Contact (First & Last)"
            placeholder="Enter contact name..."
            required
            name="contactName"
            value={formData.contactName}
            onChange={handleInputChange}
          />
          
          <div className="flex flex-col items-start gap-4 self-stretch relative">
            <div className="flex items-start gap-3 self-stretch relative max-sm:flex-col max-sm:gap-2">
              <button
                type="button"
                disabled
                className="flex flex-col justify-center items-center gap-2.5 flex-[1_0_0] opacity-30 relative"
                aria-label="Previous step"
              >
                <div className="flex justify-center items-center gap-2.5 self-stretch rounded border relative px-3 py-2.5 border-solid border-[#3F5A51] max-sm:p-3">
                  <span className="flex-[1_0_0] text-[#3F5A51] text-center text-sm font-medium leading-4 relative">
                    Previous
                  </span>
                </div>
              </button>
              
              <button
                type="submit"
                disabled={!isFormValid}
                className={`flex flex-col justify-center items-center gap-2.5 flex-[1_0_0] relative ${
                  !isFormValid ? 'opacity-30' : 'opacity-100 hover:opacity-90'
                }`}
                aria-label="Next step"
              >
                <div className="flex justify-center items-center gap-2.5 self-stretch rounded relative bg-[#3F5A51] px-3 py-2.5 max-sm:p-3">
                  <span className="flex-[1_0_0] text-white text-center text-sm font-medium leading-4 relative">
                    Next
                  </span>
                </div>
              </button>
            </div>
            
            <p className="self-stretch text-center text-sm font-medium leading-5 relative text-[#7C7C7C]">
              Already have an account? <button type="button" className="underline hover:no-underline">Log In</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
