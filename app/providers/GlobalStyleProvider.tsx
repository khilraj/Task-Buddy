"use client";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
  return <GlobalStyles>{children}</GlobalStyles>;
}

const GlobalStyles = styled.div`
  // padding: 1rem;
  display: flex;
  gap: 0rem;
  height: 100%;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    gap: 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

export default GlobalStyleProvider;
