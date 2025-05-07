'use client'
import React from 'react'
import {
    Search,
    ListFilter ,
    X,
  } from "lucide-react"

const SearchBar = () => {
  return (
    <section className="relative flex justify-center px-4 -mt-16 mb-16">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 w-full">
              <div className="flex items-center bg-[#F2F2F2] rounded-md px-4 py-2 w-full">
                <Search className="w-6 h-6 text-[#A1A1AA] mr-2" />
                <input
                  type="text"
                  placeholder="RECHERCHE UN ARTICLE"
                  className="bg-transparent border-none outline-none flex-1 text-secondary-light placeholder-[#A1A1AA] placeholder:text-base text-center md:text-left "
                />
                <X className="w-4 h-4 text-light-quaternary cursor-pointer" />
              </div>
            </div>
            <button className="bg-[#E10919] hover:bg-[#B00813] text-white font-semibold rounded-md px-6 py-3 flex items-center gap-2 transition-colors duration-300 whitespace-nowrap shadow-md">
              <span>FILTREZ PAR</span>
              <ListFilter  className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchBar