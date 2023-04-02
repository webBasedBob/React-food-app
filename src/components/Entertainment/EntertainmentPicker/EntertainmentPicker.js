import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import EntertainmentCategory from "./EntertainmentCategory";
import classes from "./EntertainmentPicker.module.scss";
import {
  getVideos,
  entertainmentActions,
} from "../../../redux-store/entertainment";
import Card from "../../UI/Card";
import { useLoaderData } from "react-router-dom";
import Subcategory from "./Subcategory";
const EntertainmentPicker = () => {
  const dispatch = useDispatch();
  const [categoryId, setCategoryId] = useState("");
  const categoriesObj = useLoaderData();
  useEffect(() => {
    dispatch(
      entertainmentActions.setCategories(structuredClone(categoriesObj))
    );
  }, []);
  const selectCategory = (category) => {
    const solvedCategoryId = categoriesObj[category].id;
    setCategoryId(solvedCategoryId);
  };
  const handleSearch = (id) => {
    dispatch(getVideos(id));
  };
  const handleSelectSubcategory = (category) => {
    const solvedCategoryId = categoriesObj[category];
    const normalizedSubcategoryData = [
      {
        text: category,
        id: solvedCategoryId.id,
        image: solvedCategoryId.image,
      },
    ];
    const subcategories = solvedCategoryId.subCategories;
    for (let subcategory in subcategories) {
      const normalizedSubcategory = {
        text: subcategory,
        id: subcategories[subcategory].id,
        image: subcategories[subcategory].image,
      };
      normalizedSubcategoryData.push(normalizedSubcategory);
    }
    setSubcategories(normalizedSubcategoryData);
    setSubcategoriesAreShown(true);
  };
  const [subcategories, setSubcategories] = useState([]);
  const [subcategoriesAreShown, setSubcategoriesAreShown] = useState(false);
  const containerClass = `${classes["categories-container"]} ${
    subcategoriesAreShown ? classes["subcategories-shown"] : ""
  }`;
  return (
    <>
      <div className={classes.container}>
        <div className={classes.title}>
          <p>Pick a category</p>
        </div>
        <div className={containerClass}>
          <div className={classes.panel1}>
            {Object.keys(categoriesObj).map((categ) => {
              return (
                <EntertainmentCategory
                  selectCategory={selectCategory}
                  key={categ}
                  name={categ}
                  handleSelectSubcategory={handleSelectSubcategory}
                ></EntertainmentCategory>
              );
            })}
          </div>
          <div className={classes.panel2}>
            {subcategories.map((subcategory) => {
              return (
                <Subcategory
                  handleSearch={handleSearch}
                  key={subcategory.id}
                  id={subcategory.id}
                  image={subcategory.image}
                  text={subcategory.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EntertainmentPicker;
