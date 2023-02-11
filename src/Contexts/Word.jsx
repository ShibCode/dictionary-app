import { useState, useContext, createContext } from "react";

const WordContext = createContext();
const SetWordContext = createContext();

export const useWord = () => useContext(WordContext);
export const useSetWord = () => useContext(SetWordContext);

export default function Word({ children }) {
  const [word, setWord] = useState("");

  return (
    <WordContext.Provider value={word}>
      <SetWordContext.Provider value={setWord}>
        {children}
      </SetWordContext.Provider>
    </WordContext.Provider>
  );
}
