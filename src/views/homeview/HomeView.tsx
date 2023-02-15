import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
//import { Pagination } from "../../components/paginationComponent/PaginationComponent";
import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";

export const HomeView = () => {
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);
  type prev = number | null;
  type next = number | null;

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let prev = () => {
    if (pageNumber! < 1) setPageNumber(pageNumber - 1);
  };
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let next = () => {
    setPageNumber(pageNumber + 1);
  };

  const getCharacters = async (newPage?: number) => {
    setLoading(true);
    try {
      const api = `https://rickandmortyapi.com/api/character/?page=${newPage}`;
      const res = await await fetch(`${api}`);
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
    getCharacters(pageNumber);
  }, [pageNumber]);

  return (
    <PageWrapper isLoading={loading}>
      <div className="container__main">
        {character.map((perCharacter: JSX.IntrinsicAttributes & ICharacter) => (
          <CharacterComponent {...perCharacter} key={perCharacter.id} />
        ))}

        <button onClick={prev} className="button-pagination">
          Prev
        </button>

        <button onClick={next} className="button-pagination">
          Next
        </button>
      </div>
    </PageWrapper>
  );
};
