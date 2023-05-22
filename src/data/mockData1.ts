import { AddFormType } from '../types/types';

export type HeaderType = {
  key: keyof AddFormType;
  label: string;
};

export type ItemType = AddFormType;

export const mockDataHeaders: HeaderType[] = [
  { key: 'firstName', label: 'First name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'dateOfBirth', label: 'Date of birth' },
  { key: 'startDate', label: 'Start date' },
  { key: 'street', label: 'Street' },
  { key: 'city', label: 'City' },
  { key: 'state', label: 'State' },
  { key: 'zipCode', label: 'Zip code' },
  { key: 'department', label: 'Department' },
];

export const mockData: AddFormType[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1980-01-01'),
    startDate: new Date('2020-01-01'),
    street: '77 Massachusetts Avenue',
    city: 'Boston',
    state: 'KS',
    zipCode: 2139,
    department: 'Legal',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: new Date('1992-05-10'),
    startDate: new Date('2018-06-15'),
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: 10001,
    department: 'Sales',
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    dateOfBirth: new Date('1985-09-20'),
    startDate: new Date('2019-03-12'),
    street: '456 Elm Street',
    city: 'Chicago',
    state: 'IL',
    zipCode: 60610,
    department: 'Marketing',
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    dateOfBirth: new Date('1990-07-15'),
    startDate: new Date('2017-02-28'),
    street: '789 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: 90001,
    department: 'Engineering',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    dateOfBirth: new Date('1982-12-05'),
    startDate: new Date('2022-04-20'),
    street: '321 Pine Road',
    city: 'Seattle',
    state: 'WA',
    zipCode: 98101,
    department: 'Engineering',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    dateOfBirth: new Date('1998-03-25'),
    startDate: new Date('2016-08-10'),
    street: '555 Cedar Lane',
    city: 'San Francisco',
    state: 'CA',
    zipCode: 94102,
    department: 'Sales',
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    dateOfBirth: new Date('1987-06-30'),
    startDate: new Date('2021-09-05'),
    street: '999 Maple Avenue',
    city: 'Miami',
    state: 'FL',
    zipCode: 33101,
    department: 'Sales',
  },
  {
    firstName: 'Sophia',
    lastName: 'Taylor',
    dateOfBirth: new Date('1995-11-18'),
    startDate: new Date('2019-11-30'),
    street: '222 Elmwood Drive',
    city: 'Dallas',
    state: 'TX',
    zipCode: 75201,
    department: 'Engineering',
  },
];
