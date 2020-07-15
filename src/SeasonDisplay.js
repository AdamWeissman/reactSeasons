import React from 'react';


const seasonConfig = {
  summer: {
    text: "let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "burrr",
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // const text = season === 'winter' ? "Burr, it's chilly" : "Let's hit the beach";
  // //const icon = season === 'winter' ? 'snowflake' : 'sun';
  const { text, iconName } = seasonConfig[season]; 

  return (
    <div>
      <h2>{`${iconName} icon`}</h2>
      <h1>{text}</h1>
    </div>
  );
}; 

export default SeasonDisplay;


