
import './App.css';
import ProductList from './components/ProductsList';

import styles from './mystyle.module.css';


function App() {

 
  return(
   <div className={styles.welcome}>
    
      <ProductList/>

    </div>
 );
}

export default App;
