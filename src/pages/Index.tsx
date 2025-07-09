import React from 'react';
import { SignUpForm } from '../components/SignUpForm';
import { BrandingSection } from '../components/BrandingSection';

const Index = () => {
  return (
    <main className="flex w-screen h-screen flex-col items-start gap-2.5 relative overflow-hidden bg-[#344B44] max-md:p-5 max-sm:p-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/74faec04a9e67dae8d8ffa39c0f4b74287d55761?width=3000"
        alt="Background pattern"
        className="w-[1500px] h-[1124px] shrink-0 opacity-20 absolute object-cover left-0 top-0"
      />
      
      <SignUpForm />
      <BrandingSection />
    </main>
  );
};

export default Index;
