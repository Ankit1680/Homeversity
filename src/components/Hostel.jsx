import React from "react";
import { TbAirConditioning } from "react-icons/tb";
import { RiStarSFill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiBowlFoodDuotone } from "react-icons/pi";


function Hostel() {
 
  const data = [
    {
      id: 1,
      name: "Prathamesh Apt",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: false,
      isMale: false,
      isAc: true,

      img: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
    },

    {
      id: 2,
      name: "Mumbai plaza",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: true,
      isMale: true,
      isAc: false,

      img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
    },

    {
      id: 3,
      name: "Bangalore Rentals",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: true,
      isMale: false,
      isAc: true,

      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3.5,
    },

    {
      id: 4,
      name: "Andheri Lanes",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: false,
      isMale: true,
      isAc: true,

      img: "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },

    {
      id: 5,
      name: "Band-stand dome",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: true,
      isMale: false,
      isAc: true,
      img: "https://plus.unsplash.com/premium_photo-1661779601614-9206e0451077?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
    },

    {
      id: 6,
      name: "Metro-Cities-stay",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: true,
      isMale: true,
      isAc: false,
      img: "https://images.unsplash.com/flagged/photo-1573168710465-7f7da9a23a15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.4,
    },

    //new items
    {
      id: 7,
      name: "Mumbai plaza",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: true,
      isMale: true,
      isAc: false,

      img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.5,
    },

    {
      id: 8,
      name: "Bangalore Rentals",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: true,
      isMale: false,
      isAc: true,

      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3.5,
    },

    {
      id: 9,
      name: "Andheri Lanes",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, voluptatem?",
      isVeg: false,
      isMale: true,
      isAc: true,

      img: "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 5,
    },
  ];




  return (
    <div className="flex flex-wrap overflow-y-auto overflow-x-hidden">
      {data.map((item,index)=>(<div className="relative w-[250px] h-[320px] bg-white m-4 rounded-tr-3xl  rounded-bl-3xl border-2 pb-2 shadow-md shadow-zinc-400">
        <div className=" absolute w-10 h-5 bg-black rounded-tl-lg rounded-br-lg mt-2">
          {data.isMale ? (
            <h3 className="text-white text-sm  text-center">M</h3>
          ) : (
            <h3 className="text-white text-sm  text-center">F</h3>
          )}
        </div>
        <div className="top w-full h-[40%]  rounded-tr-3xl rounded-br-3xl rounded-bl-3xl shadow-xl p-2">
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover rounded-3xl "
          />
        </div>

        <div className="bottom w-full h-[60%]    rounded-bl-3xl p-2 font-sans">
          <h1 className="text-lg font-semibold font-['gilroy']">{item.name}</h1>
          <p className="text-sm tracking-tighter">{item.desc}</p>
          <div className="flex items-center g-2 shadow-xl">
            <div className="flex items-center px-1 border-2 border-blue-300 rounded-lg font-['gilroy']">
              {<PiBowlFoodDuotone />}
              <h3 className=" text-sm  p-1 mr-2 ">
                {item.isVeg ? (
                  <h3 className="font-semibold text-green-600">Veg Only</h3>
                ) : (
                  <h3 className="text-red-600 font-semibold tracking-tight">
                    Non Veg
                  </h3>
                )}
              </h3>
            </div>
            <div className="flex items-center m-2 border-2 border-blue-300 rounded-lg pl-1 tracking-tight">
              {<TbAirConditioning />}
              <h3 className=" text-sm p-1 mr-2 ">
                {item.isAc ? "AC" : "Non-AC"}
              </h3>
            </div>
          </div>

          <div className="star w-full flex justify-between items-center gap-6 ">
            <div className="border w-[100px] rounded-lg bg-green-500  py-1 px-1 flex justify-center items-center gap-2 mt-3">
              <h2 className="font-medium text-white ">{item.rating} stars</h2>
              {<RiStarSFill className="text-yellow-300" />}
            </div>

            <div className="flex justify-between items-center bg-blue-500 rounded-lg py-1.5 px-3 mt-3 mr-4 ">
              <button className="text-white text-sm flex justify-center items-center gap-1  ">
                {" "}
                Explore {<FaArrowRightLong />}
              </button>
            </div>
          </div>
        </div>
      </div>
))}
      
    </div>
  );
}

export default Hostel;