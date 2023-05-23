import React, { FC } from 'react';


interface HeaderTopProps {}

const HeaderTop: FC<HeaderTopProps> = () => (
  <div
    role="banner"
    className={`flex py-2 backdrop-blur-lg top-0 justify-between leading-none gap-4 antialiased transition shadow-sm`}
    style={{ background: '#B2967D', color: '#F0F0F0', fontFamily: 'Unna', fontStyle: 'normal', fontWeight: '700', fontSize: '24px', lineHeight: '32px', }}
  >
    <a className="font-bold w-full text-center hidden md:block md:text-sm lg:text-md 2xl:text-lg" href="/">
      TAX FREE + FREE SHIPPING WITHIN NORWAY / WORLDWIDE SHIPPING
    </a>
  </div>
);

export default HeaderTop;
