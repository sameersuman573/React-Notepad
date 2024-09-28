import React, {useState} from "react";
// As it is aprent componenet it contains the functionality output of first two file
import Data from "./Data";
import Header from "./Header";

const ParentComp = () => {
  const [ImageData, setImageData] = useState({ ImageUrls: [], filenames: [] });
//   destructuring to get data 
  // as we have fetched the url and filename data from the Data file now pass it to the Header for search functionailty

  return (
    <div>
      <Data setImageData={setImageData} />
      {/* In data we will pass the newly updated prop that is ImageData */}
      <Header ImageData={ImageData} />
      {/* In header we will pass the data */}
    </div>
  );
};

export default ParentComp;
