import React, { useState, useSyncExternalStore } from "react";
import { useDispatch, useSelector } from "react-redux";
import { entertainmentActions } from "../../redux-store/entertainment";
import EntertainmentCategory from "./EntertainmentCategory";
import classes from "./EntertainmentPicker.module.scss";
import { getVideos } from "../../redux-store/entertainment";
const EntertainmentPicker = () => {
  const dispatch = useDispatch();

  const [categoryId, setCategoryId] = useState("");
  const categoriesObj = {
    music: {
      id: "/m/04rlf",
      subCategories: {
        electronic: "/m/02lkt",
        "hip-hop": "/m/0glt670",
        raggae: "/m/06cqb",
        pop: "/m/064t9",
        rock: "/m/06by7",
      },
    },
    gaming: {
      id: "/m/0bzvm2",
      subCategories: {},
    },
    sports: {
      id: "/m/06ntj",
      subCategories: {
        "american football": "/m/0jm_",
        soccer: "/m/02vx4",
        boxing: "/m/01cgz",
        mma: "/m/01h7lh",
        tennis: "/m/07bs0",
        "pro wrestling": "/m/066wd",
      },
    },
    humour: {
      id: "/m/09kqc",
      subCategories: {},
    },
    "tv shows": {
      id: "/m/0f2f9",
      subCategories: {},
    },
    fashion: {
      id: "/m/032tl",
      subCategories: {},
    },
    fitness: {
      id: "/m/027x7n",
      subCategories: {},
    },
    technology: {
      id: "/m/07c1v",
      subCategories: {},
    },
    tourism: {
      id: "/m/07bxq",
      subCategories: {},
    },
    vehicles: {
      id: "/m/07yv9",
      subCategories: {},
    },
    business: {
      id: "/m/09s1f",
      subCategories: {},
    },
    health: {
      id: "/m/0kt51",
      subCategories: {},
    },
    military: {
      id: "/m/01h6rj",
      subCategories: {},
    },
    politics: {
      id: "/m/05qt0",
      subCategories: {},
    },
    knowledge: {
      id: "/m/01k8wb",
      subCategories: {},
    },
  };

  const selectCategory = (category) => {
    const solvedCategoryId = categoriesObj[category].id;
    setCategoryId(solvedCategoryId);
  };
  const search = () => {
    dispatch(getVideos(categoryId));
  };
  return (
    <>
      <div className={classes.categories}>
        {Object.keys(categoriesObj).map((categ) => {
          return (
            <EntertainmentCategory
              selectCategory={selectCategory}
              key={categ}
              name={categ}
            ></EntertainmentCategory>
          );
        })}
      </div>
      <button onClick={search}>Finish</button>
    </>
  );
};

export default EntertainmentPicker;
