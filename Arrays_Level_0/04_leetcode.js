// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * 
 */

// Approach 1 : Brute Force

function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
}
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // 5

// Complexity :
// Time : O(n*n)
// Space : O(1)

// Approach 2 (Optimal)
function calculateMaxProfit(prices) {
  let min = prices[0]; // 1st value in array
  let maxProfit = 0; // initial maxProfit is 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }

    // checking if the new min is found then update it
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
}

console.log(calculateMaxProfit(prices)); // 5

// Complexity :
// Time : O(n)
// Space : O(1)
