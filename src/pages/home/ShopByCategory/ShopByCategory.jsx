import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import SubCategory from "./SubCategory";

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
      <div data-aos="fade-up">
         <div className="text-center text-white mb-10 space-y-3">
            <h2 className="text-5xl font-bold ">But Toy With Category Easily!!</h2>
            <p className="text-xl font-semibold w-1/2 mx-auto">
               Explore our wide selection of car toys, including realistic die-cast models, remote-controlled
               cars, and interactive playsets, to find the perfect toy for car enthusiasts of all ages.
            </p>
         </div>
         <Tabs className="bg-white px-4 py-6 my-20">
            <TabList>
               {subCategories.map((subCategory, index) => (
                  <Tab key={index}>{subCategory}</Tab>
               ))}
            </TabList>

            {subCategories.map((subCategory, index) => (
               <TabPanel key={index}>
                  <SubCategory subCategory={subCategory}></SubCategory>
               </TabPanel>
            ))}
         </Tabs>
      </div>
   );
};

export default ShopByCategory;
