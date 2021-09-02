import './App.css';

import AssetsList from './components/assetsList/assets-list.component';
import MenuList from './components/menu-list/menu-list.component';
import Content from './components/content/content.component';

import News from './pages/news/news.page';
import Charts from './pages/charts/charts.page';

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page:'news',
      assetsList: [
        {assetName: "DIA", price: "$364.12", priceVariation: "0.11% ( $0.51 )"},
        {assetName: "ADA", price: "$314.12", priceVariation: "0.12% ( $0.52 )"},
        {assetName: "BTC", price: "$324.12", priceVariation: "0.13% ( $0.53 )"},
        {assetName: "MATIC", price: "$334.12", priceVariation: "0.14% ( $0.54 )"},
        {assetName: "BOLD", price: "$344.12", priceVariation: "0.15% ( $0.55 )"}
      ]
    };
  }

  handleClick = ( evt ) => {
    evt.stopPropagation();

    const target =  evt.currentTarget.hash.split('#')[1];
    if( target !== this.state.page){
      this.setState({page: target})
    }
   
  }

  render() {
          return (
            <div className="App">
              <header className="App-header">
                <AssetsList assetsList={this.state.assetsList}/>
                <MenuList handleClick={this.handleClick.bind(this)} />
                <Content />
                {this.state.page === 'chart' ? <Charts /> : <News />}
                
              </header>
            </div>
          );
  }
}


export default App;