import React from 'react';
import './MainBody.css';
import MyArticle from './MyArticles';
import Blog from './blogs';

// list of blogs
const data = [
    { title: 'Introduction To Deriv', content:  `<p>Deriv is one of the world’s largest online brokers. They offer CFDs(Contracts For Difference) and other derivatives on forex, stocks &indices, cryptocurrencies, commodities, and Synthetic indices. So far in our experience, Deriv offers first class experience to digitally inclined traders, regardless of the size of their accounts. Deriv has been offering trading services for over 25 years now and have grown to over 2.5 million customers globally. They have processed over 187 Million trades and over 46 million dollars worth of withdrawals in just the last month!</p>

<p>They have a total trade turnover of over 15 trillion dollars which in my opinion is amazing. They currently have 21 offices spanning over 16 countries worldwide. They are also vastly licensed and regulated by internationally recognized bodies such as the Labuan financial services authority just to mention one of the many. Deriv has also received global awards such as best forex spreads APAC 2023, Broker of the year 2023, Most trusted broker 2023 and 2024 just to mention a few.</p>
`},
    { title: 'Why We Love Trading On Deriv',
        content: `<ul>
<li>Quick and instant withdrawals straight to your e-wallet with no delay.</li>
<li>Synthetic indices on Deriv MT5 offer high leverage and tight spreads.</li>
<li>You can trade synthetic indices round the clock (24/7/365). These markets never close.</li>
<li>They’re not affected by world events, real-world market, and liquidity risks.</li>
<li>Synthetic indices are generated randomly and also audited for fairness by an independent source.</li>
<li>When trading synthetic indices on Deriv Trader, you’ll know your exact risk at the outset, so no nasty surprises or margin calls.</li>
<li>There are no negative balances.</li>
<li>You can start with low trading capital.</li>
<li>They’re not subject to manipulation or fixing.</li>
<li>They’re ideal for automated trading with continuous quotes and no gaps.</li>
<li>You have the ability to choose a range of synthetic markets with lower or higher risk-reward characteristics.</li>
<li>They’re ideal for technical trading on Deriv MT5, Deriv X, Deriv Go, and cTrader, and can be traded using MetaQuotes MT5 charting software and chart pattern trading.</li>
<li>Synthetic indices are ideal for small and large traders alike with deep liquidity and fast order execution at any time of day or night.</li>
<li>Trading synthetic indices can be regarded as training for understanding real markets, as a first step before graduating to trading more complex instruments like forex and stock indices.</li>
</ul>`},
    { title: 'Introduction To Synthetic Indices', content: `
        <p>Deriv's unique synthetic indices emulate the movements of real-world markets. Powered by a cryptographically secure random number generator, these indices can be traded around the clock(24/7/365) even on weekends, unaffected by global events,news or liquidity and market risks.</p><br/>

<p>The synthetic indicies can further be grouped into three categories mainly:<p/>
<ol>
<li>Continuous Indicies</li>
<li>Jump Indicies</li>
<li>Daily reset indicies<li/>
</ol>
<p><strong>CONTINUOUS INDICIES</strong></p>

<p>These are the 1st type of synthetic indices that were created.</p><br/>

<p>They got the name continuous from the fact that they run 24/7/365</p><br/>

<p>These markets correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75% and 100%</p><br/>

 <p><strong> What is volatility ?</strong></p>

<p>Volatility is the Rate at which the price of the market goes up or down over a particular period.</p>

<p>This is why the markets are called eg Volatility 10, Volatility 25, Volatility 50, Volatility 75, Volatility 100</p>

<p>The numbers in the name represent the constant volatility percentage.</p>

<p>These markets are divided into 2 sets</p>
<ul>
<li>Markets without (1s) ie  Vol 10 – Vol 100</li>

<li>Markets with (1s) ie Vol 10 (1s) –Vol 100 (1s)</li>
</ul>

<p>The difference between these two sets is simple<br/>

(1s) = 1 tick generated every 1 sec<br/>

(1s) = 1tick gen. every 2sec<br/></p>



<p><strong>JUMP INDICIES</strong></p>

<p>These markets are exactly like the continuous indices.</p>

<p>They also correspond to simulated market with constant Volatilities of 10%, 25%, 50%, 75%, 100% </p>

<p>Jump 10, Jump 25, Jump50, Jump 75, Jump 100</p>

<p>The only difference between jump indicies and continuous indicies is one, these markets have an equal probability of an up/down, jump/spike every 20mins. Sample photo below</p>





<p><strong>DAILY RESET INDICIES</strong></p>

<p>These indices replicate markets with bullish and bearish trends with constant volatility. The Bull Market and Bear Market indices start at 00:00 GMT each day, replicating bullish and bearish markets respectively.</p>

<p>
Bullish = uptrend <br/>
Bearish = downtrend
</p>



-- BULL MARKET GRAPH <br/>



N--BEAR MARKET GRAPH` },
    { title: 'Introduction to options', content: `<p>WHAT ARE OPTIONS? Options are financial derivatives that give traders the right, but not the obligation, to buy or sell an underlying asset at a specified price within a set time period (Duration). Deriv offers four types of tradable options and they include Digital Options, Accumulator Options, Vanilla options, and Turbo Options.</p>

<p>WHAT ARE DIGITAL OPTIONS? Digital options allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct. If your prediction is wrong, you lose your stake. Digital options are further divided into what we call TRADE TYPES, there are nine of them but I will simplify them into two in the next topic for ease of understanding. Up/down, Digits, In/out, Reset Call/Reset Put, High/low ticks, Touch/no touch, Asians Only, Ups/Down, Look backs. To make things easier, I will group them into two: DIGITS (UP/DOWN) The rest deal with the upward/downward movement of the chart.</p>
 ` },
    { title: 'WHAT ARE TRADE TYPES AND CONTRACT TYPES?', content: `<p>So far we are covering Digital options and we have established that they are further divided into nine trade types. Trade types are further divided into contract types But not all the trade types are divided into contact types. Below are examples of trade types that have contract types. The trade type (UP/DOWN) is divided into two contact types namely -RISE / FALL HIGHER/LOWER 2. The trade type (DIGITS) is divided into three contact types namely EVEN/ODD OVER/UNDER DIFFERS/MATCHES 3. The trade type (IN/OUT) is divided into two contact types namely ENDS BETWEEN/ENDS OUTSIDE STAYS BETWEEN/GOES OUTSIDE 4. The trade type (LOOKBACKS) is divided into three contact types namely HIGH CLOSE HIGH-LOW CLOSE-LOW</p>

<p>Let's now move foward and look at all trade types with their contract types in detail. UP/DOWN Rise and fall Higher and lower When trading this contract types, we predict whether the market price will rise or fall by the end of the contract. If you select 'Rise', you receive the payout if the exit price is higher than the entry price. If you select 'Fall', you receive the payout if the exit price is lower than the entry price. Something to note, in rise and fall, our entry spot automatically becomes our barrier as you will note in the examples below If the selected condition is not met, your stake is lost. Predict whether the market price will be higher or lower than a price target (the barrier) at the end of the contract. The difference between (RISE/FALL) and (HIGHER/LOWER) is that when trading rise and fall the entry spot automatically becomes the barrier but when trading higher lower we manually input the barrier. If you select 'Higher', you receive the payout if the exit price is above the barrier. If you select 'Lower', you receive the payout if the exit price is below the barrier. If the selected condition is not met or if the exit price is equal to the barrier, your stake is lost.</p>

<p>DIGITS When trading digits, we will be trading the last digit of the last tick Last Tick= current price of the market In the example below the last tick (In red) is 2374.06 so when we are trading digits, we will be trading the last digit which is now 6 Digits are divided into three contract types namely DIGIT MATCHES/DIFFERS DIGIT EVEN/ODD DIGIT OVER/UNDER With this contract type, we will attempt to predict whether the last digit of the last tick will match or differ from your selected prediction. If you select 'Matches', you receive the payout if the last digit of the last tick is the same as your prediction. If you select 'Differs', you receive the payout if the last digit of the last tick is different than your prediction. If the selected condition is not met, your stake is lost. With this contract type, we will attempt to Predict whether the last digit of the last tick will be an even or odd number. If you select 'Even', you receive the payout if the last digit of the last tick is an even number (e.g. 2, 4, 6, 8, 0). If you select 'Odd', you receive the payout if the last digit of the last tick is an odd number (e.g. 1, 3, 5, 7, 9). If the selected condition is not met, your stake is lost. With this contract type we will attempt to Predict whether the last digit of the last tick will be higher or lower than your selected number. If you select 'Over', you receive the payout if the last digit of the last tick is greater than your prediction. If you select 'Under', you receive the payout if the last digit of the last tick is less than your prediction. If the selected condition is not met, your stake is lost.</p>

<p>IN/OUT With this trade type, we will attempt to predict whether the market is going to stay in between the two barriers set or the market is going to close outside the set barriers. This trade type is Further divided into two contract types namely Ends between/ends outside Stays between/ goes outside Predict whether the exit price will end inside or outside two barrier levels at the end of the contract. If you select 'Ends Between', you receive the payout if the exit price remains between the high and low barriers. If you select 'Ends Outside', you receive the payout if the exit price is above the higher barrier or below the low barrier. If the selected condition is not met or if the exit price is equal to either barrier, your stake is lost. Predict whether the price will stay between two barriers or touch either barrier before the end of the contract. If you select 'Stays Between', you receive the payout if the price does not reach the high or low barriers before the end of the contract. If you select 'Goes Outside', you receive the payout if the price touches either the high or low barriers before the end of the contract. If the selected condition is not met, your stake is lost.</p>

<p>TOUCH/ NO TOUCH This trade type works similarly to Higher Lower as they use the same concept but there are only small slight differences. Predict whether the market price will touch or not touch the chosen barrier (target) during the contract period. If you select 'Touch', you receive the payout if the market price touches the barrier at any time during the contract period. If you select 'No Touch', you receive the payout if the market never touches the barrier at any time during the contract period. If the selected condition is not met, your stake is lost. TOUCH NO TOUCH RESET CALL/ RESET PUT Whenever we talk about call and put it simply means Call = is the equivalent of rise (predicting the market will go up) Put = is the equivalent of fall (predicting the market will go down) We will attempt to predict whether the exit price will be higher or lower than either the entry price or the price at reset time (always snapped at half the contract period) or duration used If you select 'Reset Call', you receive the payout if the exit price is higher than either the entry price or the price at reset time. If you select 'Reset Put', you receive the payout if the exit price is lower than either the entry price or the price at reset time. If the selected condition is not met or the exit price is equal to either the entry price or price at reset time, your stake is lost.</p>

<p>RESET CALL RESET PUT ASIANS UP/ ASIANS DOWN Predict whether the exit price (last tick) will be higher or lower than the average of the ticks (WILL BE USED AS BARRIER) during the contract period. If you select 'Asian Up', you will receive the payout if the last tick is higher than the average of all the ticks during the contract period. If you select 'Asian down', you will receive the payout if the last tick is lower than the average of all the ticks during the contract period. If the selected condition is not met or if the last tick is equal to the average of all the ticks, your stake is lost. HIGH TICKS/ LOW TICKS Predict out of the next 5 price ticks will be the highest or the lowest. Either (1,2,3,4,5) If you select 'High Tick', you receive a payout if your selected prediction tick is the highest of the 5 ticks. If you select 'Low Tick', you receive a payout if your selected prediction tick is the lowest of the 5 ticks. If the selected condition is not met, your stake is lost. HIGH TICKS LOW TICKS ONLY UPS/ ONLY DOWNS Predict whether consecutive ticks will rise or fall successively after the entry. If you select 'Only Ups', you receive the payout if all consecutive ticks rise successively after the entry. If you select 'Only Downs', you receive the payout if all consecutive ticks fall successively after the entry. If the selected condition is not met including if the tick is equal to any of the previous ticks, your stake is lost. ONLY UPS ONLY DOWNS</p>

<p>LOOK BACKS This is a much more complicated trade type as it has to do with the high low close of the current candle stick. Lookbacks allow you to earn a payout depending on the optimum high or low achieved by the market during the duration of a contract. When you purchase a 'High-Close' contract, your payout will be equal to the difference between the highest price and the exit price over the duration of the contract multiplied by the multiplier. When you purchase a 'High-Low' contract, your payout will be equal to the difference between the highest price and the lowest price over the duration of the contract multiplied by the multiplier. When you purchase a 'Close-Low' contract, your payout will be equal to the difference between the exit price and the lowest price over the duration of the contract multiplied by the multiplier.</p>


` },
    { title: 'VANILLA OPTIONS', content: `<p>What are vanilla options? Vanilla options allow you to express a bullish or bearish view on an underlying asset by purchasing either a Call or a Put option. You can earn a potentially high payout if your predictions are right within a timed contract and based on market conditions.</p>

<p>How do vanilla options work? Call option: You will receive a payout at the contract's expiry if the final price is higher than the strike price (which is determined at the beginning of the contract period). If the final price is at or below the strike price, you will lose your initial stake (premium). Your net profit will depend on how much the final price is above the predetermined strike price, with the maximum potential gains growing if the price of the underlying asset rises significantly. Your losses are limited to the initial stake required to purchase the call option. Put option: You will receive a payout at the contract's expiry if the final price is lower than the strike price (which is determined at the beginning of the contract period). If the final price is at or above the strike price, you will lose your initial stake (premium). Your net profit will depend on how much the final price is below the predetermined strike price, with the maximum potential gains growing if the price of the underlying asset falls significantly. Your losses are limited to the initial stake required to purchase the put option.</p>

<p>Why traders choose vanilla options: In addition to their simplicity to understand, the main reason traders choose to trade vanilla options is because they offer potentially high profit as they do not have a fixed payout, while losses are strictly limited to the initial stake amount.</p>
` },
    { title: 'TURBO OPTIONS', content: `<p>What are turbo options? Turbo options allow you to earn a potentially high payout if your market predictions are right and if the spot price does not touch or breach the predetermined barrier. P.s : THEY WORK ALMOST THE SAME AS NO TOUCH CONTRACT TYPE How do turbo options work? Up You will receive a payout if the spot price remains above a predetermined barrier throughout the entire trade duration. If the spot price touches or breaches the barrier at any time before the contract expires, the initial stake (premium) is lost. Your net profit will depend on how much the spot price exceeds the barrier, with the maximum potential gains growing if the underlying price rises significantly. Your losses are limited to the initial stake required to purchase the Up turbo option. Down You will receive a payout if the spot price remains below a predetermined barrier throughout the entire trade duration. If the spot price touches or breaches the barrier at any time before the contract expires, the initial stake (premium) is lost. Your net profit will depend on how much the spot price falls below the barrier, with the maximum potential gains growing if the underlying price falls significantly. Your losses are limited to the initial stake required to purchase the Down turbo option.</p>

<p>Why traders choose turbo options Turbo options can be considered a lower-cost or a higher-risk-and-return alternative to vanilla options. Though the odds of the contract expiring worthless can be high (which is when the contract expires without you earning a payout), your loss is strictly limited to your invested stake.</p>` },
    { title: 'ACCUMULATOR OPTIONS', content: `What are accumulator options?


With accumulator options, your payout grows exponentially as long as the current market spot price stays within a set range from the previous spot price. Choose between 1-5% growth rate - a higher growth rate means a narrower range for your price movements and higher risk. With volatility indices, you can also choose the volatility of your market.

Secure your gains with manual or automatic profit-taking. With durations of up to 230 ticks, accumulator options are ideal for those looking for fast-paced, strategic trades while balancing risk and reward.` },
    { title: 'MULTIPLIERS', content: `<p>What are multipliers? Deriv multipliers blend the benefits of leveraged trading with the limited risk of options. This allows you to amplify your potential profits when the market moves in your favor. However, if the market goes against your prediction, your losses are restricted to just your initial stake. Let’s say you predict that the market will go up. And decide to use a stake of 100$ With no multiplier in place Without a multiplier, if the market goes up by 2%, you'll gain 2% * $100 = $2 profit . 2. With use of multiplier With a x500 multiplier, if the market goes up by 2%, you'll gain 2% * $100 * 500 = $1,000 profit . 3. If trade goes against you trading CFDs (Meta trader MT5) With an equivalent $100 position on CFDs, with 1:500 leverage, you risk 2% * $50,000 = $1,000 loss . 4. If market goes against you trading multipliers With a x500 multiplier, if the market goes down 2%, you'll lose only $100. An automatic stop-out kicks in if your loss reaches your stake amount.</p>

<p>Why trade multipliers on Deriv Better Risk Management With multipliers, you can customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation. 2. Increased market exposure You will get more market exposure all this time just limiting risk to your stake amount. You will never lose more than the stake you decide to use.</p>

<p>3. Trade 24/7/365 days a year You can trade multipliers on forex (24/5) and synthetics, which run 24/7, all-year-round. 4. Trade Crash/Boom Indices You can also trade the crash and boom markets, Predict and gain from exciting spikes and dips</p>` }
];

const MainBody = () => {
    return (
        <div className="app-container">
            <header className="mainbodyheader">
                Introduction to Deriv
            </header>
            <nav className="nav">
                <p>Dashboard</p>
                <p>My Courses</p>
                <p>DAT</p>
            </nav>
            <main className="content">
                <MyArticle />
                {/* Dynamically render Blog components */}
                {data.map((item, index) => (
                    <Blog key={index} title={item.title} content={item.content} />
                ))}
            </main>
        </div>
    );
};

export default MainBody;
