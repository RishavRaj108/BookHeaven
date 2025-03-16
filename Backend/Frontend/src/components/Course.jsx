import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link,href } from "react-router-dom";
import axios from "axios";
function Course() {
  const [book , setBook] =useState([]);
  useEffect(()=>{
    const getBook = async() =>{
      try {
       const res =await axios.get("https://bookheaven-sd2p.onrender.com/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-14 pt-3 items-center text-center justify-center">
          <h1 className="text-2xl md:text-4xl">
          🌟 Welcome to Our Exclusive 
            <span className="text-pink-600">Learning Hub! 🚀</span>
          </h1>
          <p className="mt-12">
          We’re thrilled to have you here! Our premium courses are designed to take your learning experience to the next level, offering expert-led content, in-depth lessons, and hands-on projects that help you master new skills with confidence. Whether you're looking to deepen your knowledge, build a strong portfolio, or advance your career, our paid courses provide structured guidance, real-world applications, and access to an exclusive learning community. With a well-crafted curriculum and personalized support, you’ll gain valuable insights that set you apart. Unlock your full potential and start your journey today!
          </p>
          <Link to={"/"}>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">Back</button>
          </Link>
         
        </div>
        <div className="mt-12 grid grid-col-1 md:grid-cols-4">
            {
                book.map((item) =>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
