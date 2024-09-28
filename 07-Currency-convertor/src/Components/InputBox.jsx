import React, { useId } from "react";
// use-id hook


// BUILDING THE COMPONENT ------------------------------------- 

// Approach - How to use components effectively 
// Making the componenets reusable



function InputBox({
  label,
  amount,
  onamountchange,
  oncurrencychange,
  //   by default - array for taking the type of currency
  currencyoptions = [],
  //   by default selected currency
  selectcurrency = "usd",
  //   user can change amount as well as currency
  amountdisable = false,
  // user can chnage the amount
  currencydisable = false,
  // taking css specification from user
  className = "",
}) {


  // HOOK - To generate unique ID
  const amountinputid = useId();




  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>



      <div className="w-1/2">
      {/* .label feild */}
        <label
          // binding
          htmlFor={amountinputid}
          className="text-black/40 mb-2 inline-block"
        > {label}
        </label>
        {/* input feild */}
        <input
          id={amountinputid}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          //   to check that if a user has not passed if it is passed then we will use a checker
          // changing from string to number format
          onChange={(e) =>
          // if amount change has done if yes then perfrom the onamountchnage function
          // to prevent the values to come in string format we use Number
            onamountchange && onamountchange(Number(e.target.value))
          }
        />
      </div>






      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          //   to check that if a user has not passed if it is passed then we will use a checker
           onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          disabled={currencydisable}
        >
          {/* if we would have given { this bracket} then we would have to return value - /*
           if we want to run loops in jsx then we must use keys 
           Good approach to use keys to prevent the degradindation  {/* } */}

          {currencyoptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>


      </div>
    </div>
  );
}

export default InputBox;
