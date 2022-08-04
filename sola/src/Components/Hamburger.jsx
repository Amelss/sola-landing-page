import React from 'react'

export default function Hamburger({isOpen}) {
  return (
    <div className="hamburger w-[2rem] h-[2rem] flex items-center justify-around flex-col flex-nowrap z-10 top-14 absolute right-10 ">
      <div className="burger burger1 w-[2rem] h-[0.25rem] rounded-sm bg-black origin-[1px]"></div>
      <div className="burger burger2 w-[2rem] h-[0.25rem] rounded-sm bg-black origin-[1px]"></div>
      <div className="burger burger3 w-[2rem] h-[0.25rem] rounded-sm bg-black origin-[1px]"></div>
          
          <style jsx>{`
          
          .burger1{
            transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)'};
          }
          .burger2{
            transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${isOpen ? 0: 1};
          }
          .burger3{
            transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'}
          }
          
          `}
              
        </style>

    </div>
  );
}
