import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";

export const CharacterDetail = (results: ICharacter) => {
  let { id, image, name, status, species, gender } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [character, setCharacter] = useState<ICharacter[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCharacter = async () => {
    setLoading(true);
    try {
      const api = `https://rickandmortyapi.com/api/character/${id}`;
      const res = await fetch(`${api}`);
      const resJson: ICharactersResponse = await res.json();
      console.log("res ", resJson);
      //@ts-ignore
      setCharacter(resJson.results);
    } catch (e) {
      console.log("oeps   ", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);
  return (
    <>
      <PageWrapper isLoading={loading}>
        <h1>Hallo {id}</h1>
        <ul>
          <li>{image}</li>
          <li>{name}</li>
          <li>{status}</li>
          <li>{species}</li>
          <li>{gender}</li>
        </ul>
      </PageWrapper>
      ;
    </>
  );
};
