/**
    Challenge


Varun has got a date after a long time and wants to look his best for his partner. He decides to go shopping to buy a new t-shirt and a pair of jeans but since it is the month’s end, he has a budget of only B rupees. He wants to spend the maximum money on jeans and t-shirt combo within the given budget. The problem is that he is good with his cloth choices but not with the calculations and asks for your help. 

Varun has selected T t-shirts and J jeans. He provides you the prices of each of them and you have to determine the maximum money he can spend shopping. If it is not possible to buy the jeans and t-shirt with the given budget, you can tell him -1.

Example:
1. 
Budget, B = 20
Jeans, Ji = [ 10, 5, 8 ]
T-shirts, Ti = [ 11, 7, 4 ]

The maximum money he can spend is 19 by buying the J3 jeans along with the T1 t-shirt.

2.
Budget, B = 10
Jeans, Ji = [ 8 , 9 , 10 ]
T-shirt, Ti = [ 4, 6, 3 ]

With the given budget, it is not possible for Varun to buy the jeans and t-shirt both. Thus, the maximum money he can spend is -1.

Can you help him shop and get ready for his date?


Input Format
The first line of input consists of the Budget, B
The second line of input consists of the number of jeans (J) and number of t-shirts (T) space-separately.
The third line of input consists of the J space-separated jeans prices, Ji
The fourth line of input consists of the T space-separated t-shirt prices, Ti

Constraints
1<= B <=10^6
1<= J, T <=1000
1<= Ji, Ti =10^6


Output Format
Print the maximum money Varun can spend shopping.

 */

/**
 *
 * @param {number} budget
 * @param [number] jeans
 * @param [number] tShirts
 * @returns {number}
 */
const maxSpend = (budget, jeans, tShirts) => {
  const maxOfAll = Math.max(Math.max(...jeans), Math.max(...tShirts));
  const remainingAmount = budget - maxOfAll;
  const allPrices = [...tShirts, ...jeans];
  const dict = new Map();
  allPrices.forEach((price) =>
    dict.set(
      remainingAmount - price < 0
        ? Number.POSITIVE_INFINITY
        : remainingAmount - price,
      price
    )
  );
  const minAmount = Math.min(...dict.keys());

  return maxOfAll + dict.get(minAmount);
};

const budget = 20;
const jeans = [10, 5, 8];
const tShirts = [11, 7, 4];
const result = maxSpend(budget, jeans, tShirts);
console.log(result);
