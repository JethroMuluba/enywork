import React, { useState } from 'react'
import {SendHorizontal} from "lucide-react"
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { useForm } from 'react-hook-form';
import data from '@/data/data.json'

interface FormData extends Record<string, unknown> {
  name: string;
  firstname: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [displaySuccesMessage, setDisplaySuccesMessage] = useState(false);
    const [displayErrorMessage, setDisplayErrorMessage] = useState(false);
    const formData = data.contactForm;

    const onSubmitForm = (data: FormData) => {

      const SERVICE_ID = 'outlook_mail_service';
      const TEMPLATE_ID = 'contact_formId';
      const USER_ID = 'yZVMH1wXdomQsAwds';
  
      emailjs.send(
        SERVICE_ID,TEMPLATE_ID, data, USER_ID
      )
        .then((result) => {
          console.log(result.text);
          setDisplaySuccesMessage(true);
          setTimeout(() => setDisplaySuccesMessage(false), 4000);
          reset();
        })
        .catch((error) => {
          console.log(error.text);
          setDisplayErrorMessage(true);
          setTimeout(() => setDisplayErrorMessage(false), 4000);
        });
            };

  return (
    <section ref={ref} className="relative flex justify-center px-8 -mt-16 mb-20">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full max-w-3xl">
        <div className="bg-white rounded-xl shadow-2xl p-4 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 w-full">
                <motion.form 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  
                  onSubmit={handleSubmit(onSubmitForm)} className=' flex flex-col gap-[28px]'>

                    <div className=' w-full flex flex-col md:flex-row gap-8'>
                      <div className='md:w-1/2 flex flex-col items-start  gap-2'>
                          <label htmlFor="name" className=' text-base text-[#8D9092]'> {formData[0].label} </label>
                          <input {...register("name", {required:true, minLength: 3, maxLength:60})} type="text" className=' bg-[#F2F2F2] h-[55px] rounded-[5px] px-5 w-[100%] text-[#3B4E6A] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#3B4E6A] ' placeholder='Saissisez votre nom' />
                          {errors.name && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[0].errorMessage}</span>}
                      </div>

                      <div className='md:w-1/2 flex flex-col items-start  gap-2'>
                          <label htmlFor="firstname" className=' text-base text-[#8D9092]'> {formData[1].label} </label>
                          <input {...register("firstname", {required:true, minLength: 3, maxLength:60})} type="text" className=' bg-[#F2F2F2] h-[55px] rounded-[5px] px-5 w-[100%] text-[#3B4E6A] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#3B4E6A] ' placeholder='Saisissez votre prénom' />
                          {errors.name && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[0].errorMessage}</span>}
                      </div>
                    </div>



                    <div className=' w-full flex flex-col gap-[28px] md:flex-row'>
                        <div className='md:w-1/2 flex flex-col items-start  gap-2'>
                            <label htmlFor="phone" className=' text-base text-[#8D9092]'>{formData[2].label}</label>
                            <input {...register("phone", {required:true})} type="number" className=' bg-[#F2F2F2] h-[55px] rounded-[5px] px-5 w-[100%] text-[#3B4E6A] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#3B4E6A] ' placeholder='Saissisez votre numéro de téléphone' />
                            {errors.phone && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[1].errorMessage}</span>}
                        </div>

                        <div className='md:w-1/2  flex flex-col items-start  gap-2'>
                            <label htmlFor="email" className=' text-base text-[#8D9092]'>{formData[3].label}</label>
                            <input {...register("email", {required:true, minLength: 5, maxLength:60})} type="email" className=' bg-[#F2F2F2] h-[55px] rounded-[5px] px-5 w-[100%] text-[#3B4E6A] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#3B4E6A] ' placeholder='Saissisez votre email' />
                            {errors.email && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[2].errorMessage}</span>}
                        </div>
                    </div>

                    <div className=' flex flex-col items-start  gap-2'>
                        <label htmlFor="message" className=' text-base text-[#8D9092]'>{formData[4].label}</label>
                        <textarea {...register("message", {required:true, minLength: 10, maxLength:500})} name="message" id="" className=' bg-[#F2F2F2] h-[186px] rounded-[5px] p-5 w-[100%] text-[#3B4E6A] placeholder:text-[#8D9092] placeholder:opacity-20 outline-none appearance-none caret-[#3B4E6A] ' placeholder='Saissisez votre message'></textarea>
                        {errors.message && <span style={{color: '#DA5643', fontSize: '14px'}}>{formData[3].errorMessage}</span>}  
                    </div>

                    {displaySuccesMessage && (
                                        <motion.div 
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{opacity : 3}}
                                        transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1,
                                        }}
                                        className="relative top-[2px] lg:top-[1px] flex justify-center text-center bg-[#34B77B] text-white px-8 py-4 rounded-lg">
                                            Message Sent Successfully! Thank You To Contact Us.
                                        </motion.div>
                                    )}
        
                    {displayErrorMessage && (
                                        <motion.div 
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                        delay: 0.1,
                                        }}
                                        className=" fixed top-[2px] lg:top-[1px] flex justify-center text-center bg-[#DA5643] text-white px-8 py-2 rounded">
                                            Failed To Send The Message, Please Try Again.
                                        </motion.div>
                                    )}

                    <div className='flex justify-center md:justify-start w-full '>
                      <button type='submit' className=' w-full md:w-auto bg-[#E10919] hover:bg-[#B00813] px-8 py-4 rounded-lg text-white cursor-pointer flex items-center gap-2 active:border-2 active:border-[#3B4E6A]'>{formData[5].buttonName}
                      <SendHorizontal  className="w-5 h-5" />
                      </button>
                    </div>


                    

                </motion.form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactForm