import type { CompanyInfo, EmployeeInformation, IEmployee, RawEmployee } from './types.spec';

export function mapRawEmployees(rawEmployees: RawEmployee[]): EmployeeInformation[] {
  return rawEmployees.map((e) => {
    const baseEmployee: IEmployee = {
      id: e.id,
      firstName: e['first name'],
      lastName: e['last name'],
      jobTitle: e['job title'],
      email: e.email,
      phone: e.phone,
    };

    return e.isManager ? {
          ...baseEmployee,
          role: 'manager' as const,
          subordinateIds: e.subordinateIds ?? [],
        } : {
          ...baseEmployee,
          role: 'employee' as const,
        };
  });
}

// EX2

export function mapToCompanyInfo(employees: RawEmployee[]): CompanyInfo {


   return null; //{
  //         name: string,
  //         employees: {
  //           CTO: string,
  //           devTeam: {
  //             architect: string,
  //             techLead: string,
  //             developers: string[]
  //           },
  //           analysisTeam: {
  //             mainAnalyst: string,
  //             analysts: string[]
  //           }
  //         }
  //       };
}
    