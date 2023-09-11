import React from 'react'

function SingleProduct({productData}) {
    console.log('props',productData)
  return (
    <div className='bg-white w-full h-screen flex flex-col items-center justify-around px-10'>
         <h1 className='text-7xl font-extrabold'>{productData.title}</h1>
        <img src={productData.image} className='w-96 aspect-square'/>
        <div className='flex w-1/2 mx-auto flex-row justify-between items-center'>
            <span className='text-xl font-semibold'>
                price: {productData.price}$
            </span>
            <span className='text-xl font-semibold text-green-500'>
                stars:{productData.rating.rate}   ratings: {productData.rating.count}
            </span>
        </div>
        <p className='text-xl font-semibold'>{productData.description}</p>


    </div>
  )
}

export async function getStaticPaths(){

    try{const res = await fetch('https://fakestoreapi.com/products/')
    const posts = await res.json()
    console.log('paths', posts.length)
    const newArr = posts.slice(0,2)
    const paths = newArr.map(post=>(
        {
            params:{id: post.id.toString()}
        }
    ))
    return{
        paths,
        fallback: 'blocking'
    }

}catch{err=>console.log(err)}

   

}

export async function getStaticProps({params}){
    console.log('id', params.id)
    const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const productData = await res.json()

    return {
        props:{productData},
        revalidate: 60
    }
}

export default SingleProduct