import Image from "next/image"
import SectionTitle from "./ui/sectionTitle"
import data from "@/data/data.json"


export default function TestimonialsSection() {
    const getTitle = data.home?.[8]?.testimonialSection?.[0].title || "Ce qu'ils disent de nous";
    const getSubTitle = data.home?.[8]?.testimonialSection?.[0].subtitle || "Des témoignages forts et authentiques provenant des grandes autorités de ce pays et d'ailleurs.";
    const testimonialData = data.home?.[8]?.testimonialSection?.[0].testimonial;
  return (
    <section className="bg-[#F2F2F2] py-20 px-4 md:px-8 lg:px-25 2xl:px-45">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-12 md:gap-16">
            <SectionTitle title={getTitle} subTitle={getSubTitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {testimonialData?.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-[#E10919]">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-secondary">{testimonial.name}</h3>
                    <p className="text-[#3B4E6A]">{testimonial.role}</p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className={`px-6 py-8 rounded-lg shadow-lg relative ${testimonial.highlighted ? "bg-[#E10919] text-white" : "bg-white text-secondary-light"}`}
                  >
                    <div className="absolute -top-2 left-10 w-4 h-4 transform rotate-45 bg-inherit"></div>
                    <p className="text-center">{testimonial.quote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

