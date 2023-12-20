import React from 'react'
import Cards from './components/Cards';



function App() {

    let data=[
      {
        plan:"FREE",
        subscription:0,
        user:"single user",
        isUser:true,
        storage:"50GB",
        isStorage:true,
        publicproject:"Unlimited Public Projects",
        isPublicproject:true,
        access:"Community Access",
        isAccess:true,
        privateProjects:"Unlimited Private Projects",
        isPrivateprojects:false,
        support:"Dedicated Phone Support",
        isSupport:false,
        subDomain:"Free Subdomain",
        isSubdomain:false,
        statusReports:"Monthly Status Reports",
        isStatusreports:false
      },
      {
        plan:"PLUS",
        subscription:9,
        user:"Five users",
        isUser:true,
        storage:"50 GB",
        isStorage:true,
        publicproject:"Unlimited Public Projects",
        isPublicproject:true,
        access:"Community Access",
        isAccess:true,
        privateProjects:"Unlimited Private Projects",
        isPrivateprojects:true,
        support:"Dedicated Phone Support",
        isSupport:true,
        subDomain:"Free Subdomain",
        isSubdomain:true,
        statusReports:"Monthly Status Reports",
        isStatusreports:false
      },
      {
        plan:"PRO",
        subscription:49,
        user:"Unlimited users",
        isUser:true,
        storage:"150 GB",
        isStorage:true,
        publicproject:"Unlimited Public Projects",
        isPublicproject:true,
        access:"Community Access",
        isAccess:true,
        privateProjects:"Unlimited Private Projects",
        isPrivateprojects:true,
        support:"Dedicated Phone Support",
        isSupport:true,
        subDomain:"Unlimited Free Subdomain",
        isSubdomain:true,
        statusReports:"Monthly Status Reports",
        isStatusreports:true
      },
    ]  



  return <section className="pricing py-5">
  <div className="container">
    <div className="row">
      {
        data.map((e,i)=>{
          return <Cards data={e} key={i}/>
        })
      }


    </div>
  </div>
</section>
}

export default App