import reactLogo from './assets/react-logo.png'
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src={reactLogo} width="40px" alt="React logo" />
      </header>
      <main>
        <h1>Reason I am excited to learn React</h1>
        <ol>
          <li>
            React is a popular library, so I will be able to fit in with all the
            coolest devs out there! 😎
          </li>
          <li>
            I am more likely to get a job as a front end developer if I know
            React
          </li>
        </ol>
      </main>
      <footer>
        <small>© 2025 Irimina development. All rights reserved.</small>
      </footer>
    </>
  );
}

export default App;
