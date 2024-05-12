
import './App.css';
import Title from './components/Title';
import styles from './mystyle.module.css';

function App() {
 return(
   <div className={styles.welcome}>
    <Title/>
    <img src='https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?cs=srgb&dl=pexels-jplenio-1423600.jpg&fm=jpg'></img>
   </div>
 );
}

export default App;
