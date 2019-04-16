import './app.css'

import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { observable } from 'mobx'
import { observer, Provider } from 'mobx-react'

import SplitPane from './react-split/SplitPane'

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

  .Resizer {
        background: #000000;
        opacity: .25;
        z-index: 1;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -moz-background-clip: padding;
        -webkit-background-clip: padding;
        background-clip: padding-box;
    }
 
     .Resizer:hover {
        -webkit-transition: all 2s ease;
        transition: all 2s ease;
        opacity: 1.0;
    }
 
     .Resizer.horizontal {
        height: 11px;
        margin: -5px 0;
        border-top: 5px solid rgba(255, 255, 255, 0);
        border-bottom: 5px solid rgba(255, 255, 255, 0);
        cursor: row-resize;
        width: 100%;
    }
 
    .Resizer.horizontal:hover {
        border-top: 5px solid rgba(0, 0, 0, 0.0);
        border-bottom: 5px solid rgba(0, 0, 0, 0.0);
    }
 
    .Resizer.vertical {
        width: 11px;
        margin: 0 -5px;
        border-left: 5px solid rgba(255, 255, 255, 0);
        border-right: 5px solid rgba(255, 255, 255, 0);
        cursor: col-resize;
    }
 
    .Resizer.vertical:hover {
        border-left: 5px solid rgba(0, 0, 0, 0.0);
        border-right: 5px solid rgba(0, 0, 0, 0.0);
    }
    .Resizer.disabled {
      cursor: not-allowed;
    }
    .Resizer.disabled:hover {
      border-color: transparent;
    }
`

@observer
export default class App extends Component {

  render() {

    return (
      <>
        <GlobalStyle />
        <SplitPane primary="first" split="vertical" minSize={100} maxize={100} defaultSize={100} allowResize={true}>
          <div style={{ background: 'yellow', height: '100%' }}>
            <SplitPane primary="first" split="horizontal" minSize="144px" maxize={100} defaultSize="144px">
              <div style={{ background: 'orange', height: '100%' }}></div>
              <div style={{ background: 'green', height: '100%' }}></div>
            </SplitPane>
          </div>
          <div style={{ background: 'magenta', height: '100%' }}></div>
        </SplitPane>
      </>
    )
  }
}  