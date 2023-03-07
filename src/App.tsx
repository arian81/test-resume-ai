import { useState } from "react";
import { ResumeAI } from "./components/ResumeAI";
import { useQueryClient } from "@tanstack/react-query";
import { useIsFetching } from "@tanstack/react-query";
import clsx from "clsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");
  const queryClient = useQueryClient();
  const isFetching = useIsFetching();

  return (
    <div
      className="flex items-center justify-center h-full w-full flex-col gap-5"
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setButtonValue(inputValue);
          queryClient.invalidateQueries(["getResponse"]);
        }
      }}
    >
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
          onClick={() => {
            setButtonValue(inputValue);
            queryClient.invalidateQueries(["getResponse"]);
          }}
          className={clsx([
            "btn btn-primary",
            isFetching && "animate-pulse btn-disabled",
          ])}
        >
          Press me
        </button>
      </div>
      {buttonValue != "" ? <ResumeAI message={buttonValue} /> : <></>}
    </div>
  );
}

export default App;
