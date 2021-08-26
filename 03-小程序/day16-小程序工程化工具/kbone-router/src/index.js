import React from 'react'
import ReactDOM from 'react-dom'
// import Counter from './components/counter'
import Router from './components/router'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Router />, container)
}

"undefined" != typeof wx && wx.getSystemInfoSync || createApp()
