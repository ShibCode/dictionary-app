import { useState, useEffect } from "react";

import { useSetWord, useWord } from "../../Contexts/Word";

import { getWord } from "../../Functions/fetchWord";

import "./Definition.css";

const Definition = () => {
  const [audio, setAudio] = useState("");

  const word = useWord();
  const setWord = useSetWord();

  const catchWord = async (input) => {
    const word = await getWord(input);

    setWord(word);
  };

  useEffect(() => {
    for (let i = 0; i < word[0]?.phonetics.length; i++) {
      if (word[0]?.phonetics[i].audio) {
        setAudio(word[0]?.phonetics[i].audio);
        break;
      }
    }
  }, [word]);

  return word ? (
    !word.message ? (
      <div className="definitions">
        <div className="definitions__word">
          <div className="definitions__wordLeft">
            <h1 className="definitions__wordHeading">{word[0].word}</h1>
            <h1 className="definitions__pronunciation">{word[0].phonetic}</h1>
          </div>
          <button
            className="definitions__pronounce"
            onClick={() => {
              new Audio(audio).play();
            }}
          >
            <div className="triangle"></div>
          </button>
        </div>

        {word.map((elem) => {
          return elem.meanings.map((meaning) => {
            return (
              <div className="definitions__info">
                <div className="definitions__partOfSpeech">
                  <span>{meaning.partOfSpeech}</span>{" "}
                  <div className="definitions__line"></div>
                </div>
                <div className="definitions__dictionary">
                  <div className="definitions__meaning">
                    <h1 className="definitions__subHeading">Meaning</h1>

                    <ul className="definitions__definition">
                      {meaning.definitions.map((def) => {
                        return <li>{def.definition}</li>;
                      })}
                    </ul>
                  </div>
                  {meaning.synonyms.length > 0 && (
                    <div className="definitions__otherWords">
                      <h1 className="definitions__subHeading">Synonyms</h1>
                      {meaning.synonyms.map((syn) => {
                        return (
                          <button
                            className="definitions__otherWord"
                            onClick={() => {
                              catchWord(syn);
                            }}
                          >
                            {syn + " "}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {meaning.antonyms.length > 0 && (
                    <div className="definitions__otherWords">
                      <h1 className="definitions__subHeading">Antonyms</h1>
                      {meaning.antonyms.map((ant) => {
                        return (
                          <button
                            className="definitions__otherWord"
                            onClick={() => {
                              catchWord(ant);
                            }}
                          >
                            {ant + " "}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          });
        })}
      </div>
    ) : (
      <div className="definitions__noWord">Word does not exist</div>
    )
  ) : (
    <div className="definitions__noWord">Search a word</div>
  );
};

export default Definition;
