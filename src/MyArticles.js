import React, { useState } from 'react';
import './MyArticles.css'; // Import the CSS file for styling

const MyArticle = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleMarkAsRead = () => {
    alert('Marked as read');
  };

  return (
    <div className="my-article">
      <div className="article-header">
        <h2>INRODUCTION TO BINARY TOOL</h2>
        <div className="header-buttons">
          <button onClick={handleCollapse} className="btn">
            {isCollapsed ? 'Expand all' : 'Collapse all'}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <div className="article-content">
          <div className='progressButton'>
            <button onClick={handleMarkAsRead} className='button btn'>Mark as done</button>
          </div>
          <article>
            Welcome to the Binary  Analysis Tool, an indispensable asset for traders of digital options and CFDs. This
            state-of-the-art platform is designed to help you achieve precision in your trades by identifying sniper
            entries in the market. Utilizing cutting-edge technology, binary tool provides advanced market analysis,
            including volatility assessments, pattern sequences, and real-time market signals. Trusted by top options
            traders globally, this tool offers the insights you need to refine your trading strategies and maximize your
            potential for success. Always remember to trade responsibly, as the high risks associated with digital
            options and CFDs can result in significant losses.<br/>
          
            By integrating binary tool into your trading routine, you gain access to unparalleled analytical capabilities
            that set it apart from other tools. Its sophisticated algorithms and real-time data processing ensure that
            you stay ahead of market trends, making it a one-of-a-kind resource for serious traders. Whether you're a
            beginner or an experienced trader, binary tool provides the edge you need to navigate the volatile trading
            landscape with confidence and precision.<br/>
          
        
            The importance of binary tool in your trading journey cannot be overstated. The tool's ability to deliver
            accurate market signals and identify optimal entry points is crucial for executing successful trades. In the
            fast-paced world of digital options and CFDs, having a reliable analysis tool like binary tool can be the
            difference between profit and loss. The platform's advanced features, including comprehensive market
            summaries and in-depth volatility analysis, enable you to make informed decisions quickly and efficiently.<br/>
          
          
            Moreover, binary tool is continually updated with the latest market data, ensuring that you have access to the
            most current information. This continuous flow of data allows you to adapt to changing market conditions
            and adjust your trading strategies accordingly. The tool's user-friendly interface makes it accessible to
            traders of all skill levels, while its advanced functionalities cater to the needs of professional traders
            seeking to enhance their performance.<b/>
          
            In conclusion, the Binary Analysis Tool is a vital component of any successful trading strategy. Its unique
            blend of advanced technology, real-time data, and comprehensive analysis sets it apart as a premier tool in
            the trading world. By utilizing Binary tool , you position yourself to make more informed, precise, and
            profitable trading decisions. Remember, while Binary tool  is a powerful tool, responsible trading practices are
            essential to mitigate the inherent risks associated with digital options and CFDs.
          </article>
        </div>
      )}
    </div>
  );
};

export default MyArticle;
