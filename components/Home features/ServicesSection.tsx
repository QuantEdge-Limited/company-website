import React from 'react'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

export default function ServicesSection() {
  return (
    <>
     <section id='services'>
      <div className="serviceSectionContainer p-3 md:p-6 bg-[#0D1B2A] flex flex-col">
        <h5 className="text-white text-center mb-4">Solutions</h5>
        <h1 className="text-4xl text-white font-bold mb-4 text-center">Our core Services</h1>
        <p className="text-white text-center">Comprehensive technology solutions for your business needs</p>
        <div className="serviceSectionMain flex max-sm:flex-col justify-around mt-8 px-4 w-full lg:w-[90%] space-x-6 mx-auto">
          <div className="serviceCard md:mt-4 max-sm:mb-4 w-full md:w-1/3">
            <Card className="min-w-full h-[400px] bg-[#112A3C] gap-2 flex flex-col border border-white hover:scale-105 duration-300 transition-all">
              <CardHeader className="text-white max-sm:text-sm pt-1 md:pt-4 px-6">
                Technology
              </CardHeader>
              <CardTitle className="text-white text-xl md:text-lg lg:text-2xl font-bold px-6">
                ERP Systems
              </CardTitle>
              <CardDescription className="text-white max-sm:text-md px-6">
                Streamline operations with custom enterprise resource planning solutions.
              </CardDescription>
              <p className="text-black pe-2 px-6 flex">Learn <span className="text-white"><MdKeyboardArrowRight size={25} /></span></p>
                <div className="flex-grow flex items-end">
                  <Image src="/images/services/erp.jpg" alt="ERP Image" width={300} height={150} className="rounded-b-xl w-full object-cover h-[220px] md:h-[200px]" />
                </div>
            </Card>
          </div>
          <div className="serviceCard md:mt-[14px] mt-6 max-sm:mb-4 w-full md:w-1/3">
            <Card className="min-w-full h-[400px] md:h-[420px] bg-[#112A3C] gap-2 flex flex-col border border-white hover:scale-105 duration-300 transition-all">
              <CardHeader className="text-white pt-4 px-6">
                Development
              </CardHeader>
              <CardTitle className="text-white text-xl md:text-lg lg:text-2xl font-bold px-6">
                Web & mobile development
              </CardTitle>
              <CardDescription className="text-white max-sm:text-md px-6">
                Create powerful digital platforms tailored to your unique business requirements
              </CardDescription>
              <p className="text-black pe-2 px-6 flex">Explore <span className="text-white"><MdKeyboardArrowRight size={25} /></span></p>
                <div className="flex-grow flex items-end">
                  <Image src={"/images/services/web.jpg"} alt="Web Image" width={300} height={150} className="rounded-b-xl w-full object-cover h-[205px] md:h-[175px] lg:h-[188px]" />
                </div>
            </Card>
          </div>
          <div className="serviceCard md:mt-4 mt-6 max-sm:mb-4 w-full md:w-1/3">
            <Card className="min-w-full h-[400px] bg-[#112A3C] gap-2 flex flex-col border border-white hover:scale-105 duration-300 transition-all">
              <CardHeader className="text-white pt-4 px-6">
                Design
              </CardHeader>
              <CardTitle className="text-white text-xl md:text-lg lg:text-2xl font-bold px-6">
                UI/UX design
              </CardTitle>
              <CardDescription className="text-white max-sm:text-md px-6">
                Craft intuitive and engaging digital experiences that delight users.
              </CardDescription>
              <p className="text-black pe-2 px-6 flex">Discover <span className="text-white"><MdKeyboardArrowRight size={25} /></span></p>
                <div className="flex-grow flex items-end">
                  <Image src={"/images/services/uiux.jpg"} alt="UI/UX Image" width={300} height={150} style={{objectFit: 'cover', width: '100%', height: '200px'}} className="rounded-b-xl" />
                </div>
            </Card>
          </div>
        </div>
      </div>
     </section>
    </>
  );
}
