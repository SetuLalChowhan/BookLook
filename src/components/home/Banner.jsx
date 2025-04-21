import React from 'react'
import BannerImage from "@/assets/images/Banner.png"

const Banner = () => {
  return (
    <section>
        <div className={`bg-cover bg-center bg-no-repeat w-full h-[743px]`} style={{backgroundImage:`url(${BannerImage})`}}>

        </div>
    </section>
  )
}

export default Banner