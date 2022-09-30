import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react-lite"

class Timer {
  secondsPassed = 0

  constructor() {
    makeAutoObservable(this)
  }

  increaseTimer() {
    this.secondsPassed += 1
  }
}

export default function App() {

  const myTimer = new Timer()
  // A function component wrapped with `observer` will react
  // to any future change in an observable it used before.
  const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)
  
  setInterval(() => {
    myTimer.increaseTimer()
  }, 1000)

  return (
    <TimerView timer={myTimer} />
  )
}


