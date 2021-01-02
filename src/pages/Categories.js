import React from "react";
import CategoriesList from "../components/CategoriesList";
import styled from "styled-components";

const Categories = () => {
  const CategoriesProductsTitle = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  `;
  return (
    <div>
      <CategoriesProductsTitle>Categories</CategoriesProductsTitle>
      <CategoriesList />
    </div>
  );
};

export default Categories;
