import { useState } from "react";
import { ResumeAI } from "./components/ResumeAI";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");

  return (
    <div className="flex items-center justify-center h-full w-full flex-col gap-5">
      <div className="flex flex-row gap-5">
        <input
          type="text"
          className="input input-bordered input-primary w-[500px] max-w-3xl"
          placeholder={"What do you want to know about me?"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          pattern="[0-9]*"
        />
        <button
          onClick={() => setButtonValue(inputValue)}
          className="btn btn-primary"
        >
          Press me
        </button>
      </div>
      {/* <h1>{buttonValue}</h1> */}
      {buttonValue != "" ? (
        <ResumeAI message={buttonValue} />
      ) : (
        <div>Nothing</div>
      )}
    </div>
  );
}

export default App;
