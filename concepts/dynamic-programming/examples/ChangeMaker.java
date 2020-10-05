class ChangeMaker {
    public int countChange(int amount, int[] coins) {
        // Create a "table" of amounts to the number of coin combinations that can add up to it
        // This "table" is essentially a map of an amount to the running number of coin combinations that can make it.
        int[] dp = new int[amount + 1];
        
        // Base case - There's one way to make change for 0, giving 0 coins.
        dp[0] = 1; 
        
        // Loop over each coin
        for (int coin : coins) {
            // Loop over each index in our "table"
            for (int i = 0; i <= amount; i++) {
                // Since our "table" is a map of amounts to combination count, remember the following on the next few lines:
                // i is the amount that we're currently figuring out the combination count for
                // dp[x] is the running number of combinations that can make up the the amount "x"
                
                // We only want to check amounts that are smaller than the current coin. 
                // Think about if you can make change for 3 with 5, it's invalid so we just ignore it here.
                if (coin <= i) {
                    // Find out how many ways there are to make the amount at the (current amount - current coin).
                    int waysToMakeLowerValue = dp[i - coin];
                    
                    // We add the number of ways to make the smaller value to the current running total of combination count.
                    // This is because however many ways there are to make the smaller value, there are at least as many ways to make the larger value.
                    dp[i] += waysToMakeLowerValue;
                }
            }
        }
        
        return dp[amount];
    }
}