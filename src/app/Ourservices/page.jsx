"use client"
import Tech from '@/components/Tech'
import Hero from '@/components/services/Hero'
import Carousel from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Carousel/>
        <Tech/>
    </div>
  )
}

export default page