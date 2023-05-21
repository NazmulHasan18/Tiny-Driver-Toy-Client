import { Helmet } from "react-helmet";

const Blogs = () => {
   return (
      <div className="bg-white p-10 rounded-lg">
         <Helmet>
            <title>Tiny Driver Toy | Blogs</title>
         </Helmet>
         <h2 className="text-5xl font-bold mb-8  text-center">Question And Answer</h2>
         <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200 rounded-box "
         >
            <input type="checkbox" />
            <div className="collapse-title text-2xl bg-blue-600 text-white font-medium">
               1. What is an access token and refresh token? How do they work and where should we store them
               on the client-side?
            </div>
            <div className="collapse-content space-y-4 ">
               <p className="pt-4">
                  Access token is a temporary token which validity is short its like OTP what is valid for
                  some moment. And Refresh token is a token which validity is more then access token. It can
                  be validate more then a day, week or month.
               </p>
               <div>
                  <h4 className="text-lg font-bold">Work Of Access token and Refresh token:</h4>
                  <p>
                     Access token is being used to get some data secret or protected data on server site for
                     few moment. And it expire after some time. But refresh token is being use to generate a
                     access token and keep user validate for more time. If Access token is expire by
                     authenticating with refresh token we can get user identity and we can provide another
                     tokent to get private data.
                  </p>
               </div>
               <div>
                  <h4 className="text-lg font-bold">Where should we store Access token and Refresh token:</h4>
                  <p>
                     <span className="font-bold">Access Token:</span> Since the access token needs to be sent
                     with each request to the server, it is commonly stored in the client-side memory (e.g.,
                     in a variable) or in a browser cookie.
                  </p>
                  <p>
                     <span className="font-bold">Refresh Token:</span> The refresh token, being a long-lived
                     credential, should be stored securely on the client-side. The recommended approach is to
                     store it in an HTTP-only cookie, which is inaccessible to JavaScript and provides
                     protection against cross-site scripting (XSS) attacks.{" "}
                  </p>
               </div>
            </div>
         </div>
         <br />
         <br />
         <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-2xl bg-blue-600 text-white font-medium">
               2. Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content space-y-3">
               <p className="pt-4">
                  SQL stands for Structure Query Language. SQL database work with predefine schema and in a
                  table format. NoSQL stands for No SQL. Means, I will not work with any SQL Language. It work
                  with document base Database
               </p>
               <p className="text-xl font-semibold">Different Between SQL and NoSQL:</p>
               <div className=" md:flex gap-10">
                  <div>
                     <p className="font-bold mb-4">SQL:</p>
                     <ol className="list-decimal list-inside">
                        <li>Relational Database</li>
                        <li>Table Based Database</li>
                        <li>Predefined Schema</li>
                        <li>Powerful Query Language</li>
                        <li>Difficult to Scale Or Maintain</li>
                     </ol>
                  </div>
                  <div>
                     <p className="font-bold mb-4">NoSQL:</p>
                     <ol className="list-decimal list-inside">
                        <li>Non Relational or Distributed Database</li>
                        <li>Document Based Database</li>
                        <li>Dynamic Schema</li>
                        <li>No Query Language or No SQL</li>
                        <li>Easier to Scale Or Maintain</li>
                     </ol>
                  </div>
               </div>
            </div>
         </div>
         <br />
         <br />
         <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-2xl bg-blue-600 text-white font-medium">
               3. What is express js? What is Nest JS?
            </div>
            <div className="collapse-content space-y-3">
               <p className="pt-4">
                  <span className="font-bold">Express.js: </span>
                  Express.js is a popular web application framework for Node.js. It provides a minimalistic
                  and flexible approach to building web applications and APIs. Express.js simplifies the
                  process of handling HTTP requests, routing, middleware, and managing server-side logic. It
                  allows developers to create server-side applications in JavaScript and provides a range of
                  features and utilities to streamline the development process.
               </p>
               <p className="pt-4">
                  <span className="font-bold">Next Js: </span>
                  Nest.js, on the other hand, is a progressive Node.js framework for building efficient,
                  scalable, and maintainable server-side applications. Nest.js takes inspiration from Angular
                  and adopts a modular and opinionated architecture.
               </p>
            </div>
         </div>
         <br />
         <br />
         <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
            <input type="checkbox" />
            <div className="collapse-title text-2xl bg-blue-600 text-white font-medium">
               4. What is MongoDB aggregate and how does it work?
            </div>
            <div className="collapse-content space-y-3">
               <p className="pt-4">
                  <span className="font-bold">MongoDB aggregation: </span>
                  MongoDB&apos;s Aggregation Framework is a powerful tool for performing data processing
                  operations on MongoDB collections. It allows you to analyze and manipulate data using a
                  variety of stages and operators.
               </p>
               <p className="pt-4">
                  <span className="font-bold">How does it work: </span>
                  MongoDB&apos;s Aggregation Framework processes data in a series of stages, where each stage
                  performs a specific operation on the data and passes it to the next stage. The pipeline
                  consists of stages and operators that modify and filter the data. The final result is
                  obtained from the output of the last stage in the pipeline. It provides a powerful and
                  efficient way to analyze and transform data within the database server.
               </p>
            </div>
         </div>
      </div>
   );
};

export default Blogs;
