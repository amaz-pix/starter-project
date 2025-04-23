// src/pages/Counter.jsx
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(5);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 via-white to-white">
        {/* Background pattern */}
        <div className="absolute inset-x-0 top-0 -z-10 opacity-50 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
          <div 
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" 
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Redux Counter
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A demonstration of Redux state management in a React application with modern design.
            </p>
          </div>
        </div>
      </div>

      {/* Main Counter Section */}
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Current Count</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                This counter demonstrates Redux state management. The counter value is stored in the Redux store and can be updated using the buttons below.
              </p>
              
              <div className="mt-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-indigo-600 tabular-nums">
                    {count}
                  </div>
                  <p className="mt-4 text-sm text-gray-500">Stored in Redux state</p>
                </div>
              </div>
            </div>
            
            <div className="p-2 lg:flex lg:flex-shrink-0 lg:flex-col">
              <div className="mt-10 mx-auto lg:mx-0 rounded-2xl bg-gray-50 py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16 lg:w-80">
                <div className="px-8">
                  <div className="flex justify-center space-x-6">
                    <button
                      onClick={() => dispatch(decrement())}
                      className="flex-1 rounded-xl bg-red-500 px-8 py-4 text-center text-xl font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      - 1
                    </button>
                    <button
                      onClick={() => dispatch(increment())}
                      className="flex-1 rounded-xl bg-green-500 px-8 py-4 text-center text-xl font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                    >
                      + 1
                    </button>
                  </div>
                  
                  <div className="mt-10">
                    <div className="relative">
                      <input
                        type="number"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(Number(e.target.value) || 0)}
                        className="block w-full rounded-md border-0 py-3 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                      />
                    </div>
                    <button
                      onClick={() => dispatch(incrementByAmount(incrementAmount))}
                      className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Add Amount
                    </button>
                  </div>
                  
                  <div className="mt-8">
                    <button
                      onClick={() => dispatch(incrementByAmount(0 - count))}
                      className="text-sm text-gray-500 underline hover:text-gray-700"
                    >
                      Reset Counter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Redux Explanation Section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">How it works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Understanding Redux in this example
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Redux provides a predictable state container for JavaScript apps. Here's how it's being used in this counter example.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: "Redux Store",
                  description: "The store holds the state of your application. In this case, it stores the counter value.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  ),
                },
                {
                  title: "Actions",
                  description: "Actions are payloads of information that send data from your application to your store, like increment and decrement.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  ),
                },
                {
                  title: "Reducers",
                  description: "Reducers specify how the application's state changes in response to actions sent to the store.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
                      {feature.icon}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;