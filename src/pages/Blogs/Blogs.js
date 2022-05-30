import React from 'react';

const Blogs = () => {
  return (
    <div className='pt-28 pb-4'>
      <div className="w-full md:w-2/3 mx-auto p-5 bg-white rounded-lg shadow">
        <div className="flex items-center justify-between">
          <div className="w-2/3">
            <h2 className="section-heading">
              Questions and Answer
            </h2>
          </div>

        </div>

        <div className="mt-8 space-y-8">
          <div>
            <div className="flex items-start">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-green-500 text-white font-medium text-sm">
                  Que
                </span>
              </div>

              <p className="ml-4 md:ml-6">
                How will you improve the performance of a React Application?
              </p>
            </div>

            <div className="flex items-start mt-3">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                  Ans
                </span>
              </div>

              <p className="ml-4 md:ml-6 text-gray-800">
                React is a single page app. there is many way to optimize our react app like We can use Link component from react-router-dom for skip the load-event when clicking the hyperlink.
              </p>
            </div>


          </div>
        </div>
        <div className="mt-8 space-y-8">
          <div>
            <div className="flex items-start">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-green-500 text-white font-medium text-sm">
                  Que
                </span>
              </div>

              <p className="ml-4 md:ml-6">
                What are the different ways to manage a state in a React application?
              </p>
            </div>

            <div className="flex items-start mt-3">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                  Ans
                </span>
              </div>

              <p className="ml-4 md:ml-6 text-gray-800">
                UseState hook is the simplest way to handle state but there is also others way. you can also manage states by re-update variables.
              </p>
            </div>


          </div>
        </div>
        <div className="mt-8 space-y-8">
          <div>
            <div className="flex items-start">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-green-500 text-white font-medium text-sm">
                  Que
                </span>
              </div>

              <p className="ml-4 md:ml-6">
                How does prototypical inheritance work?
              </p>
            </div>

            <div className="flex items-start mt-3">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                  Ans
                </span>
              </div>

              <p className="ml-4 md:ml-6 text-gray-800">
                Its works for style of object-oriented programming in which behaviour reuse known as inheritance is performed via a process of reusing existing objects that serve as prototypes.
              </p>
            </div>


          </div>
        </div>
        <div className="mt-8 space-y-8">
          <div>
            <div className="flex items-start">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-green-500 text-white font-medium text-sm">
                  Que
                </span>
              </div>

              <p className="ml-4 md:ml-6">
                Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
              </p>
            </div>

            <div className="flex items-start mt-3">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                  Ans
                </span>
              </div>

              <p className="ml-4 md:ml-6 text-gray-800">
                Easy to handle and Its Stand one place. not needed to redeclare.
              </p>
            </div>


          </div>
        </div>
        <div className="mt-8 space-y-8">
          <div>
            <div className="flex items-start">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-green-500 text-white font-medium text-sm">
                  Que
                </span>
              </div>

              <p className="ml-4 md:ml-6">
                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
              </p>
            </div>

            <div className="flex items-start mt-3">
              <div>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded bg-gray-200 text-gray-800 font-medium text-sm">
                  Ans
                </span>
              </div>

              <p className="ml-4 md:ml-6 text-gray-800">
                by using query search when i call the api and find the collection by this query value.
              </p>
            </div>


          </div>
        </div>

      </div>
    </div>
  );
};

export default Blogs;