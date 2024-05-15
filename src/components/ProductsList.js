import ProductsCard from './ProductsCard';
import products from '../data/Products';
import Image from './Image';
import Title from './Title';

function ProductList(){

    const productsList = products.map((product)=>  {return <ProductsCard image={product.image} name={product.name} price={product.price}/>})


    return(

        <>
           <Title storedTitle={"Salman Store"} storedDes={"welcome to Salman Store!"}/>
           <Image/>
   
           <div style={{display : "flex" , justifyContent : "space-around" ,  width: "70vw"}}>

           {productsList}
           </div>
        </>
    )
}

export default ProductList