
import './App.css';
import Image from './components/Image';
import Products from './components/Products';
import Title from './components/Title';
import styles from './mystyle.module.css';

function App() {
  const products = [{image : "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-jplenio-1423600.jpg&fm=jpg" , name : "Product 1" , price : "100 KD"},{image : "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-jplenio-1423600.jpg&fm=jpg" , name : "Product 2" , price : "50 KD"},{image : "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-jplenio-1423600.jpg&fm=jpg" , name : "Product 3" , price : "20 KD"}]
  
  const productsList = products.map((product)=>  {return <Products image={product.image} name={product.name} price={product.price}/>})

  return(
   <div className={styles.welcome}>
    <Title storedTitle={"Salman Store"} storedDes={"welcome to Salman Store!"}/>
    <Image/>
   
   <div style={{display : "flex" , justifyContent : "space-around" ,  width: "70vw"}}>

   {productsList}
   </div>

    </div>
 );
}

export default App;
