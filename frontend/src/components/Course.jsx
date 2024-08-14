import React, { useState } from "react";

import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We are delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            rerum nihil placeat. Error commodi eius sint consequuntur animi
            veritatis aspernatur sequi obcaecati cum voluptatibus adipisci
            ipsum, eaque, quos quae perspiciatis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae vel quod velit vero pariatur
            iusto sunt dolor fugiat incidunt cumque.
          </p>
          <Link to="/">
            <button className="text-white bg-pink-500 px-2 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
