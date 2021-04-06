import Card from "./components/Card/Card";

import Search from "./components/Search/Search";
import React, { useState } from "react";

//addictions --have these alphabetical please, and same name as json file
const alarmClock = require('./addictions/alarmClock.json');
const gaming = require('./addictions/gaming.json');
const phoneBed = require('./addictions/phoneBed.json');
const youtube = require('./addictions/youtube.json');

const App = () => {
  const [text, setText] = useState('');
  
  //also alphabetical
  const addictions = [
    alarmClock,
    gaming,
    phoneBed,
    youtube
  ]

  return (
    <div>
      <Search text={text} setText={setText} />
      { addictions && addictions.length > 0 &&
        addictions.map(addiction => {
          if(addiction.title.toLowerCase().includes(text.toLowerCase())) 
            return <Card {...addiction} />
        })
      }
    </div>
  );
}

export default App;
