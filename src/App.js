import { useState } from 'react';
import Statistics from './Components/Statistics/Statistics';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Notification from './Components/Notification/Notification';



export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleCounterFeedBack = name => {

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        alert("нет такой кнопки");

    }
  }

  const commonState = { good, neutral, bad };

  const countTotalFeedback = () => Object.values(commonState).reduce((acc, value) => acc + value);

  const countPositiveFeedbackPercentage = () => Math.round(good / countTotalFeedback() * 100);

  const nameButtons = Object.keys(commonState);




  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions nameButtons={nameButtons} onLeaveFeedback={handleCounterFeedBack} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} percentage={countPositiveFeedbackPercentage()} />
        <Notification message={'No feedback given'} total={countTotalFeedback()} />
      </Section>
    </>
  );
}

