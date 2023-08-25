"use client";
import { useState,useEffect } from "react";
import './Search.css'
import { BsSearch } from 'react-icons/bs'
import Image from "next/image";
import Logo from './Images/Movieflix.png'
import axios from "axios";
import Link from "next/link";


function Search(){
   let [Data,SetData]=useState("titanic")
   let[Movie,Setmovie]=useState([])
   const [isError,SetError]=useState()
   useEffect(() => {
    console.log(Data)
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://www.omdbapi.com/?i=tt3896198&apikey=fc7a1534&s=${Data}`,

        headers: { }
      };
      
      axios.request(config)
      .then((response) => {
        console.log((response.data));
        Setmovie(response.data.Search)
        SetError(response.data.Error)

      })
      .catch((error) => {
        console.log(error);
      });
      
   }, [Data])
   
    return(
        <>
        <div>
        <div className="lg:flex md:inline" >
            <div className="m-0 ">
                <Image src={Logo} width={100} height={100}

        alt="Picture of the author"/></div>
        <div style={{margin:"auto"}} className=" lg:w-2/4 h-12 sm:w-full border-2 ml-2 border-blue-700 rounded">
            <input onChange={(e)=>{SetData(e.target.value)}} className="mx-3 mt-1 outline-none h-9 w-5/6 " type="text"  placeholder="Enter Movie Name"/>
            <button className=""><BsSearch/></button>
        </div>
        </div>
        {/* <select id="countries" class=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option disabled selected>Choose a Year</option>
  <option value="US">2023</option>
  <option value="CA">2022</option>
  <option value="FR">2021</option>
  <option value="DE">2020</option>
  <option value="DE">2019</option>
  <option value="DE">2018</option>
  <option value="DE">2017</option>
  <option value="DE">2016</option>
  <option value="DE">2015</option>
  <option value="DE">2014</option>
  <option value="DE">2013</option>
  <option value="DE">2014</option>
  <option value="DE">2015</option>
  <option value="DE">2014</option>
</select> */}
        
        {/* card start here */}
        {
          
          Movie ?
        <div className=" container gap-6 m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
         {Movie.map((v,i)=>{
 
            return(
              <>
              <div key={i}
              className=" rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <a href="#!">
                { v.Poster=="N/A"?

                <img
                  class="rounded p-2 w-500 h-500 sm:w-full "
                  src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
                  alt="Poster Not Available" />
                  :
                  <img
                  class="rounded p-2 w-500 h-500 sm:w-full "
                  src={v.Poster}
                  alt="Poster Not Available" />
                }
              </a>
              <div className="p-6">
                <h5
                  class="mb-2 text-xl font-medium leading-tight text-center text-neutral-800 dark:text-neutral-50">
                  {v.Title}
                </h5>
                <p>Year:{v.Year}</p>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center" >
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
                <div className="flex items-center justify-center ">
                <a href={`https://www.google.com/search?q=${v.Title}`} target="_blank"><button className="bg-blue-600 rounded p-2  text-white item w-80 ">See More</button></a>
                </div>
              </div>

            </div>
            </>
            )
          }
         )
        } </div>
          :
          <>
          <div 
          className="rounded-lg h-500 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div className="p-6 m-auto">
            <h5
              class=" font-medium leading-tight text-center mb-40 text-5xl text-red-800 dark:text-neutral-50">
              {isError==null?"Enter Movie Name":isError}
            </h5>
          </div>
        </div>
        
        </>
        }
{/* card end here */}
        </div>
        
<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Movieflix™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Developed by Aeiyan</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

        </>
)

}
export default Search