import { describe, expect, test } from 'vitest';

import {employees as employeeList} from './content/company.json';
import {mapRawEmployees} from './helpers.ts';
import type { EmployeeInformation as EmployeeInfo, RawEmployee } from './types.spec.ts';




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

    type EmployeeInformation = EmployeeInfo;

    const manager: EmployeeInformation = {
      id: 1,
      firstName: "jo",
      lastName: "nathan",
      jobTitle: "tester",
      email: "jo@gaming1.com",
      phone: "0481529573",
      role: 'manager',
      subordinateIds: [3, 6, 9]
    };

    const employee: EmployeeInformation = {
      id: 2,
      firstName: "emilie",
      lastName: "jolie",
      jobTitle: "singer",
      email: "emilie@gaming1.com",
      phone: "0492153533",
      role: 'employee'
    };

    expect(Object.keys(manager)).toContain('subordinateIds');
    expect(Object.keys(employee)).not.toContain('subordinateIds');
  });

  // Task 2: Return several information about the company employees
  // The employee list should be loaded from company.json file.

  test('Return several information about the company employees', () => {

    const fetchedRawEmployees: RawEmployee[] = employeeList;

    const baseEmployees: EmployeeInfo[] = mapRawEmployees(fetchedRawEmployees);

    let employees: EmployeeInfo[] = baseEmployees;

    // All employees
    expect(employees.length).toEqual(24);

    employees = baseEmployees.filter((e) => e.role === 'employee');
    // All non manager employees
    expect(employees.length).toEqual(20);

    const subordinateIds = baseEmployees
    .filter((e): e is Extract<EmployeeInfo, { role: 'manager' }> => e.role === 'manager')
    .flatMap((m) => m.subordinateIds);
    employees = baseEmployees.filter(
    (e) => e.role === 'manager' && !subordinateIds.includes(e.id)
  );

    // Top manager employees (employees who are not managed by anyone)
    expect(employees.length).toEqual(1);
  });

  // Task 3: Create a function which will take an employee id as parameter and return the amount of subordinates
  // under them. The returned value should take direct and indirect subordinates into account.
  // The employee list should be loaded from company.json file.
  // Tip: You can modify the function signature

  test('Create a function to display amount of subordinates', () => {

    const employees: RawEmployee[] = employeeList;

    const getSubordinatesAmount = (id: number): number => {
    const emp = employees.find(e => e.id === id);
    if (!emp?.subordinateIds) {
      return 0;
    }
    return emp.subordinateIds.length + emp.subordinateIds.map(getSubordinatesAmount).reduce((a, b) => a + b, 0);
  };
    expect(getSubordinatesAmount(67)).toEqual(0);
    expect(getSubordinatesAmount(4)).toEqual(10);
    expect(getSubordinatesAmount(2)).toEqual(11);
    expect(getSubordinatesAmount(1)).toEqual(23);
  });
});
