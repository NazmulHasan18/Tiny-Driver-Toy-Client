import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import { Blocks } from "react-loader-spinner";
import SubCategory from "./SubCategory";

const ShopByCategory = () => {
   const [subCategories, setSubCategories] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      fetch("http://localhost:4000/sub_category")
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
   );
};

export default ShopByCategory;
