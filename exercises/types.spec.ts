
export type IEmployee = {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
};

export type EmployeeInformation =
  | (IEmployee & { role: 'manager'; subordinateIds: number[] })
  | (IEmployee & { role: 'employee' });


export type RawEmployee = {
  id: number;
  'first name': string;
  'last name': string;
  'job title': string;
  email: string;
  phone: string;
  isManager: boolean;
  subordinateIds?: number[];
};


// EX 2

export type CompanyInfo = {
      name: string,
      employees: {
        CTO: string,
        devTeam: {
          architect: string,
          techLead: string,
          developers: string[]
        },
        analysisTeam: {
          mainAnalyst: string,
          analysts: string[]
        }
      }
    };

    