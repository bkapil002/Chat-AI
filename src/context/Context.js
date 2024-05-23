import { createContext, useState } from "react";
import run from '../config/gemmi';

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState('');
  const [recent, setRecent] = useState('');
  const [prevPromt, setPrevPromt] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState('');

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResult(prev => prev + nextWord);
    }, 15 * index);
  };

  const newChat = () =>{
    setLoading(false)
    setResult(false)
  }
  const onSent = async (userInput) => {
    setResult('');
    setLoading(true);
    setShowResult(true);

    let response;
    if (userInput !== undefined) {
      response = await run(userInput);
      setPrevPromt(prev => [...prev, userInput]);
    } else {
      setRecent(input);
      setPrevPromt(prev => [...prev, input]);
      response = await run(input);
    }

    let responseArray = response.split('**');
    let newResponse = '';
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += '<br>' + responseArray[i] + '<br>';
      }
    }
    let newResponse2 = newResponse.split('*').join('</br>');
    let newResponseArray = newResponse2.split('');
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord);
    }

    setLoading(false);
    setInput('');
  };

  const contextValue = {
    prevPromt,
    setPrevPromt,
    input,
    setInput,
    recent,
    setRecent,
    onSent,
    showResult,
    result,
    setResult,
    loading,
    setLoading,
    setShowResult,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
