import { useState } from "react";
import { InputBox } from "./Components";
import usecurrencyinfo from "./hooks/useCurrencyinfo";
import "./App.css";



function App() {
  const [amount, setamount] = useState(0);
  const [convertedamount, setconvertedamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");

  //   conversion starts from "from"
  // fro USD to INR 
  const currencyinfo = usecurrencyinfo(from);
  //   to takeout all keys from objects
  // You will give keys(object) as option to all user not values so we first extract the keys
  const options = Object.keys(currencyinfo);


  


  // way of swapping 
  const swap = () => {
    // swapping 2 variables
    setfrom(to);
    setto(from);

    setconvertedamount(amount);
    setamount(convertedamount);
  };


// IN THE CONVERT FUNCTION WE HAVE USED OUR CUSTO HOOK THAT IS CALLED usecurrencyinfo

  // Main function to convert
  const convert = () => {
    // Multiply the amount by the value of currency which is stored in currencyinfo
    setconvertedamount(amount * currencyinfo[to]);
    // convert USD to INR
    // 1 usd = 80 rupee
    // so 2 usd wiil be => 2 x 80 = 160 rupess
  };







  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-rep  eat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/2527248/pexels-photo-2527248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
          
            onSubmit={(e) => {
              e.preventDefault();
              // when form will be submitted it should not go to any other url
              convert();
            }}
          >




            {/*From   */}
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyoptions={options}
                // -------------------------------
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={from}
                onamountchange={(amount) => setamount(amount)}
                // we are fetching the values in the input box component
              />






              {/* swap button */}
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>





            {/* TO */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                // ---------------------------------------
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={from}
              />
            </div>






            {/* button -convert */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>






          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
