import { describe, expect, test } from 'vitest';

describe('Exercise 2', () => {
  // This second exercise will focus on using the content from the object in company.json file.
  // Like the first one, each test represent an task to implement.
  // The tests can be ran using the command "yarn test:ex2".

  test('Create a new object structure', () => {
    // Task 4: Create a type which will be structured as followed (the content should be acquired from the
    // company.json file):
    // - name: Company name
    // - employees:
    //   - cto: CTO name
    //   - dev team:
    //     - architect: Architect name
    //     - tech lead: Tech lead name
    //     - developers: An array of developer names
    //   - Analysis team:
    //     - main analyst: Main analyst name
    //     - analysts: An array of analyst names

    type CompanyInformation = object;

    const employees = [];

    const company: CompanyInformation = {};

    expect(company.employees.cto).toEqual('Johnson Jackson');
    expect(company.employees.devTeam.techLead).toEqual('Liam Wesson');
    expect(company.employees.analysisTeam.analysts.length).toEqual(10);
  });

  test('Display job description based on employee job title', () => {
    // Task 5: Create a function which will take an employee job title as parameter and return the job description
    // based on the following table:
    //    - cto: "Manages the company"
    //    - architect: "Designs the architecture of the software"
    //    - tech lead: "Leads the dev team"
    //    - software engineer: "Develops the software"
    //    - main analyst: "Leads the analysis team"
    //    - analyst: "Analyzes the software needs

    const employees = [];

    const getJobDescription = (jobTitle: string): string => '';
    const getEmployeeJobDescription = (id: number): string => '';

    expect(getJobDescription('CTO')).toEqual('Manages the company');
    expect(getJobDescription('Architect')).toEqual(
      'Designs the architecture of the software',
    );
    expect(getJobDescription('Tech lead')).toEqual('Leads the dev team');
    expect(getJobDescription('Software engineer')).toEqual(
      'Develops the software',
    );
    expect(getJobDescription('Main analyst')).toEqual(
      'Leads the analysis team',
    );
    expect(getJobDescription('Analyst')).toEqual('Analyzes the software needs');

    expect(getEmployeeJobDescription(1)).toEqual('Manages the company');
    expect(getEmployeeJobDescription(2)).toEqual(
      'Designs the architecture of the software',
    );
    expect(getEmployeeJobDescription(3)).toEqual('Leads the dev team');
    expect(getEmployeeJobDescription(4)).toEqual('Leads the analysis team');
    expect(getEmployeeJobDescription(89)).toEqual(
      'Analyzes the software needs',
    );
    expect(getEmployeeJobDescription(32)).toEqual('Develops the software');
  });
});
