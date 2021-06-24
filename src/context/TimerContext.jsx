import { createContext, useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const TimerContext = createContext({});

export function TimerContextProvider({ children }) {

  const ONE_SECOND = 1000;

  const [time, setTime] = useState('30');
  const [isActive, setIsActive] = useState(false); // se uso este ou o do redux
  const [counter, setCounter] = useState(30); 
  const thirty = 30;
  // const dispatch = useDispatch();

  useEffect(() => {
    const runCountdown = setInterval(() => {
      if (isActive && counter > -1) {
      const secondCounter = counter % thirty;
      const computedSecond = String(secondCounter).length === 1
          ? `0${secondCounter}` : secondCounter;
      setTime(computedSecond);
      setCounter((counter) => counter - 1)
    }
    }, ONE_SECOND);

    return () => clearInterval(runCountdown);
  }, [isActive, counter]) 

  function handlePause() {
    setIsActive(false);
    // disparar uma action que salva o estado atual de time.
  }

  // Após pausar o timer, eu preciso que, 
  // quando passe para a prox. pergunta, 
  // o timer volte pra 30 e recomece a contagem


  function handleStart() {
    setIsActive(true);
  }

  // function runTimer() {
  //   if (isActive && counter > -1) {
  //     const secondCounter = counter % thirty;
  //     const computedSecond = String(secondCounter).length === 1
  //         ? `0${secondCounter}` : secondCounter;
  //     setTime(computedSecond);
  //     setCounter((counter) => counter - 1)
  //   }
  // }


  // function tick() {
  //   dispatch({
  //     type: TICK,
  //   })
    
  //   if (this.props.store.seconds <= 0) {
  //     clearInterval(this.interval);
  //     store.dispatch({
  //       type: STOP_TIMER
  //     });
  //   }
  // }


  // funcionalidades, startTimer, ResetTimer, StopTimer

  return (
    <TimerContext.Provider value={{ time, isActive, handleStart, handlePause }}>
      {children}
    </TimerContext.Provider>
  )

}