"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

export const CoffeeMenu = () => {
  const list = [
    {
      title: "Chocoloate",
      img: "https://img.freepik.com/free-photo/top-view-delicious-coffee-cup-studio_23-2150708018.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "65",
    },
    {
      title: "Brew",
      img: "https://img.freepik.com/free-photo/clean-white-coffee-mug-white-background_125540-3365.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "50",
    },
    {
      title: "Cappuccino",
      img: "https://img.freepik.com/free-psd/coffee-cup-icon-isolated-3d-render-illustration_47987-8773.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "75",
    },
    {
      title: "Americano",
      img: "https://img.freepik.com/free-photo/cup-coffee-with-heart-drawn-foam_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "119",
    },
    {
      title: "Boholano",
      img: "https://img.freepik.com/premium-photo/hot-coffee-cup-table_36358-1163.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "115",
    },
    {
      title: "Bukikdnon",
      img: "https://img.freepik.com/free-photo/coffee-espresso-small-white-ceramic-cup-yellow-vibrant-background_1220-1803.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "75",
    },
    {
      title: "Expresso",
      img: "https://img.freepik.com/free-photo/still-life-relaxing-coffee-cup-terrace_23-2149711966.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "95",
    },
    {
      title: "Cebuano",
      img: "https://img.freepik.com/free-photo/cup-hot-coffe_144627-21760.jpg?size=626&ext=jpg&ga=GA1.2.2127048556.1692458064&semt=sph",
      price: "120",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
          className="m-5"
        >
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[300px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <b>PHP {item.price}.00</b>

            {/* <p className="text-base">{item.price}</p> */}
            <Button variant="bordered" size="sm">
              Add
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
