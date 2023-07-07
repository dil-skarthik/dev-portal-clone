// // import React from 'react'
// import RightArrow from '../../assets/RightArrow.svg'
// import mysvg from '../../assets/bgimg1.svg'
// import svg2 from '../../assets/scripting.svg'
// import svg3 from '../../assets/plug.svg'
// import svg4 from '../../assets/Toolkits.svg'

// function Main2() {
//   return (
//     <div className="p-8 pt-8 w-full pt-14 ">
//       <div className="w-9/10 gap-2 border-[1px] lg:grid lg:grid-cols-2 lg:gap-0">
//         <div className="p-[32px] bg-[#F4F6F8] bg-cover bg-bottom bg-right bg-[16px 18px] bg-no-repeat" style={{backgroundImage: `url(${mysvg})`,backgroundPositionX: 'right',backgroundPositionY: 'bottom',backgroundSize: '160px 180px',backgroundRepeat: 'no-repeat'}}>
//             <h3 className='text-3xl font-normal leading-[48px]'>API Reference</h3>
//             <p className='text-[#676767] text-3.5 mt-4'>Use Diligent's APIs to automate interactions with our Entities and HighBond platforms, build reporting, and integrate with other systems in your company.</p>
//             <a className='flex items-center text-[14px] pt-6 pb-2 text-[#385f99] leading-[16px]' href="#">HighBond Public Api 
//                 <img src={RightArrow} className='pl-1' />
//             </a>
//             <a className='flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]' href="#">
//                 Diligent Entity APIs 
//                 <img src={RightArrow} />
//             </a>
//         </div>
//         <div className="p-[32px] bg-white bg-cover bg-bottom bg-right bg-[16px 18px] bg-no-repeat" style={{backgroundImage: `url(${svg2})`,backgroundPositionX: 'right',backgroundPositionY: 'bottom',backgroundSize: '160px 180px',backgroundRepeat: 'no-repeat'}}>
//             <h3 className='text-3xl font-normal leading-[48px]'>Scripting</h3>
//             <p className='text-[#676767] text-3.5 mt-4'>Analytics provides a powerful combination of data access, data analysis, and integrated reporting. You can use our ACL scripting language for critical data analysis or our custom Python library for domain-focused data analysis and HighBond automation. We also have a library of pre-written analytic scripts to power up your process.</p>
//             <a className='flex items-center text-[14px] pt-6 pb-2 text-[#385f99] leading-[16px]' href="https://help.highbond.com/helpdocs/analytics/16/en-us/Content/analytics/using_acl_analytics.htm?cshid=using-acl-analytics">ACL Scripting
//             <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
//             </a>
//             <a className='flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]' href="https://help.highbond.com/helpdocs/highbond/en-us/Content/robots/scripting/scripting_in_robots.htm?cshid=rob-scripting-in-robots">
//                 HCL Scripting
//                 <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
//             </a>
//             <a className='flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]' href="https://accounts.highbond.com/login?redirect_uri=https%3A%2F%2Fscripts.highbond.com%2F">
//                 Scripthub
//                 <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
//             </a>
//         </div>  
//         <div className="p-[32px] bg-white bg-cover bg-bottom bg-right bg-[16px 18px] bg-no-repeat" style={{backgroundImage: `url(${svg3})`,backgroundPositionX: 'right',backgroundPositionY: 'bottom',backgroundSize: '160px 180px',backgroundRepeat: 'no-repeat'}}>
//             <h3 className='text-3xl font-normal leading-[48px]'>Integration</h3>
//             <p className='text-[#676767] text-3.5 mt-4'>Whether your data source is file-based, big data, ERP/CRM, API or ODBC compliant, our Analytics data connectors provide access to a wide variety of file types, databases, and cloud data sources.</p>
//             <a className='flex items-center text-[14px] pt-6 pb-2 text-[#385f99] leading-[16px]' href="https://help.highbond.com/helpdocs/analytics/16/en-us/Default.htm#cshid=data-sources-acl">Connectors 
//             <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
//             </a>
//             <a className='flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]' href="https://www.wegalvanize.com/partners/">
//                 Partners
//                 <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className='ml-[4px] mb-[4px]'><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg>
//             </a>
//         </div>
//         <div className="p-[32px] bg-[#F4F6F8] bg-cover bg-bottom bg-right bg-[16px 18px] bg-no-repeat" style={{backgroundImage: `url(${svg4})`,backgroundPositionX: 'right',backgroundPositionY: 'bottom',backgroundSize: '160px 180px',backgroundRepeat: 'no-repeat'}}>
//             <h3 className='text-3xl font-normal leading-[48px]'>SDK</h3>
//             <p className='text-[#676767] text-3.5 mt-4'>Our toolkits contain a pre-configured solution of tools aimed at addressing one area of risk or compliance using our HighBond platform. Use this documentation to learn how to create toolkits that address your business needs.</p>
//             <a className='flex items-center text-[14px] pt-6 pb-2 text-[#385f99] leading-[16px]' href="https://developer.diligent.com/terraform-docs/">Reference Documentation
//                 <img src={RightArrow} className='pl-1' />
//             </a>
//             <a className='flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]' href="https://developer.diligent.com/docs/best_practices">
//                 Best Practices
//                 <img src={RightArrow} />
//             </a>
//             <a className='flex items-center text-[14px] pb-2 text-[#385f99] leading-[16px]' href="https://developer.diligent.com/ChangeLogHistory">
//                 Changelog
//                 <img src={RightArrow} />
//             </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Main2
