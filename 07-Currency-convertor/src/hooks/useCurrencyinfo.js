import { useEffect, useState } from "react";

// CUSTOM HOOKS - DESIGNING -------------------------------
// The custom can use built in hooks



// keep js as its last file name
// whenever you use hooks use prefix "use"
function usecurrencyinfo(currency) {
  // the reason for keeping it empty is that when fetching no data comes so it will return us nothing so that it doesnot crash
  const [data, setdata] = useState({});



// fetching the api and converting into json and performing the asyncronous opeartion using then



  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      // res - response
      .then((res) => res.json())
      // holding the data now
      .then((res) => setdata(res[currency]));
      // .then((res) => setdata(res.currency));
      // currency is the props
      // taking the access by square bracket
      // we could also take access by res.currrency
    console.log(data);
// dependency

  },
   [currency])
  return data
}



// we are returning the method 
export default usecurrencyinfo;












