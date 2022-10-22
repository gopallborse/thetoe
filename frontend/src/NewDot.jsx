import React from "react";
import { useState } from "react";

const NewDot = () => {

//   const [newDot, setNewDot] = useState([]);

//   submitHandler = () => {

//     setNewDot({
//         "category":category,
//         "title":title,
//         "body":body
//     })
//   }

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <form >
              <div className="mb-4">
                <label className="text-xl text-gray-600">Category</label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="category"
                  defaultValue=""
                  required=""
                />
              </div>
              <div className="mb-4">
                <label className="text-xl text-gray-600">Title</label>
                <br />
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 w-full"
                  name="title"
                />
              </div>
              <div className="mb-8">
                <label className="text-xl text-gray-600">Body</label>
                <br />
                <textarea
                  name="body"
                  className="border-2 border-gray-300 w-full"
                />
              </div>
              <div className="flex p-1">
                <button
                  type="submit"
                  className="p-3 bg-blue-500 text-white hover:bg-blue-400"
                  required=""
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDot;
