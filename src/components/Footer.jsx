import footerlogo from '../assets/FooterDiligentLogo.png'
import fb from '../assets/fb_icon.svg'
import li from '../assets/linkedin_icon.svg'
import ti from '../assets/twitter_icon.svg'
import yt from '../assets/youtube_icon.svg'

function Footer() {
  return (
    <div className='bg-[#2f3b4d] p-[32px] pb-0 pl-20'>
      <div className='flex flex-row gap-[32px]'>
        <div className='leading-6'>
            <img src={footerlogo}/>
            <div className='flex flex-row gap-[16px] h-[32px] pt-[30px]'>
                <a href="https://www.facebook.com/DiligentCorporation"><img src={fb}/></a>
                <a href="https://www.facebook.com/DiligentCorporation"><img src={li}/></a>
                <a href="https://www.facebook.com/DiligentCorporation"><img src={ti}/></a>
                <a href="https://www.facebook.com/DiligentCorporation"><img src={yt}/></a>
            </div>
            <div className='text-[#fff] leading-6 font-medium text-base non-italic pt-[50px]'>
                <p>Contact Us</p>
                <p> +1 604 669 4225</p>
            </div>
        </div>
        <div className='ml-auto flex flex-row gap-[100px] mr-[100px]'>
        <div className='text-[#FFF] pt w-[11.375]'>
            <h3 className='font-normal text-[16px] tracking-wider leading-[20px] pb-4'>REFERENCE</h3>
            <a href="https://help.highbond.com/helpdocs/highbond/en-us/Default.htm#cshid=highbond-help" className='flex flex-row text-[13px]'>Help Docs 
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
            <a href="/docs/api_terms_of_use" target="_self" className='text-[13px]'>API Terms of Use    </a>
        </div>
        <div className='text-[#FFF] pt w-[11.375]'>
            <h3 className='font-normal text-[16px] tracking-wider leading-[20px] pb-4'>GUIDES</h3>
            <a href="https://help.highbond.com/helpdocs/analytics/16/en-us/Default.htm#cshid=using-acl-analytics" className='flex flex-row text-[13px]'>ACL Guide 
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
            <a href="https://help.highbond.com/helpdocs/highbond/en-us/Content/robots/scripting/scripting_in_robots.htm?cshid=rob-scripting-in-robots" target="_self" className='flex flex-row text-[13px]'>HCL Guide   
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg> 
            </a>
        </div>
        <div className='text-[#FFF] pt w-[11.375]'>
            <h3 className='font-normal text-[16px] tracking-wider leading-[20px] pb-4'>COMPANY</h3>
            <a href="https://www.diligent.com/company/about-us/" className='flex flex-row text-[13px]'>About us 
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
            <a href="https://www.wegalvanize.com/careers/" className='flex flex-row text-[13px]'>Careers
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
            <a href="https://www.wegalvanize.com/partners/" className='flex flex-row text-[13px]'>Partners
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
            <a href="https://www.wegalvanize.com/newsroom/" className='flex flex-row text-[13px]'>Newsroom 
            <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
            </a>
        </div>
        </div>
      </div>
      <div className='border-[0.5px] border-solid border-gray-400 mt-8'></div>
      <div className='flex flex-row h-16 gap-8 pt-[30px] mx-8 align-center mt-[-1rem] justify-center'>
        <p className='text-[#FFF] text-[13px]'>© 2023 Diligent Corporation</p>
        <a className='text-[#FFF] text-[13px]' href="https://www.diligent.com/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a>
        <a className='text-[#FFF] text-[13px]' href="/docs/terms_of_use">Terms of Use</a>
        <a className='text-[#FFF] text-[13px]' href="https://www.diligent.com/vulnerability-disclosure/" target="_blank" rel="noreferrer">Diligent Vulnerability Disclosure Policy</a>
      </div>
    </div>
  )
}

export default Footer
