/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) { 
    
    let Maxprofit = 0;
    
    for(let i=0;i<prices.length;i++){
        
        for(let j=i+1;j<prices.length;j++){
            
            profit = prices[j]-prices[i]
            
            if(profit > Maxprofit ){
                
                Maxprofit = profit
            }
        }
    }
    
    return Maxprofit;
    
};
