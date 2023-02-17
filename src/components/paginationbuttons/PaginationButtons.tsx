//import { useState } from "react";
import "../../App.scss";

//@ts-ignore
export const PaginationButtons = ({ pageNumber, setPageNumber }) => {
  let prev = () => {
    setPageNumber(pageNumber - 1);
  };
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  let next = () => {
    setPageNumber(pageNumber + 1);
  };
  return (
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
  );
};
