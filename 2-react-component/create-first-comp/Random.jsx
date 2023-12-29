import React from 'react'

export default function Random() {
  let number = Math.random()*100;
  return (
    <h1>Random Number is : {Math.round(number)}</h1>
  )
}
