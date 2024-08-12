import React from "react";

function Cards(item) {
  console.log(item);
  return (
    <>
      <div className="mt-4  my-3 p-2">
        <div className="card dark:bg-slate-500 bg-base-100 w-92 shadow-xl hover:scale-105 duration-200">
          <figure>
            <img
              src="https://img.freepik.com/free-vector/stack-colorful-books_1308-171741.jpg?t=st=1723330498~exp=1723334098~hmac=e7355b7b01b1ef483f326aad4de888013a0e0591f31a8048f17cbc4aba6773ff&w=826"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer  badge badge-outline px-2 py-1 hover:text-white hover:bg-pink-500 ">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
