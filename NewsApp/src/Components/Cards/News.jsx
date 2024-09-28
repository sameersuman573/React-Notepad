import React from "react";
import { useState, useEffect } from "react";
import "./News.css";
const News = () => {
  const [mynews, setmynews] = useState([]);


  const fetchData = async () => {
    let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=bfe86cc3ccdd4010bc84aa642bd44737");
    let data = await response.json();
    console.log(data);
    setmynews(data.articles);
  };

  console.log(mynews);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mainDiv">
        {mynews.map((element) => {
          return (
            <>
              <div class="card" style={{ width: "400px", height:"400px" , marginLeft:"7.2rem", marginTop:"2rem" }}>

                <img src={element.urlToImage == null? "https://www.livemint.com/lm-img/img/2024/03/14/1600x900/000_Par729031--621x414--621x414_1710436491589.jpg":element.urlToImage } class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{element.author == null? "suman":element.author}</h5>
                  <p class="card-text">
 {element.title}
                  </p>
                  <a href={element.url} class="btn btn-primary">
                    Read more
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
