//Deze moet rond iedere view
import React from "react";
import "./PageWrapper.scss";

interface IPageWrapperProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const PageWrapper = ({ isLoading, children }: IPageWrapperProps) => {
  return (
    <div className="page-wrapper">
      <div className="container__main">
        {isLoading ? <p>...loading</p> : children}
      </div>
    </div>
  );
};
