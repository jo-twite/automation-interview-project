
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
        cto: string,
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

    export type JobDescription = {
      'cto': "Manages the company"
       'architect': "Designs the architecture of the software"
       'tech lead': "Leads the dev team"
       'software engineer': "Develops the software"
       'main analyst': "Leads the analysis team"
       'analyst': "Analyzes the software needs"
    }

    
   