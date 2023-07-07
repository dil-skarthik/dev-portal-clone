// import React from 'react'
import bannerImg from '../assets/Group.svg'

function HeroComp() {
  return (
    <div className="pb-[32px]">
      <div className="flex flex-col-reverse p-4 w-full lg:flex lg:flex-row">
        <div className="justify-center items-center w-full lg:w-3/5 pt-8 lg:pt-[5.5rem] pl-[1rem] lg:pl-[3rem]">
            <h1 className=" block lg:hidden non-italic font-semibold text-rblue text-4xl align-middle leading-[3rem]">Welcome to <font color="E02E36">Diligent</font> Developer Portal</h1>
            <h1 className="hidden lg:block non-italic font-semibold text-rblue text-4xl align-middle leading-[3rem]">Welcome to <font color="E02E36">Diligent</font><br className='lg:display'/> Developer Portal</h1>
            <p className="text-[#000] text-xl font-normal m-0 w-full leading-[2rem] pt-6">Find everything you need to build Modern GRC solutions on the Diligent platform - Examples, Guides, Documentation and more.</p>
        </div>
        <div>
            <img src={bannerImg} className='w-4/5 ml-8 lg:pt-11'></img>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default HeroComp
