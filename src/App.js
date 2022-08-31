import "./App.css";
import { Button } from "./stories/Button";
import { Header } from "./stories/Header";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">React x Storybook</header> */}
      <Header
            user={{
              name: "Jane Doe",
            }}
            onLogin={() => {}}
            onLogout={() => {}}
          ></Header>

      <body className="App-body">
        <div className="body-title">Our Storybook Components</div>

        <div className="storybook-components">
          <Button primary label="primary button"></Button>
      
        </div>
      </body>
    </div>
  );
}

export default App;
