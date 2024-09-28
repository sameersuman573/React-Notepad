import { createContext } from "react";
import runChat from "../Config/Gemni";
import { useState } from "react";

export const Context = createContext();

// now we will make a context-provider function consisting of all the componenets
const ContextProvider = (Props) => {
  const [input, setInput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  // it is the question that will be displayed on the main component
  const [prevprompt, setprevprompt] = useState([]);
  const [showresult, setshowresult] = useState(false);
  // if its is true it will hide all things such as cards and display results so to display the cards let it be false
  const [loading, setloading] = useState(false);
  // loading will be done when answer be fetched will from api
  const [result, setresult] = useState("");
  // to display the result data on the web page

  const delaypara = (index, nextWord) => {};



  // new chat function
  const newChat = () => {
    setloading(false);
    setshowresult(false);
  };

  // Onsent function when sent arrow will be clicked
  // when question will be asked from google data fetching may teke time so async and await opeartion will be used
  const onSent = async (prompt) => {
    setresult("");
    // to remove the previous response
    setloading(true);
    setshowresult(true);
    let response;
    //  if prompt is not filled in search box
    if (prompt !== undefined) {
      response = await runChat(prompt);
      setrecentprompt(prompt);
    } else {
      setprevprompt((prev) => [...prev, input]);
      setrecentprompt(input);
      response = await runChat(input);
    }

    let responseArray = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "<b/>";
      }
    }
    setresult(newResponse);


    setresult(response);
    setloading(false);
    setInput("");
  };

  const contextValue = {
    prevprompt,
    setprevprompt,
    onSent,
    setrecentprompt,
    recentprompt,
    showresult,
    loading,
    result,
    input,
    setInput,
    newChat,
  };

  return (
    <Context.Provider value={contextValue}>{Props.children}</Context.Provider>
  );
};

export default ContextProvider;
