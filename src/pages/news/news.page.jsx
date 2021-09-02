import React from 'react';
import './news.styles.scss';

const News = () => {
    return(
        <div className="page-news">
                <div className="article">
                   <h2> Principais noticias </h2>
                   <div className="page-news">
                        <div className="page-news-text">
                            <span>Cardano Hits New All-Time High as Charles Hoskinson Fights Off Critics</span><br></br>
                            <span>Cardano’s native token, ADA, has hit a new all-time high just a week after overtaking Tether as the industry's third-largest cryptocurrency.</span>
                        </div>
                        <div className="page-news-img">
                            <img className="articles-img" src="https://dynamic-assets.coinbase.com/ef24f6f8f8974c692d7797b1f515b2735e62b507881871fb827dbaa3fa7fe2346ec5764a8c39b7f41e8e481b42d109b2171dddfd31ccd65c542af0c101bf67fc/news_article_images/6513ef449079c1a4936709da32cd04cfaf59f1f6438cd54f8f919e944315f1fd.jpg" alt="article image" loading="lazy"></img>
                        </div>
                   </div>
                   <br></br>
                   <div className="page-news">
                        <div className="page-news-text">
                            <span>Fintech App Titan Adds Actively Managed Crypto Basket</span><br></br>
                            <span>Titan Crypto will feature a basket of cryptocurrencies including BTC, ETH, XLM and ADA.</span>
                        </div>
                        <div className="page-news-img">
                            <img className="articles-img" src="https://dynamic-assets.coinbase.com/ef24f6f8f8974c692d7797b1f515b2735e62b507881871fb827dbaa3fa7fe2346ec5764a8c39b7f41e8e481b42d109b2171dddfd31ccd65c542af0c101bf67fc/news_article_images/6513ef449079c1a4936709da32cd04cfaf59f1f6438cd54f8f919e944315f1fd.jpg" alt="article image" loading="lazy"></img>
                        </div>
                   </div>
                   <br></br>
                   <div className="page-news">
                        <div className="page-news-text">
                            <span>Ethereum Competitor Cardano Rallies As Its Founder Teases Smart Contracts Launch</span><br></br>
                            <span>ADA, the native token of blockchain competitor to Ethereum, Cardano, surged to a two-month high Wednesday morning in anticipation of the network's smart contract capabilit</span>
                        </div>
                        <div className="page-news-img">
                            <img className="articles-img" src="https://dynamic-assets.coinbase.com/f8e60e5134baf21bedfde2481dedd3af828dfbe962556af7ec0509b8ae35f6f093bdee247b07f8da8590986f1a9280f117b938ee350c08c3656293acb4eadb34/news_article_images/5282ca589b6a17df3c876c39902f0b0dcb7c8a40b5a12be4971eae2f04a444e1.jpg" alt="article image" loading="lazy"></img>
                        </div>
                   </div>
                </div>
        </div>
    ) 
}
export default News;
