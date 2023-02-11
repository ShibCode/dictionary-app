import { useState, useEffect } from "react";

import { useSetWord, useWord } from "../../Contexts/Word";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { getWord } from "../../Functions/fetchWord";

import "./Input.css";

const Input = () => {
  const setWord = useSetWord();
  const word = useWord();

  const [input, setInput] = useState("");
  const catchWord = async (input) => {
    const word = await getWord(input);

    setWord(word);
  };

  useEffect(() => {
    if (word[0]?.word) {
      setInput(word[0]?.word);
    }

    console.log(word);
  }, [word]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="input">
      <input
        type="text"
        className="input__field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="input__search"
        onClick={() => catchWord(input)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Input;
