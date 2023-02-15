import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import "../../components/paginationbuttons/PaginationButtons.scss";
//import { Pagination } from "../../components/paginationComponent/PaginationComponent";
import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";

export const HomeView = () => {
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);
  // type prev = number | null;
  // type next = number | null;

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let prev = () => {
    setPageNumber(pageNumber - 1);
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
        <div className="pagination">
          {pageNumber > 1 && (
            <button className="button-pagination" onClick={prev}>
              Prev
            </button>
          )}

          <button onClick={next} className="button-pagination">
            Next
          </button>
        </div>
      </div>
    </PageWrapper>
  );
};
