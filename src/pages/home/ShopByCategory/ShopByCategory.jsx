import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import SubCategory from "./SubCategory";
import { Parallax } from "react-parallax";

const ShopByCategory = () => {
   const [subCategories, setSubCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch("https://toy-market-place-server.vercel.app/sub_category")
         .then((res) => res.json())
         .then((data) => {
            setSubCategories(data);
            setLoading(false);
         });
   }, []);
   if (loading) {
      return (
         <Blocks
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
         />
      );
   }
   return (
      <div data-aos="fade-up" id="categories">
         <div className="text-center mb-10 space-y-3">
            <h2 className="text-3xl md:text-5xl font-bold ">Shop Toy With Category Easily!!</h2>
            <p className="md:text-xl font-semibold md:w-1/2 mx-auto">
               Explore our wide selection of car toys, including realistic die-cast models, remote-controlled
               cars, and interactive playsets, to find the perfect toy for car enthusiasts of all ages.
            </p>
         </div>
         <Tabs className="my-20 rounded-lg">
            <Parallax
               blur={{ min: -15, max: 15 }}
               bgImage={"https://i.ibb.co/nwtdfPt/6275119.jpg"}
               bgImageAlt="the dog"
               strength={-200}
               className="px-4 py-6 rounded-md"
            >
               <TabList className="bg-transparent font-bold text-white text-xl border-0">
                  {subCategories.map((subCategory, index) => (
                     <Tab key={index}>{subCategory}</Tab>
                  ))}
               </TabList>

               {subCategories.map((subCategory, index) => (
                  <TabPanel key={index}>
                     <SubCategory subCategory={subCategory}></SubCategory>
                  </TabPanel>
               ))}
            </Parallax>
         </Tabs>
      </div>
   );
};

export default ShopByCategory;
