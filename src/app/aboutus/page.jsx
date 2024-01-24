"use client"
import Steps from '@/components/Steps'
import Hero from '@/components/aboutus/Hero'
import Stats from '@/components/aboutus/Stats'
import Swear from '@/components/aboutus/Swear'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Stats/>
        <Swear/>
        <Steps/>
    </div>
  )
}

export default page