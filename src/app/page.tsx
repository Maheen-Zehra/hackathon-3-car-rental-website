"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Product } from "../../types/cars";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/querries";
import { urlFor } from "@/sanity/lib/image";







export default function Home() {
  
  
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#block1, #block2, #block3, #block4, #block5"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only add the animate class when the element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    ); // 10% visibility

    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const [product, setProduct] = useState<Product[]>([])


  useEffect(() => {
    async function fetchproduct() {
      const fetchedProduct : Product[] = await client.fetch(allProducts)
      setProduct(fetchedProduct)
    }
    fetchproduct()
  },[])

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      {/* Section 1 - Ads with buttons */}

      <section
        id="block1"
        className="w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center items-center"
      >
        <div className="relative flex flex-col items-center">
          <Image
            src={"/Ads 1.png"}
            alt="Ad 1"
            width={600}
            height={360}
            className="max-w-full"
          />
          <button className="absolute bottom-20 left-2 m-3 bg-blue-600 hover:bg-blue-500 text-white font-normal py-2 px-4 rounded hidden lg:block">
            Rental Car
          </button>
        </div>

        <div className="relative flex flex-col items-center">
          <Image
            src={"/Ads 2.png"}
            alt="Ad 2"
            width={600}
            height={360}
            className="max-w-full"
          />
          <button className="absolute bottom-20 left-2 m-3 bg-blue-400 hover:bg-blue-600 text-white font-normal py-2 px-4 rounded hidden lg:block">
            Rental Car
          </button>
        </div>
      </section>

      <section
        id="block2"
        className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8"
      >
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={500}
          height={132}
          className="max-w-full"
        />

        {/* switch */}
        <div className="w-[60px] h-[60px] bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center">
          <img src="/Swap.png" alt="Switch" className="w-[24px] h-[24px]" />
        </div>

        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={500}
          height={132}
          className="max-w-full"
        />
      </section>

      {/* Popular car  */}
<h1 className="text-2xl font-bold mb-6 text-center">
  Popular car
</h1>
<div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     {product.map((product) => (
      <div
       key={product._id}
       className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">

        <Link href={`/product/${product.slug.current}`}>

       <h1 className="text-2xl font-semibold text-black">{product.name}</h1>
        {product.type}
        <br />
        <br />
        {product.image && (
          <Image
          src={urlFor(product.image).url()}
          alt={product.name}
          width={200}
          height={200}
          className="w-full  object-cover rounded-md"
          />
        )}
        <br />
       <h3 className="text-gray-600  flex gap-11  "> {product.fuelCapacity}  {product.seatingCapacity}   {product.transmission}</h3>
        <br />
        <h2 className="text-lg font-semibold mt-4 flex  gap-10">{product.pricePerDay}
        <Link href={"/detailPage"}>
                <button className="bg-[#3563e9] p-2 h-12 w-24 text-white rounded-md">
                  Rent Now
                </button>
              </Link>
              </h2>
        <p className="text-grey-300 mt-2 line-through">
          {product.originalPrice || null}
          
        </p>
        </Link>
      </div>
     ))}
      </div>

      <section id="block5" className="button w-full text-center">
        <Link href={"/categoryPage"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
        
        
      </section>
    </div>
  );
}

