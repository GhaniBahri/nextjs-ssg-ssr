import Link from "next/link";
import { useEffect, useState } from "react";

// URL: http://localhost:3000/products
export default function Products({ products }) {
  return (
    <main>
      <h1 className="text-3xl">All products</h1>
      <div className="flex flex-row items-center justify-evenly w-full overflow-x-hidden flex-wrap h-screen bg-white">{products.map((product) => (
        
          <Link key={product.id} className="hover:scale-110 w-64 h-80 shadow-xl p-3 overflow-hidden" href={`/products/${product.id}`}>
            <img src={product.image} className="object-cover h-4/5 "/>
            <h1 className="text-lg">{product.title}</h1>
          </Link>
      ))}</div>
    </main>
  );
}

export async function getServerSideProps (){
    const res = await fetch('https://fakestoreapi.com/products')
    const products = await res.json()
    return {props:{ products}}
}