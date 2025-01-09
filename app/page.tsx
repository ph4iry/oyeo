import { FaChevronLeft, FaChevronRight, FaFacebook, FaInstagram, FaQuoteLeft } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";

export default function Site() {
  return (<>
      <Navbar />
    <div className="flex flex-col mx-[120px] w-[1200px] items-center">
      <Hero />
      <Quote />
      <div className="flex flex-col w-full relative -left-[120px]">
        <CallToAction />
      </div>
      <Event />
      <Partners />
      <Articles />
    </div>
    <Footer />
    </>
  );
}

function Navbar() {
  return (
    <div className="w-screen h-15 bg-white flex justify-between px-[120px] pt-8 pb-16">
      <div className="text-3xl font-bold">Brand Logo</div>
      <div className="flex gap-4">
        <div className="italic font-semibold">Home</div>
        <div>Our Mission</div>
        <div>Events</div>
        <div>Articles</div>
        <div>Contact Us</div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="px-[102px] py-24 bg-neutral-100 w-full shadow-md grid grid-cols-2 gap-16">
      <div>
        <div className="text-6xl font-extrabold">Hero</div>
        <div className="text-2xl">Lorem ipsum dolor sit amet</div>
        <div className="text-base font-semibold italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
        <button className="mt-6 bg-neutral-400/70 text-white font-semibold text-center px-16 py-2 rounded-md">But</button>
      </div>
    </div>
  )
}

function Quote() {
  return (
    <div className="flex gap-4 relative items-center justify-start pl-36 pr-24 py-24">
      <FaQuoteLeft size={200} className="text-neutral-200 absolute top-10 left-[102px] -z-10" />
      <div className="px-[102px] flex gap-16 items-center">
        <div className="w-[588px]">
          <div className="text-3xl italic font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </div>
          <div className="text-lg italic font-semibold">FIRST LASTNAME, TITLE HERE</div>
        </div>
        <div className="bg-neutral-400 rounded-full size-60"></div>
      </div>
    </div>
  )
}

function CallToAction() {
  return (
    <div className="w-screen pb-16 pt-4 bg-neutral-100 px-[120px] flex flex-col justify-center items-center">
      <div className="font-extrabold text-3xl uppercase mb-10">Call to Action</div>
      <div className="grid grid-cols-3 gap-6 place-">
        <CTAOption step={1} />
        <CTAOption step={2} />
        <CTAOption step={3} />
      </div>
    </div>
  )
}

function CTAOption({ step }: { step: number }) {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="size-40 bg-neutral-200 rounded-full"></div>
      <div className="flex gap-12 items-center">
        <div className="font-semibold text-3xl">0{step}</div>
        <div>
          <div className="text-3xl font-semibold">Title</div>
          <div className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
        </div>
      </div>
    </div>
  )
}

function Event() {
  return (
    <div className="px-[102px] py-20 w-auto bg-neutral-300 mt-[100px]">
      <div className="text-3xl font-extrabold uppercase">Event 1 Name</div>
      <div className="text-3xl">Join Us</div>
      <div className="text-lg w-5/12 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
      <div className="font-extrabold text-3xl">Month 11 from 1 - 12</div>
      <div className="text-3xl mt-4 font-medium">
        Location Name
        <br />
        Address, Boston, MA 02130
      </div>
    </div>
  )
}

function Partners() {
  return (
    <div className="mt-[87px] text-center w-full">
      <div className="font-semibold text-2xl mb-4">Our Partners</div>
      <div className="flex gap-3 items-center">
        <FaChevronLeft size={25} />
        <div className="grid grid-cols-5 gap-3 w-full">
          <div className="bg-neutral-200 h-[100px]"></div>
          <div className="bg-neutral-200 h-[100px]"></div>
          <div className="bg-neutral-200 h-[100px]"></div>
          <div className="bg-neutral-200 h-[100px]"></div>
          <div className="bg-neutral-200 h-[100px]"></div>
        </div>
        <FaChevronRight size={25} />
      </div>
    </div>
  )
}

function Articles() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-[107px]">
      <div className="bg-neutral-200 w-full h-full"></div>
      <div className="w-full h-full flex flex-col">
        <div className="text-3xl font-bold mb-3.5">Article Title</div>
        <div className="font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec magna tellus. Pellentesque non faucibus ante. Vivamus hendrerit enim eget bibendum commodo. Ut at justo sed diam vestibulum dictum. Sed neque dolor, faucibus ut ligula a, commodo facilisis felis. Etiam ut est nec tellus bibendum egestas nec et orci. Proin eget lobortis diam. Fusce at dolor vel mi porta pulvinar. Fusce fermentum tempus euismod. Donec rutrum commodo velit, ac efficitur eros aliquet et. Pellentesque id rutrum tellus. Etiam sodales est at velit pharetra

          Praesent orci lorem, malesuada vel eleifend at, egestas iaculis arcu. Pellentesque non lorem vitae augue interdum convallis. Nam accumsan varius vestibulum. Curabitur consectetur mauris vitae est 
        </div>
        <div className="self-end mt-9">
          <button className="bg-neutral-400/70 text-white font-semibold text-center px-16 py-2 rounded-md">But</button>
        </div>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className="text-3xl font-bold mb-3.5">Article Title</div>
        <div className="font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec magna tellus. Pellentesque non faucibus ante. Vivamus hendrerit enim eget bibendum commodo. Ut at justo sed diam vestibulum dictum. Sed neque dolor, faucibus ut ligula a, commodo facilisis felis. Etiam ut est nec tellus bibendum egestas nec et orci. Proin eget lobortis diam. Fusce at dolor vel mi porta pulvinar. Fusce fermentum tempus euismod. Donec rutrum commodo velit, ac efficitur eros aliquet et. Pellentesque id rutrum tellus. Etiam sodales est at velit pharetra

          Praesent orci lorem, malesuada vel eleifend at, egestas iaculis arcu. Pellentesque non lorem vitae augue interdum convallis. Nam accumsan varius vestibulum. Curabitur consectetur mauris vitae est 
        </div>
        <div className="self-left mt-9">
          <button className="bg-neutral-400/70 text-white font-semibold text-center px-16 py-2 rounded-md">But</button>
        </div>
      </div>
      <div className="bg-neutral-200 w-full h-full"></div>
    </div>
  )
}

function Footer() {
  return (
    <>
      <div className="mt-32 w-screen bg-neutral-700 text-white pt-20 pb-7 px-[120px]">
        <div className="grid grid-cols-12 gap-3 w-full">
          <div className="grid-cols-subgrid col-span-7 grid items-start">
            <div className="col-span-1 aspect-square size-20 bg-white text-black font-medium flex justify-center items-center rounded-md">Logo</div>
            <div className="col-span-2 text-center h-20 flex items-center font-medium">Company Name</div>
          </div>
          <div className="col-span-5 row-span-2">
            <div className="text-xl">Contact Us</div>
            <div className="w-full bg-neutral-200 h-8 py-4 my-4"></div>
            <div className="w-full bg-neutral-200 h-32 py-4"></div>
          </div>
          <div className="col-span-5">
            <div className="font-bold">Lorem ipsum dolor</div>
            <div className="mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
          </div>
          <div className="col-span-2"></div>
        </div>
        <div className="mt-48">
          <div className="flex justify-between items-cetner">
            <div className="flex gap-7 items-center justify-start w-full">
              <div className="">Phone: 123 456 7890</div>
              <div>www.company-site.com</div>
              <div>info@mail.com</div>
              <div>Address: Boston, MA</div>
            </div>
            <div className="flex gap-6">
              <FaFacebook size={32} />
              <FaInstagram size={32} />
              <FaXTwitter size={32} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen bg-neutral-950 text-white py-12 px-[120px]">
        <div className="">Company All Rights Reserved 2024</div>
      </div>
    </>
  )
}