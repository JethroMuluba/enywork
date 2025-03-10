'use client'

import { Button } from "@/components/ui/button"
import { MessagesSquare } from 'lucide-react';

export function HeaderButton() {
  return( 
  
  <Button className=" flex gap-2 bg-[#E10919] px-4 py-2 text-white cursor-pointer">
    <span>CHATS</span>
    <MessagesSquare className="w-5 h-5" />
  </Button>)
}
