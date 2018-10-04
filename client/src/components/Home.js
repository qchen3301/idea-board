import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const LandingPageStyle = styled.div`
  font-style: italic;
  letter-spacing: 13px;
  line-height: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`

export default class Home extends Component {
  render() {
    return (
      <LandingPageStyle>
        HERE <br/>
        COMES <br/>
        DAT <br/>
        BOI <br/>
        ( OH SHIT WHADDUP )<br/>
        <Link to='/login'>die communist scum</Link>
        <img src="https://i.imgur.com/HhblAEG.gif" alt="ohshitwaddup"/>
      </LandingPageStyle>
    )
  }
}
