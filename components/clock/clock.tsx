import styles from './clock.module.css'

export default function Clock() {
    return (
  <div className = {styles.clock}> 
  <h2> Current Date: {new Date().toLocaleDateString()} </h2>
  <h2> Current Time: {new Date().toLocaleTimeString()} </h2>
  </div>
    );
  }
  