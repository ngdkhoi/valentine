import React from 'react';
import { Button } from './components/button';
import './styles/button.css';
import './styles/app.css';
import bearlove from './imgs/love1.gif';
import eatlove from './imgs/eatlove.webp'

function App() {
  const appCss = ['App-body', 'App-body-reverse']
  const [hidden, setHidden] = React.useState('');
  const [isAccepted, setIsAccepted] = React.useState(false);
  const [size, setSize] = React.useState(20);
  const [acceptContext, setAcceptContext] = React.useState('Obviously, Yes!');
  const [rejectContext, setRejectContext] = React.useState('No, Thanks');
  const [positon, setPosition] = React.useState(appCss[0]);
  const acceptsList = [
    "I've been waiting for it for a long time! 😍",
    "We will be the best couple in the world! 🥰",
    "I'm so happy! 😘",
    "I'm so lucky to have you! 😊",
    "I am the happiest person in the world! 😁",
  ]
  const rejectsList = [
    "Are you sure?",
    "Let's try another better ",
    "It'll be a beautiful day if you accept",
    "Would you like to reconsider?",
    "Hey Beauty, I am till waiting for your click on agreement",
  ]
 
  const onAccept = () => {
    setIsAccepted(true);
  };
  const onReject = () => {
    if (rejectsList.indexOf(rejectContext) + 1 == rejectsList.length) {
      if (positon === appCss[1]) {
        setHidden("hidden");
        setAcceptContext("U can only click here now :))))");
      }
      setPosition(appCss[1]);
      setRejectContext('Catch me if you can :|');
      return;
    }
    else if (rejectsList.includes(rejectContext)) {
      setAcceptContext(acceptsList[acceptsList.indexOf(acceptContext) + 1]);
      setRejectContext(rejectsList[rejectsList.indexOf(rejectContext) + 1]);
    }
    else {
      setAcceptContext(acceptsList[0]);
      setRejectContext(rejectsList[0]);
    }

    setSize(size + 20);
  };
  return (
    <div className="App">
    {isAccepted ? 
      <img style={{height: 100}} src={eatlove} alt="" />
      :
      <div>
        <p>Will you be my valetine?</p>
        <img style={{height: 100}} src={bearlove} alt="" />
      <div className={positon}>
          <Button 
            context={acceptContext}
            size={size}
            color="#00FF33"
            onClick={onAccept}
          />
          <div className={hidden}>
            <Button
              context={rejectContext}
              color="red"
              onClick={onReject}
            />
          </div>
      </div>
      </div>
    }
    </div>
  );
}

export default App;
