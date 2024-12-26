import { useEffect, useState } from "react";
import "./App.css";
import Team from "./components/Team";
import Navbar from "./components/Navbar";
import Testemonial from "./components/Testemonial";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const [color, setColor] = useState("black");

  const router = createBrowserRouter([
    {
      path: "/APIHandle/",
      element: (
        <>
          <Navbar />
          <Team />
        </>
      ),
    },
    {
      path: "/APIHandle/testemonial/",
      element: (
        <>
          <Navbar />
          <Testemonial />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Team />
        <Testemonial />
      </RouterProvider>
    </>
    // <>
    // <div
    //     classNameName="w-full h-screen duration-200"
    //     style={{ backgroundColor: color }}
    //   >
    //     <div classNameName="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //       <div classNameName="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
    //         <button
    //           onClick={() => setColor("red")}
    //           classNameName="outline-none px-4 py-1 rounded-full text-white"
    //           style={{ backgroundColor: "red" }}
    //         >
    //           Red
    //         </button>
    //         <button
    //           onClick={() => {
    //             setColor("green");
    //           }}
    //           classNameName="outline-none px-4 py-1 rounded-full text-white"
    //           style={{ backgroundColor: "green" }}
    //         >
    //           Green
    //         </button>
    //         <button
    //           onClick={() => setColor("olive")}
    //           classNameName="outline-none px-4 py-1 rounded-full text-white"
    //           style={{ backgroundColor: "olive" }}
    //         >
    //           Olive
    //         </button>
    //         <button
    //           onClick={() => setColor("orange")}
    //           classNameName="outline-none px-4 py-1 rounded-full text-white"
    //           style={{ backgroundColor: "orange" }}
    //         >
    //           Orange
    //         </button>
    //         <button
    //           onClick={() => setColor("purple")}
    //           classNameName="outline-none px-4 py-1 rounded-full text-white"
    //           style={{ backgroundColor: "purple" }}
    //         >
    //           Purple
    //         </button>
    //         <button
    //           onClick={() => setColor("blue")}
    //           classNameName="outline-none px-4 py-1 rounded-full text-white"
    //           style={{ backgroundColor: "blue" }}
    //         >
    //           Blue
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}

export default App;
