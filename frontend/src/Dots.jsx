import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";

function Dots() {
  const [dots, setDots] = useState([]);

  const [pageCount, setPageCount] = useState(0);

  const limit = 6;

  useEffect(() => {
    const getDots = async () => {
      const result = await fetch(
        `http://localhost:3001/dots?_page=1&_limit=${limit}`
      );
      const data = await result.json();
      const total = result.headers.get("x-total-count");
      setPageCount(Math.ceil(total / limit));
      setDots(data);
    };
    getDots();
  }, []);

  const fetchDots = async (currentPage) => {
    const result = await fetch(
      `http://localhost:3001/dots?_page=${currentPage}&_limit=${limit}`
    );
    const data = await result.json();
    return data;
  };

  const handlePageClick = async (data) => {
    const currentPage = data.selected + 1;
    const dotsFromServer = await fetchDots(currentPage);
    setDots(dotsFromServer);
  };

  return (
    <div className="md:container md:mx-auto px-40">
      <ReactPaginate
        previousLabel={
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
              clipRule="evenodd"
            />
          </svg>
        }
        nextLabel={
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        }
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={
          "isolate inline-flex -space-x-px rounded-md shadow-sm justify-self-center"
        }
        pageClassName={"page-item"}
        pageLinkClassName={
          "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        }
        // activeClassName={"relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"}

        previousClassName={
          "relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        }
        nextClassName={
          "relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
        }
        breakClassName={
          "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700"
        }
      />
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {dots.map((a) => {
              return (
                <DotPreview
                  key={a.id}
                  category={a.category}
                  title={a.title}
                  body={a.body}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const DotPreview = (props) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {props.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed mb-3">{props.body}</p>
          <div className="flex items-center flex-wrap ">
            <NavLink to="/dot">Read More</NavLink>
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dots;
