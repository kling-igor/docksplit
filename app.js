import './app.css'

import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { observable } from 'mobx'
import { observer, Provider } from 'mobx-react'

import SplitPane, { Pane } from './react-split'
// import SplitPane, { Pane } from 'react-split-pane'

const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    /* @import "~@blueprintjs/core/lib/css/blueprint.css"; */
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    overflow: hidden;
    background-color: white;
    height: 100%;
    margin: 0;
    overflow: hidden !important;
  }

  #app {
    /* background: #272822; */
    min-height: 100%;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    padding: 8px;
  }
`

@observer
export default class App extends Component {

  render() {

    return (
      <>
        <GlobalStyle />
        <SplitPane split="vertical" allowResize={true} resizerSize={1}>
          <Pane initialSize="200px" minSize="200px" maxSize="500px">
            <SplitPane split="horizontal" allowResize={true} resizerSize={1}>
              <Pane initialSize="144px" minSize="144px">Pane 1</Pane>
              <Pane minSize="144px" >Pane 2</Pane>
            </SplitPane>
          </Pane>
          <Pane>You can use a Pane component</Pane>
        </SplitPane>

      </>
    )
  }
}


{/* <SplitPane primary="first" split="vertical" minSize={100} maxize={100} defaultSize={100} allowResize={true}>
<div style={{ background: 'yellow', height: '100%' }}>
  <SplitPane primary="first" split="horizontal" minSize="144px" maxize={100} defaultSize="144px">
    <div style={{ background: 'orange', height: '100%' }}></div>
    <div style={{ background: 'green', height: '100%' }}></div>
  </SplitPane>
</div>
<div style={{ background: 'magenta', height: '100%' }}></div>
</SplitPane> */}