"use client"
import Cta, { Ctar } from '@/components/Cta'
import Tech, { Managedit } from '@/components/Tech'
import Hero from '@/components/services/Hero'
import Carousel from '@/components/services/Services'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Carousel/>
        <Ctar/>
        <Tech/>
        <Managedit/>
        <Cta/>
    </div>
  )
}

export default page