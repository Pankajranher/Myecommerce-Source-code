import { useEffect, useState } from "react";
import Category from "./Category";
import axios from 'axios'

function App() {

  let [finalCategory, setFinalCategory]= useState([])
  let [finalpro,setFinalProduct] = useState([])
  let [catName,setCatname] = useState('')

  let getCategory = () =>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res) => res.data)
    .then((finalRes) =>{
      setFinalCategory(finalRes)
    })
  }

  let getProduct=() => {
      axios.get('https://dummyjson.com/products')
      .then((proRes) =>proRes.data)
      .then((finalRes)=>{
        setFinalProduct(finalRes.products)
      })
  }

  useEffect(()=>{
    getCategory()     // this is function call to getting category
    getProduct()
  },[])                  //fixed

  useEffect(() =>{
    if(catName !== ""){
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((proRes) =>proRes.data)
      .then((finalRes)=>{
      setFinalProduct(finalRes.products)
      })
    }
    },[catName])
    




  let Pitems = finalpro.map((products, index) =>{
    return(
      <ProductItems key={index} pdata = {products}/>
    )
  } )
  return (
   <>
   <div className='py-[40px]'>
    <div className='max-w-[1320px] mx-auto'>
      <h1 className='text-center text-[40px] font-bold mb-[30px]'> Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div>
            <Category finalCategory={finalCategory} setCatname = {setCatname}/>
          </div>
          <div>
            <div className='grid grid-cols-3 gap-5'>
              {
                finalpro.length >=1 ? 
                Pitems
                :
                'Item Not Found '
             }
             
              
            </div>
          </div>
        </div>
    </div>

   </div>
   </>
  );
}

export default App;

function ProductItems({pdata}){
  console.log(pdata)
  return(
    <div className='shadow-lg text-center pb-4'>
      <img src={pdata.thumbnail} alt="Img" className="w-[100] h-[220px]"/>
      <h4>{pdata.title}</h4>
      <b>{pdata.price}</b>
    </div>
  )
}



