export interface Users {
   firstName: string,
   lastName: string,
   department: string,
   age: number,
   isActive: boolean,
}
export const allUsers: Users[] = [
   { firstName: 'Tunde', lastName: 'Samuel', department: 'Supervisor', age: 30, isActive: false },
   { firstName: 'John', lastName: 'Doe', department: 'Supervisor', age: 35, isActive: true },
   { firstName: 'Seun', lastName: 'Mirn', department: 'Developer', age: 42, isActive: false },
   { firstName: 'Usain', lastName: 'Peter', department: 'HR', age: 43, isActive: true },
   { firstName: 'Ernest', lastName: 'Haruna', department: 'Developer', age: 21, isActive: true },
   { firstName: 'Steve', lastName: 'Barner', department: 'Developer', age: 24, isActive: true },
   { firstName: 'Smallwood', lastName: 'Green', department: 'Developer', age: 45, isActive: true },
   { firstName: 'Joseph', lastName: 'Moose', department: 'HR', age: 45, isActive: true },
   { firstName: 'Gabby', lastName: 'Preek', department: 'Cleaner', age: 45, isActive: true },
];


export interface Dept {
   department: string,
}
export const dept: Dept[] = [
   { department: 'Supervisors' },
   { department: 'Developers' },
   { department: 'HR' },
   { department: 'Cleaners' }
]