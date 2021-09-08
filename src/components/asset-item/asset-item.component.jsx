import React from 'react';
import './asset-item.styles.scss';

const AssetItem = ({assetItem}) => {
    const { assetName, price, priceVariation,priceVariationSignal } = assetItem ;
    return(
        <div className="asset-item">
           <div  className="dist_tick column">
               <div className="my-3 mx-5 has-text-light is-size-6">
                    <div className="dist_price__1olmD">
                    <span className="has-text-light">{assetName}</span>
                    <span className="has-text-light has-text-weight-bold">{price}</span>
                    </div>
                    <div className={priceVariationSignal === '+' ? 'mt-1 has-text-success' : 'mt-1 has-text-success down'} >
                        <span className="icon is-left dist_icon__35B3C">
                            <i className="" data-fa-i2svg="" data-prefix="fas" data-icon="caret-up"><svg className={priceVariationSignal === '+' ? "svg-inline--fa fa-caret-up fa-w-10" : "svg-inline--fa fa-caret-down fa-w-10"} data-fa-i2svg="" data-prefix="fas" data-icon="caret-up" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path></svg>
                            </i>
                        </span>
                        <span>{priceVariation}</span>
                       
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AssetItem;
