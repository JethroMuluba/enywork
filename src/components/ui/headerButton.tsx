'use client'

import { ArrowRight } from 'lucide-react';
import Link from "next/link"

export function HeaderButton() {
  return( 
  
  
    
    <Link href="/contact" className="bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg font-normal text-white cursor-pointer self-center lg:self-start hidden lg:flex items-center gap-2 ">
          <span>CONTACT</span>
          <ArrowRight className="w-5 h-5" />
    </Link>
  )
}
