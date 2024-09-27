import React from 'react'

export default function WaterTracker(props) {
    console.log(props.glasses)
  return (
    <div>
        <h1>You Drank {props.glasses} Glass of Water Today</h1>
        <div className='glass'>
            <div className={props.glasses >= 8 ? 'filled' : ''}></div>
            <div className={props.glasses >= 7 ? 'filled' : ''}></div>
            <div className={props.glasses >= 6 ? 'filled' : ''}></div>
            <div className={props.glasses >= 5 ? 'filled' : ''}></div>
            <div className={props.glasses >= 4 ? 'filled' : ''}></div>
            <div className={props.glasses >= 3 ? 'filled' : ''}></div>
            <div className={props.glasses >= 2 ? 'filled' : ''}></div>
            <div className={props.glasses >= 1 ? 'filled' : ''}></div>
        </div>
    </div>
  )
}
