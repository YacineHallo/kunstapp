import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components/pagewrapper/PageWrapper";
import CharacterComponent from "../../components/charactercomponent/CharacterCOmponent";
import { ICharacter, ICharactersResponse } from "../../types/IndexTypes";
import { PaginationButtons } from "../../components/paginationbuttons/PaginationButtons";

export const HomeView = () => {
  const [character, setCharacter] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageNumber, setPageNumber] = useState(1);

  const getCharacters = async (newPage?: number) => {
    setLoading(true);
    try {
      const api = process.env.REACT_APP_API_URL;
      const res = await await fetch(`${api}/?page=${newPage}`);
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
    <>
      <PaginationButtons
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <PageWrapper isLoading={loading}>
        {character.map((perCharacter: JSX.IntrinsicAttributes & ICharacter) => (
          <CharacterComponent {...perCharacter} key={perCharacter.id} />
        ))}{" "}
      </PageWrapper>
    </>
  );
};
