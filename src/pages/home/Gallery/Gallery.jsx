import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
   return (
      <div className="my-24" data-aos="fade-up">
         <div className="text-center mb-10 space-y-3">
            <h2 className="text-5xl font-bold ">Car Toy Gallery</h2>
            <p className="text-xl font-semibold">Unleash the Joy of Miniature Racing</p>
         </div>
         <div className="grid grid-cols-2 gap-6">
            <div
               className="relative group row-span-2 h-[730px]"
               data-aos="fade-right"
               data-aos-duration="1500"
            >
               <img
                  src="https://assets.target.com.au/transform/a775af00-4932-4ffa-b529-6ea444825017/66763505-IMG-001"
                  alt=""
                  className="w-full h-[730px]"
               />
               <div className="bg-black w-full hidden group-hover:flex justify-end p-10 items-end h-full text-white bg-opacity-75 absolute bottom-0 ">
                  <a href="#categories">
                     <h2 className="text-5xl gap-4">
                        Remote Control Cars <FaArrowRight className="inline-block"></FaArrowRight>
                     </h2>
                  </a>
               </div>
            </div>

            <div className="relative group h-[350px]" data-aos="fade-left" data-aos-duration="1500">
               <img
                  src="https://images.brickset.com/sets/images/5867-1.jpg"
                  alt=""
                  className="w-full h-[350px]"
               />
               <div className="bg-black w-full hidden group-hover:flex justify-end p-10 items-end h-full text-white bg-opacity-75 absolute bottom-0 ">
                  <a href="#categories">
                     <h2 className="text-5xl gap-4">
                        Diecast Car <FaArrowRight className="inline-block"></FaArrowRight>
                     </h2>
                  </a>
               </div>
            </div>
            <div className="relative group h-[350px]" data-aos="fade-left" data-aos-duration="1500">
               <img
                  src="https://5.imimg.com/data5/DE/LQ/TI/SELLER-35805553/barodian-s-smart-toys-slot-car-set-with-racing-assistant-high-speed-track-500x500.jpg"
                  alt=""
                  className="w-full h-[350px]"
               />
               <div className="bg-black w-full hidden group-hover:flex justify-end p-10 items-end h-full text-white bg-opacity-75 absolute bottom-0 ">
                  <a href="#categories">
                     <h2 className="text-5xl gap-4">
                        Race Track Sets <FaArrowRight className="inline-block"></FaArrowRight>
                     </h2>
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gallery;
