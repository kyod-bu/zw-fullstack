import React, { useState } from 'react'
import './index.css'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div onClick={clickHandle}>跳转</div>
      <p style={{color: 'red'}}>这是一行红色的文字</p>
      <p className="greenText">这是一行绿色的文字</p>
    </div>
  )
}

function clickHandle() {
  if ("undefined" != typeof wx && wx.getSystemInfoSync) {
    wx.navigateTo({
      url: '../log/index?id=1'
    })
  } else {
    location.href = 'log.html'
  }
}

export default Counter
