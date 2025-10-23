import type { EmployeeInformation, IEmployee, RawEmployee } from './types.spec';

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

export function findEmployeeByTitle(employees: RawEmployee[], title: string): RawEmployee | null {
  return employees.find((e => e['job title'] == title)) ?? null;
}

export function fullName(employee: RawEmployee): string {
  return `${employee["first name"]} ${employee["last name"]}`;
}

// EX3

