import { describe, expect, test } from 'vitest';

// This first exercise will focus on implementing some function to display information based on the company.json file
// which can be found in the folder "content". Each test represent a task to implement (each one will have its
// own description). The tests can be ran using the command "yarn test:ex1".
// Before adding any code, please read the "README.md" file in the root of the project.

describe('Exercise 1', () => {
  // Task 1: Create a type to save employee information:
  // This type should contain all the employee information with instead of "isManager", a "role" property which can
  // either be "manager" or "employee". If the value is manager, the the type should also have a "subordinateIds"
  // property containing an array of of managed employee id but not if the value is employee.

  test('Create a type to save employee information', () => {
    type EmployeeInformation = object;
    const manager: EmployeeInformation = {};

    const employee: EmployeeInformation = {};

    expect(Object.keys(manager)).toContain('subordinateIds');
    expect(Object.keys(employee)).not.toContain('subordinateIds');
  });

  // Task 2: Return several information about the company employees
  // The employee list should be loaded from company.json file.

  test('Return several information about the company employees', () => {
    const employees = [];

    // All employees
    expect(employees.length).toEqual(24);

    // All non manager employees
    expect(employees.length).toEqual(20);

    // Top manager employees (employees who are not managed by anyone)
    expect(employees.length).toEqual(1);
  });

  // Task 3: Create a function which will take an employee id as parameter and return the amount of subordinates
  // under them. The returned value should take direct and indirect subordinates into account.
  // The employee list should be loaded from company.json file.
  // Tip: You can modify the function signature

  test('Create a function to display amount of subordinates', () => {
    const employees = [];

    const getSubordinatesAmount = (id: number): number => -1;

    expect(getSubordinatesAmount(67)).toEqual(0);
    expect(getSubordinatesAmount(4)).toEqual(10);
    expect(getSubordinatesAmount(2)).toEqual(11);
    expect(getSubordinatesAmount(1)).toEqual(23);
  });
});
