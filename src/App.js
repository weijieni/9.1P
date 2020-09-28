import React from "react";
import './App.css';
import Header from "./header";
import Menu from "./Menu";
import Footer from "./Footer";
import { Image } from 'semantic-ui-react'
import { Container} from "semantic-ui-react";


  export default function App ({ children }) {
    return (
      <Container style={{ margin: 20 }}>
        <Menu />
        <Image src = {require('./img/banner.jpg')} fluid style = {{height: 300}}/>
        <div className="App-header">
          <Header 
            text = "Featured Requesters"
          />
        </div>  
        <div style = {{ pading: 20, marginTop: 20, marginLeft: 115 }}>
          {children}
        </div>
        <Footer />
    </Container>

    )
  }
