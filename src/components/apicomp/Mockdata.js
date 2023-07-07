import mysvg from '../../assets/bgimg1.svg'
import svg2 from '../../assets/scripting.svg'
import svg3 from '../../assets/plug.svg'
import svg4 from '../../assets/Toolkits.svg'
const mockData = [
    {
      id: 1,
      backgroundColor: "#F4F6F8",
      backgroundImage: mysvg,
      title: "API Reference",
      description: "Use Diligent's APIs to automate interactions with our Entities and HighBond platforms, build reporting, and integrate with other systems in your company.",
      links: [
        { label: "HighBond Public Api", url: "#" ,isSvg: false},
        { label: "Diligent Entity APIs", url: "#" ,isSvg: false }
      ]
    },
    {
      id: 2,
      backgroundColor: "white",
      backgroundImage: svg2,
      title: "Scripting",
      description: "Analytics provides a powerful combination of data access, data analysis, and integrated reporting. You can use our ACL scripting language for critical data analysis or our custom Python library for domain-focused data analysis and HighBond automation. We also have a library of pre-written analytic scripts to power up your process.",
      links: [
        { label: "ACL Scripting", url: "https://help.highbond.com/helpdocs/analytics/16/en-us/Content/analytics/using_acl_analytics.htm?cshid=using-acl-analytics" , isSvg: true},
        { label: "HCL Scripting", url: "https://help.highbond.com/helpdocs/highbond/en-us/Content/robots/scripting/scripting_in_robots.htm?cshid=rob-scripting-in-robots" , isSvg: true },
        { label: "Scripthub", url: "https://accounts.highbond.com/login?redirect_uri=https%3A%2F%2Fscripts.highbond.com%2F" , isSvg: true }
      ]
    },
    {
      id: 3,
      backgroundColor: "white",
      backgroundImage: svg3,
      title: "Integration",
      description: "Whether your data source is file-based, big data, ERP/CRM, API or ODBC compliant, our Analytics data connectors provide access to a wide variety of file types, databases, and cloud data sources.",
      links: [
        { label: "Connectors", url: "https://help.highbond.com/helpdocs/analytics/16/en-us/Default.htm#cshid=data-sources-acl" , isSvg: true},
        { label: "Partners", url: "https://www.wegalvanize.com/partners/" , isSvg: true}
      ]
    },
    {
      id: 4,
      backgroundColor: "#F4F6F8",
      backgroundImage: svg4,
      title: "SDK",
      description: "Our toolkits contain a pre-configured solution of tools aimed at addressing one area of risk or compliance using our HighBond platform. Use this documentation to learn how to create toolkits that address your business needs.",
      links: [
        { label: "Reference Documentation", url: "https://developer.diligent.com/terraform-docs/" ,isSvg: false},
        { label: "Best Practices", url: "https://developer.diligent.com/docs/best_practices" ,isSvg: false},
        { label: "Changelog", url: "https://developer.diligent.com/ChangeLogHistory" ,isSvg: false}
      ]
    }
  ];
  
  export default mockData;
  