import React from "react";

import AssetItem from '../asset-item/asset-item.component';

import './assets-list.styles.scss';

class AssetsList extends React.Component {
    constructor(props) {
        super(props);

        this.assetsListWidth = React.createRef()

        this.state = {
            windowWidth: 0,
            assetsListWidth: 0,
            assetsListPosition: 0,
            resetState: true
        };
    }   

    componentDidMount () {
        const hasWindow = typeof window !== 'undefined';
        const windowWidth = hasWindow ? window.innerWidth : null;

        function teste(){
            setInterval(() => {

                if(this.state.assetsListPosition>this.state.windowWidth || this.state.assetsListPosition===0){
                    this.setState({assetsListPosition: this.state.assetsListWidth*-1,resetState:true})
                }else{
                    this.setState({assetsListPosition: this.state.assetsListPosition+10,resetState: false});
                }
                }, 100)
        }
        this.setState({windowWidth:windowWidth,assetsListWidth: this.assetsListWidth.current.offsetWidth,assetsListPosition: this.assetsListWidth.current.offsetWidth*-1,resetState:true}, teste);
    }

    render() {
        const styles = { 
            position: 'relative',
            display: 'inline-block',
            transform: `translate(${this.state.assetsListPosition}px, 0px)`,
            transition: this.state.resetState ? '': 'transform 100ms ease-in-out'
        };

        return (
            <div className="assets-container">
                <div className="assets-list" style={styles} ref={this.assetsListWidth}>
                    {this.props.assetsList.map((item,idx) => (<AssetItem key={idx} assetItem={item}/>))}
                </div>
            </div>
        );
    }
}
export default AssetsList;