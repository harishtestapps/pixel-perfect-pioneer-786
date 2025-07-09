import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps
}) => {
  return (
    <div className="flex h-[450px] -rotate-90 flex-col items-start self-stretch relative max-md:h-[300px] max-sm:hidden">
      <div className="flex flex-col items-center flex-[1_0_0] self-stretch relative">
        <div className="w-[19px] h-[18px] fill-[#3F5A51] relative">
          <div>
            <svg 
              width="10" 
              height="10" 
              viewBox="0 0 10 10" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="step-circle" 
              style={{
                width: '10px', 
                height: '10px', 
                transform: 'rotate(90deg)', 
                flexShrink: 0, 
                borderRadius: '10px', 
                background: '#C2E579', 
                position: 'absolute', 
                left: '4px', 
                top: '5px'
              }}
            > 
              <circle cx="5" cy="5" r="5" fill="#C2E579" />
            </svg>
          </div>
          <div className="w-[27px] h-[19px] shrink-0 absolute left-px -top-1">
            <div className="w-2.5 h-[26px] rotate-[112.858deg] shrink-0 absolute left-0 top-0">
              <div className="w-2.5 h-[13px] rotate-[112.858deg] absolute bg-[#D9D9D9] rounded-[0px_1738.264px] left-[5px] top-0" />
              <div className="w-2.5 h-[13px] rotate-[-112.858deg] absolute bg-[#D9D9D9] rounded-[0px_1738.264px] left-0 top-3" />
            </div>
          </div>
        </div>
        <div>
          <svg 
            width="132" 
            height="2" 
            viewBox="0 0 132 2" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="progress-line" 
            style={{
              display: 'flex', 
              width: '2px', 
              paddingTop: '8px', 
              justifyContent: 'center', 
              alignItems: 'flex-start', 
              flex: '1 0 0', 
              background: '#D9D9D9', 
              position: 'relative'
            }}
          > 
            <g clipPath="url(#clip0_progress_1)"> 
              <rect width="2" height="132" transform="translate(0 2) rotate(-90)" fill="#D9D9D9" />
            </g> 
            <defs> 
              <clipPath id="clip0_progress_1"> 
                <rect width="2" height="132" fill="white" transform="translate(0 2) rotate(-90)" />
              </clipPath> 
            </defs> 
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center flex-[1_0_0] self-stretch relative">
        <div>
          <svg 
            width="150" 
            height="2" 
            viewBox="0 0 150 2" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="progress-line-top" 
            style={{
              display: 'flex', 
              width: '2px', 
              paddingTop: '8px', 
              justifyContent: 'center', 
              alignItems: 'flex-start', 
              flex: '1 0 0', 
              background: '#D9D9D9', 
              position: 'relative'
            }}
          > 
            <g clipPath="url(#clip0_progress_2)"> 
              <rect width="2" height="150" transform="translate(0 2) rotate(-90)" fill="#D9D9D9" />
            </g> 
            <defs> 
              <clipPath id="clip0_progress_2"> 
                <rect width="2" height="150" fill="white" transform="translate(0 2) rotate(-90)" />
              </clipPath> 
            </defs> 
          </svg>
        </div>
        <div className="flex h-2.5 flex-col justify-center items-start gap-[116px] relative right-[-5px] top-[67.25px]">
          <div className="flex w-6 h-6 justify-center items-center shrink-0 absolute">
            <div>
              <svg 
                width="25" 
                height="25" 
                viewBox="0 0 25 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="circle-filled" 
                style={{
                  width: '24px', 
                  height: '24px', 
                  flexShrink: 0, 
                  position: 'absolute', 
                  left: '0px', 
                  top: '0px'
                }}
              > 
                <path d="M17.25 12.5C17.25 9.73858 15.0114 7.5 12.25 7.5C9.48858 7.5 7.25 9.73858 7.25 12.5C7.25 15.2614 9.48858 17.5 12.25 17.5C15.0114 17.5 17.25 15.2614 17.25 12.5Z" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
          <div className="flex w-6 h-6 justify-center items-center shrink-0 absolute">
            <div>
              <svg 
                width="25" 
                height="25" 
                viewBox="0 0 25 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="circle-filled" 
                style={{
                  width: '24px', 
                  height: '24px', 
                  flexShrink: 0, 
                  position: 'absolute', 
                  left: '0px', 
                  top: '0px'
                }}
              > 
                <path d="M17.25 12.5C17.25 9.73858 15.0114 7.5 12.25 7.5C9.48858 7.5 7.25 9.73858 7.25 12.5C7.25 15.2614 9.48858 17.5 12.25 17.5C15.0114 17.5 17.25 15.2614 17.25 12.5Z" fill="#D9D9D9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] self-stretch relative">
        <div>
          <svg 
            width="141" 
            height="2" 
            viewBox="0 0 141 2" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="progress-line-final" 
            style={{
              display: 'flex', 
              width: '2px', 
              height: '141px', 
              paddingTop: '8px', 
              justifyContent: 'center', 
              alignItems: 'flex-start', 
              background: '#D9D9D9', 
              position: 'absolute', 
              left: '0px', 
              top: '-1px'
            }}
          > 
            <g clipPath="url(#clip0_progress_3)"> 
              <rect width="2.00001" height="141" transform="translate(0 1.99902) rotate(-90)" fill="#D9D9D9" />
            </g> 
            <defs> 
              <clipPath id="clip0_progress_3"> 
                <rect width="2.00001" height="141" fill="white" transform="translate(0 1.99902) rotate(-90)" />
              </clipPath> 
            </defs> 
          </svg>
        </div>
        <div>
          <svg 
            width="18" 
            height="20" 
            viewBox="0 0 18 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="final-circle" 
            style={{
              width: '19px', 
              height: '18px', 
              position: 'absolute', 
              left: '132px', 
              top: '-9px'
            }}
          > 
            <circle cx="9" cy="10" r="5" fill="#D9D9D9" />
          </svg>
        </div>
      </div>
    </div>
  );
};
