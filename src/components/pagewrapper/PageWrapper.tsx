//Deze moet rond iedere view
import React from "react";
import "../../App.scss";

interface IPageWrapperProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const PageWrapper = ({ isLoading, children }: IPageWrapperProps) => {
  return (
    <div className="container__main">
      {isLoading ? <p>...loading</p> : children}
    </div>
  );
};
