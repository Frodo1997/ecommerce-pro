"use client"

import {useState} from "react"
import {products} from "../data/products"
import {translations} from "../i18n/translations"
import ProductCard from "../components/ProductCard"

export default function Page(){

const[cart,setCart]=useState([])
const[search,setSearch]=useState("")
const[language,setLanguage]=useState("es")

const t = translations[language]

const filtered = products.filter(p =>
p.name.toLowerCase().includes(search.toLowerCase())
)

const addToCart = product =>
setCart(prev=>[...prev,product])

const total = cart.reduce((s,i)=>s+i.price,0)

return(

<div className="p-10 bg-gray-100 min-h-screen">

<header className="flex justify-between mb-10">

<h1 className="text-3xl font-bold">
{t.title}
</h1>

<select
value={language}
onChange={(e)=>setLanguage(e.target.value)}
className="border p-2"
>

<option value="es">ES</option>
<option value="en">EN</option>
<option value="pt">PT</option>

</select>

</header>

<input
placeholder={t.search}
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="border p-2 mb-6 w-full"
/>

<div className="grid md:grid-cols-3 gap-6">

{filtered.map(product=>(
<ProductCard
key={product.id}
product={product}
addToCart={addToCart}
t={t}
/>
))}

</div>

<div className="bg-white mt-10 p-6 rounded-xl">

<h2 className="font-bold text-xl">
{t.cart}
</h2>

{cart.map((item,i)=>(
<p key={i}>
{item.name} - ${item.price}
</p>
))}

<p className="font-bold mt-3">
{t.total}: ${total}
</p>

<div className="flex gap-3 mt-4">

<button className="bg-blue-500 text-white p-2 rounded">
Stripe
</button>

<button className="bg-yellow-500 p-2 rounded">
PayPal
</button>

<button className="bg-green-500 text-white p-2 rounded">
Mercado Pago
</button>

</div>

</div>

</div>

)

}
