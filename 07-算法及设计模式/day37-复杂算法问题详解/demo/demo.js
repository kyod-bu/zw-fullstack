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
