import { useQuery } from "react-query";

interface Props {
  message: string;
}

export const ResumeAI: React.FC<Props> = ({ message }) => {
  const getResponse = async () => {
    const myHeaders = new Headers();
    myHeaders.append("content-type", "application/json");

    const raw = JSON.stringify({
      idToken: "",
      sourceId: "hb_jlH1t103baZLZIdY6f",
      history: [
        {
          id: "5-NYn1MhCrbyDTSQTyfYK",
          author: "Human",
          msg: "<start>",
        },
        {
          author: "AI",
          id: "soALM8Q4kDWZNEW-cuWlC",
          msg: "Hello there! I am the helpful PDF file that contains information about Arian Ahmadinejad, a computer science student at McMaster University. Here are some quick facts about Arian: he has a perfect GPA of 4.0, is proficient in multiple programming languages and frameworks, and has experience as a teaching assistant. If you have any questions about Arian's education, skills, or experience, feel free to ask! Here are three examples:\n\n1. What specific courses has Arian taken related to software development?\n2. Can you provide more information about Arian's experience as a teaching assistant?\n3. What design tools is Arian proficient in?",
        },
        {
          id: "wZIqLYoS54dab6lMAz-cs",
          author: "Human",
          msg: message,
        },
      ],
      apiKey: "",
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
    const url =
      "https://corsproxy.io/?" +
      encodeURIComponent(
        "https://chat-pr4yueoqha-ue.a.run.app/talk-to-anything/us-east1/chat"
      );

    const res = await fetch(url, requestOptions);
    return res.json();
  };

  const { data, isLoading, isError, status } = useQuery(
    "getResponse",
    getResponse,
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      retryDelay: 3000000,
    }
  );

  if (isError)
    return (
      <div className="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Failed to fetch</span>
        </div>
      </div>
    );
  //   if (isLoading) return <progress className="progress-primary w-56"></progress>;
  //   console.log(status);
  //   if (data != undefined || data != null) {
  //     return (
  //       <div>
  //         <h1>Response:</h1>
  //         <p>{JSON.stringify(data)}</p>
  //       </div>
  //     );
  //   }
  return <div>{JSON.stringify(data)}</div>;
};
