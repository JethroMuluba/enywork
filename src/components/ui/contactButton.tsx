'use client'

import { Button } from "@/components/ui/button"
import { MessagesSquare } from 'lucide-react';

export function ContactButton() {
  return( 
  
  <Button className="hidden lg:block bg-[#E10919] hover:bg-[#B00813] px-4 py-2 text-white cursor-pointer">
    
    <div className="flex gap-2">
      <span>CHATS</span>
      <MessagesSquare className="w-5 h-5" />
    </div>
  </Button>)
}
