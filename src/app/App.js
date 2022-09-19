import Header from "./componets/Header/Header";
import Body from "./componets/Body/Body";
import Footer from "./componets/Footer/Footer";

// import logo from './logo.svg';
import styles from "./App.module.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <div className={styles.container}>
      <Header title="My Header from props" />
      <Body />
      <Footer title="My Footer from props" />
    </div>
  );
};

export default App;
