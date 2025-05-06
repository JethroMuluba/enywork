"use client"
import { X, Phone, Mail, MapPin } from "lucide-react"
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react"
import { useEffect, useRef } from "react"
import { motion } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function DesktopMenu({ isOpen, onClose }: MobileMenuProps) {
  const desktopMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (desktopMenuRef.current && !(desktopMenuRef.current as HTMLElement).contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      ref={desktopMenuRef}
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="absolute left-0 right-0 top-[0.06rem] inset-0 z-50 flex items-start justify-end"
    >
      <div className="relative w-[390px] h-[590px] bg-white rounded-bl-lg shadow-lg">
        {/* Header */}
        <div className="absolute w-full h-[57px] left-0 top-0 bg-[#F2F2F2]">
          <button onClick={onClose} className="absolute w-[14px] h-[14px] right-[45px] top-1/2 -translate-y-1/2">
            <X className="w-full h-full text-[#1C2736]" strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="absolute w-[300px] flex flex-col gap-[15px] left-1/2 -translate-x-1/2 top-[82px]">
          {/* Heading */}
          <h4 className="w-[311px] h-[74px] font-medium text-[24px] leading-[37px] text-[#E10919]">
            Faisons bouger les choses ensemble
          </h4>

          {/* Contacts */}
          <div className="flex flex-col gap-[26px] w-[210px]">
            <h5 className="font-medium text-[16px] leading-[23px] text-[#1C2736]">NOS CONTACTS</h5>

            <div className="flex flex-col gap-[13px] w-full">
              {/* Phone */}
              <div className="flex items-center gap-[13px]">
                <div className="relative w-[26px] h-[26px]">
                  <Phone className="absolute inset-0 m-auto w-[18px] h-[18px] text-[#E10919]" strokeWidth={2} />
                </div>
                <span className="text-[16px] leading-[30px] text-[#3B4E6A]">+243 899 467 398</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-[13px]">
                <div className="relative w-[26px] h-[26px]">
                  <Mail className="absolute inset-0 m-auto w-[18px] h-[18px] text-[#E10919]" strokeWidth={2} />
                </div>
                <span className="text-[16px] leading-[30px] text-[#3B4E6A]">contact@enywork.com</span>
              </div>
            </div>
          </div>

          {/* Right Box */}
          <div className="flex flex-col gap-[41px] w-full">
            {/* Address */}
            <div className="flex flex-col gap-[22px] w-full">
              <h5 className="font-medium text-[16px] leading-[23px] text-[#1C2736]">NOTRE ADRESSE</h5>

              <div className="flex gap-[13px]">
                <div className="relative w-[26px] h-[26px] flex-shrink-0 mt-1">
                  <MapPin className="absolute inset-0 m-auto w-[18px] h-[18px] text-[#E10919]" strokeWidth={2} />
                </div>
                <span className="text-[16px] leading-[30px] text-[#3B4E6A]">
                  Ancienne Galerie Présidentielle, 6è niveau, Local 6B8, Kinshasa/Gombe
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-[19px] w-full">
              <h5 className="font-medium text-[16px] leading-[23px] text-[#1C2736]">SUIVEZ-NOUS SUR :</h5>

              <div className="flex gap-[11px]">
                {/* Instagram */}
                <div className="relative w-[36px] h-[36px] bg-[#E10919] rounded-full flex items-center justify-center">
                  <Instagram className="w-[25px] h-[25px] text-white" />
                </div>

                {/* TikTok */}
                <div className="relative w-[36px] h-[36px] bg-[#E10919] rounded-full flex items-center justify-center">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M18.75 10.4167V14.5833C18.75 18.75 14.5833 22.9167 10.4167 22.9167C6.25 22.9167 2.08333 18.75 2.08333 14.5833C2.08333 10.4167 6.25 6.25 10.4167 6.25V10.4167C10.4167 10.4167 6.25 10.4167 6.25 14.5833C6.25 18.75 10.4167 18.75 10.4167 18.75C10.4167 18.75 14.5833 18.75 14.5833 14.5833V2.08333H18.75C18.75 2.08333 18.75 6.25 22.9167 6.25V10.4167H18.75Z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Facebook */}
                <div className="relative w-[36px] h-[36px] bg-[#E10919] rounded-full flex items-center justify-center">
                  <Facebook className="w-[25px] h-[25px] text-white" />
                </div>

                {/* Twitter */}
                <div className="relative w-[36px] h-[36px] bg-[#E10919] rounded-full flex items-center justify-center">
                  <Twitter className="w-[25px] h-[25px] text-white" />
                </div>

                {/* LinkedIn */}
                <div className="relative w-[36px] h-[36px] bg-[#E10919] rounded-full flex items-center justify-center">
                  <Linkedin className="w-[25px] h-[25px] text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="absolute w-full h-[82px] left-0 bottom-0 bg-[#E10919] flex items-center justify-center">
          <span className="text-[20px] leading-[28px] text-white">ALLER SUR L&apos;ESPACE ADMIN</span>
        </div> */}
      </div>
    </motion.div>
  )
}

