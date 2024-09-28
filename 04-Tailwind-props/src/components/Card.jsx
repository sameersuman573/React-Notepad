import React from "react";

// making the card component so it can used multiple times
// the props tolds the function to take the properties of username and btntext and display or perform the function 
function Card({ username, btnText }) {
  // console.log(username);

  return (
    // card making

    // upper-section
    <div className="relative h-[400px] w-[300px] rounded-md">

      <img
        src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />

      {/* fading effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* lower-section */}
      <div className="absolute bottom-4 left-4 text-left">
      {/* do diplay the username */}
        <h1 className="text-lg font-semibold text-blue">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
              {/* do diplay the btntext */}
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText || "come on" } →
        </button>
      </div>

    </div>
  );
}

export default Card;
