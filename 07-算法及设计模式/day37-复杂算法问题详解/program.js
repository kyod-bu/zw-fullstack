// 贪心算法
var maxProfit = function(prices) {
    var count = 0;
    for(var i=1; i<prices.length; i++) {
        var price = prices[i];
        var prevPrice = prices[i - 1];
        if (price > prevPrice) {
            count += price - prevPrice;
        }
    }
    return count;
}

function canJump(nums) {
    var length = nums.length;
    var maxPos = 0;
    for(var i=0; i<length; i++) {
        if (i <= maxPos) {
            maxPos = Math.max(maxPos, i + nums[i]);
            if (maxPos >= length -1) {
                return true;
            }
        }
    }
    return false;
}

function jumpSteps(nums) {
    var length = nums.length;
    var end = 0;
    var maxPosition = 0;
    var steps = 0;
    for(var i=0; i<length-1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i == end) {
            end = maxPosition;
            steps++;
        }
    }
    return steps;
}

// 动态规划
var minCostClimbingStairs = function(cost) {
    var dpK1 = 0;
    var dpK2 = 0;
    for(var i=0; i<cost.length; i++) {
        var curr = cost[i] + Math.min(dpK1, dpK2);
        dpK1 = dpK2;
        dpK2 = curr;
    }
    return Math.min(dpK1, dpK2);
}

// var fab = function(i) {
//     if (i === 1 || i === 2) {
//         return 1;
//     }
//     return fab(i - 2) + fab(i - 1);
// }

var cache = {};
var fab = function(i) {
    if (cache[i]) {
        return cache[i]
    }
    if (i === 1 || i === 2) {
        return 1;
    }
    const result = fab(i - 2) + fab(i - 1);
    cache[i] = result;
    return result;
}

var fab = function(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    var prev = 1, curr = 1;
    for(var i=3; i<=n; i++) {
        var sum = prev + curr;
        prev = curr;
        curr = sum;
    }
    return curr;
}

var coinChange = function(coins, amount) {
    var max = amount + 1;
    var dp = new Array(amount + 1).fill(max);
    dp[0] = 0;
    for(var i=1; i<=amount; i++) {
        for(var j=0; j<coins.length; j++) {
            if (coins[j] <= i) {
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}

function maxProfit(prices, fee) {
    var cash = 0, hold = -prices[0];
    for(var i=1; i<prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);
    }
    return cash;
}
