import React, { useEffect, useState } from "react";

const Meal = () => {
  const [foods, setFoods] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    const fetchDataFromApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();

      console.log(data.meals);
      setFoods(data.meals);
    };

    fetchDataFromApi();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch}`
    );
    const data = await api.json();
    console.log("search data = ", data.meals);
    setFoods(data.meals);
    setInputSearch("");
  };

  return (
    <>
      <div
        className="my-2 mx-auto"
        style={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      
      >
    <h5 style={{color:"white"}}>Search:</h5>
        <button>
          <form className="text-center" onSubmit={submitHandler}>
            <input
              type="text"
              style={{
                width: "30vw",
                backgroundColor: "#F25912",
                border: "none",
                outline: "none",
                color: "white",
                margin: "none",
              }}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </form>
        </button>
        <button
          type="button"
          onClick={() => setArea("Indian")}
          className="btn btn-light mx-2 "
        >
          Indian
        </button>
        <button
          type="button"
          onClick={() => setArea("British")}
          className="btn btn-light mx-2 "
        >
          British
        </button>
        <button
          type="button"
          onClick={() => setArea("American")}
          className="btn  btn-light mx-2 "
        >
          American
        </button>
        <button
          type="button"
          onClick={() => setArea("Japanese")}
          className="btn btn-light mx-2 "
        >
          Japanese
        </button>
        <button
          type="button"
          onClick={() => setArea("French")}
          className="btn btn-light mx-2"
        >
          French
        </button>
        <button
          type="button"
          onClick={() => setArea("Australian")}
          className="btn btn-light mx-2 "
        >
          Australian
        </button>
        <button
          type="button"
          onClick={() => setArea("chinese")}
          className="btn btn-light mx-2 "
        >
          Chinese
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {foods.map((data) => (
          <div
            key={data.idMeal}
            style={{
              textAlign: "center",
              alignContent: "center",
              padding: "20px",
            }}
          >
            <div>
              <img
                src={data.strMealThumb}
                alt=""
                style={{
                  width: "220px",
                  borderRadius: "10px",
                  border: "2px solid #F87B1B ",
                  margin: "10px",
                }}
              />
            </div>
            <h5>{data.strMeal}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Meal;
