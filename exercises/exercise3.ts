import { describe, expect, test } from 'vitest';

describe('Exercise 3', () => {
  // This third exercise will focus on contacting an external API to get some information.
  // The api you'll have to call is "https://fakestoreapi.com/"
  // The tests can be ran using the command "yarn test:ex3".

  test('Get amount of order by products', async () => {
    // Task 6: Create a function which will return for a given product name, the amount of ordered items.
    // The function should return the amount of ordered items by the users.

    const getAmountOfOrderedProduct = async (
      productName: string,
    ): Promise<number> => 0;

    expect(
      await getAmountOfOrderedProduct(
        'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      ),
    ).toEqual(20);
  });

  test('Get total amount for user', () => {
    // Task 7: Create a function which will return the first name, the last name and the total amount of orders for a given user id.
    // The string should be formatted as follows: "firstName lastName: totalAmount€"
    const getTotalAmountForUser = (id: number): string => '';

    expect(getTotalAmountForUser(1)).toEqual('john doe: 3376,74€');
    expect(getTotalAmountForUser(2)).toEqual('david morrison: 283,90€');
    expect(getTotalAmountForUser(5)).toEqual('derek powell: 0,00€');
  });
});
