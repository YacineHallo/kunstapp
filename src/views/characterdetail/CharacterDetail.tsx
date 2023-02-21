//opmerking

import { ICharacter } from "../../types/IndexTypes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";

export const CharacterDetail = (results: ICharacter) => {
  let { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<ICharacter>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCharacter = async () => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL; //deze .env plaats je in de mappenstructuur op rootniveau
      const res = await fetch(`${api}/${id}`);
      const resJson: ICharacter = await res.json();
      console.log("res ", resJson);

      setCharacter(resJson);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <>
      <PageWrapper isLoading={loading}>
        <h1>Hallo {id}</h1>
        {character && (
          <ul>
            <li>{character.image}</li>
            <li>{character.name}</li>
            <li>{character.status}</li>
            <li>{character.species}</li>
            <li>{character.gender}</li>
          </ul>
        )}
      </PageWrapper>
      ;
    </>
  );
};
