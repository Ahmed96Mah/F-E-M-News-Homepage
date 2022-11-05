import React, { useRef, MouseEventHandler } from 'react';
import logo from './assets/logo.svg';
import menuIcon from './assets/icon-menu.svg';
import desktopImage from './assets/image-web-3-desktop.jpg';
import mobileImage from './assets/image-web-3-mobile.jpg';
import pcImage from './assets/image-retro-pcs.jpg';
import laptopImage from './assets/image-top-laptops.jpg';
import gamingImage from './assets/image-gaming-growth.jpg';
import closeIcon from './assets/icon-menu-close.svg';

function App() {
  const open = useRef<HTMLImageElement>(null);
  const close = useRef<HTMLImageElement>(null);
  const menu = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    menu.current!.classList.toggle('hidden');
    close.current!.classList.toggle('hidden');
  };

  return (
    <div className="App p-4 xl:pt-20 xl:px-40 font-inter bg-off-white z-0">
      <header className="App-header flex flex-row flex-nowrap justify-between items-center pt-3">
        <img className="w-11 xl:w-16" src={logo} alt="Company Logo" />
        <img
          id="close"
          src={closeIcon}
          alt=""
          className="hidden lg:hidden absolute right-4 z-20"
          ref={close}
          onClick={toggleMenu as unknown as MouseEventHandler<HTMLImageElement>}
        />
        <ul
          ref={menu}
          className="hidden lg:block z-10 lg:z-0 text-lg lg:text-base lg:text-grayish-blue leading-6 font-normal bg-off-white flex flex-col absolute lg:relative top-0 right-0 w-8/12 lg:w-fit h-full lg:h-fit pt-36 lg:pt-0 pl-6 lg:pl-0"
        >
          <li className="mb-7 lg:inline-block lg:ml-6 xl:ml-10 lg:mb-0">
            <a className="xl:hover:text-soft-red" href="https://www.google.com">
              Home
            </a>
          </li>
          <li className="mb-7 lg:inline-block lg:ml-6 xl:ml-10 lg:mb-0">
            <a className="xl:hover:text-soft-red" href="https://www.google.com">
              New
            </a>
          </li>
          <li className="mb-7 lg:inline-block lg:ml-6 xl:ml-10 lg:mb-0">
            <a className="xl:hover:text-soft-red" href="https://www.google.com">
              Popular
            </a>
          </li>
          <li className="mb-7 lg:inline-block lg:ml-6 xl:ml-10 lg:mb-0">
            <a className="xl:hover:text-soft-red" href="https://www.google.com">
              Trending
            </a>
          </li>
          <li className="mb-7 lg:inline-block lg:ml-6 xl:ml-10 lg:mb-0">
            <a className="xl:hover:text-soft-red" href="https://www.google.com">
              Categories
            </a>
          </li>
        </ul>
        <img
          id="open"
          ref={open}
          className="w-10 lg:hidden"
          src={menuIcon}
          alt="Open Menu "
          onClick={toggleMenu as unknown as MouseEventHandler<HTMLImageElement>}
        />
      </header>
      <main className="mt-14 lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-4 xl:gap-5">
        <img src={mobileImage} alt="" className="sm:hidden" />
        <img
          src={desktopImage}
          alt=""
          className="hidden sm:block lg:col-span-2 lg:row-start-1 lg:row-end-2"
        />
        <h2 className="font-extrabold text-3xl xl:text-4xl text-very-dark-blue mt-6 xl:mt-2 lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2">
          The Bright Future of Web 3.0?
        </h2>
        <div className="lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3">
          <p className="text-base text-grayish-blue mt-5 xl:mt-2 mb-6 xl:mr-2">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a
            className="text-sm bg-soft-red text-off-white px-8 py-4 inline-block mb-16 xl:mb-1 hover:bg-very-dark-blue"
            href="http://www.google.com"
          >
            READ MORE
          </a>
        </div>
        <div className="bg-very-dark-blue text-dark-grayish-blue mb-16 xl:mb-0 px-5 xl:px-6 py-6 xl:h-fit lg:row-start-1 lg:row-end-3 lg:col-start-3">
          <h2 className="text-soft-orange text-2xl xl:text-3xl mb-9 xl:mt-3">
            New
          </h2>
          <div>
            <a
              href="http://www.google.com"
              className="text-off-white text-xl inline-block mb-2.5 hover:text-soft-orange"
            >
              Hydrogen VS Electric Cars
            </a>
            <p className="text-base mb-7">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="border border-y-1 border-x-0 border-grayish-blue pt-8 mb-8">
            <a
              href="http://www.google.com"
              className="text-off-white text-xl inline-block mb-2.5 hover:text-soft-orange"
            >
              The Downsides of AI Artistry
            </a>
            <p className="text-base mb-7">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div>
            <a
              href="http://www.google.com"
              className="text-off-white text-xl inline-block mb-2.5 hover:text-soft-orange"
            >
              Is VC Funding Drying Up?
            </a>
            <p className="text-base">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap justify-start lg:col-start-1 lg:col-end-2">
          <img src={pcImage} alt="" className="w-24 mr-6 lg:h-32 lg:w-24" />
          <div className="flex flex-col">
            <span className="text-2xl text-dark-grayish-blue">01</span>
            <a
              href="http://www.google.com"
              className="text-lg text-very-dark-blue my-3.5 hover:text-soft-red"
            >
              Reviving Retro PCs
            </a>
            <p className="text-base text-grayish-blue">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap justify-start my-8 lg:my-0 lg:col-start-2 lg:col-end-3">
          <img src={laptopImage} alt="" className="w-24 mr-6 lg:h-32 lg:w-24" />
          <div className="flex flex-col">
            <span className="text-2xl text-dark-grayish-blue">02</span>
            <a
              href="http://www.google.com"
              className="text-lg text-very-dark-blue my-3.5 hover:text-soft-red"
            >
              Top 10 Laptops of 2022
            </a>
            <p className="text-base text-grayish-blue">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap justify-start lg:col-start-3 mb-20 xl:mb-0">
          <img src={gamingImage} alt="" className="w-24 mr-6 lg:h-32 lg:w-24" />
          <div className="flex flex-col">
            <span className="text-2xl text-dark-grayish-blue">03</span>
            <a
              href="http://www.google.com"
              className="text-lg text-very-dark-blue my-3.5 hover:text-soft-red"
            >
              The Growth of Gaming
            </a>
            <p className="text-base text-grayish-blue">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
