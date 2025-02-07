"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import Sidebar from "../components/Sidebar";

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full flex">
      {/* sidebar  */}
      <div className="first hidden sm:flex w-[20%]">
        <Sidebar />
      </div>

      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image
            src={"/Pick - Up.png"}
            alt=""
            width={582}
            height={132}
            className="w-[200px] md:w-[270px] lg:w-[582px]"
          />
          <Link href={"#"}>
            <Image
              src={"/Switch.png"}
              alt=""
              width={60}
              height={60}
              className="w-[80px]"
            />
          </Link>
          <Image
            src={"/Drop - Off.png"}
            alt=""
            width={582}
            height={132}
            className=" w-[200px] md:w-[270px] lg:w-[582px]"
          />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  Koenigsegg{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car1.png"} alt="" width={220} height={68} />
                <Image src={"/spec1.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $99.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  NissanGT - R{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sport</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car2.png"} alt="" width={220} height={68} />
                <Image src={"/spec2.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $100.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  Rolls-Royce{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Sedan</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car3.png"} alt="" width={220} height={68} />
                <Image src={"/spec3.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $96.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Rush{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car5.png"} alt="" width={220} height={68} />
                <Image src={"/spec5.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $72.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $80.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  CR - V{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car6.png"} alt="" width={220} height={68} />
                <Image src={"/spec6.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  All New Terios{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car7.png"} alt="" width={220} height={68} />
                <Image src={"/spec7.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $74.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  MG ZX Exclusive{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Hatchback</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car9.png"} alt="" width={220} height={68} />
                <Image src={"/spec9.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $76.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                  <br />
                  <span className="text-sm font-medium text-gray-500 line-through">
                    $80.00
                  </span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  NEW MG ZS{" "}
                  <Image src={"/heart 2.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>SUV</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car10.png"} alt="" width={220} height={68} />
                <Image src={"/spec10.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $80.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="w-full flex items-center justify-between">
                  MG ZX Excite{" "}
                  <Image src={"/heart.png"} alt="" width={20} height={20} />
                </CardTitle>
                <CardDescription>Hatchback</CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                <Image src={"/car11.png"} alt="" width={220} height={68} />
                <Image src={"/spec11.png"} alt="" width={256} height={24} />
              </CardContent>
              <CardFooter className="w-full flex items-center justify-between">
                <p className="text-2xl font-semibold leading-none tracking-tight">
                  $74.00/
                  <span className="text-sm font-medium text-gray-500">day</span>
                </p>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563e9] p-2 text-white rounded-md">
                    Rent Now
                  </button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}