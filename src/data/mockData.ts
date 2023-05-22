// type DataItem = (typeof mockData)[number];

export type ItemType = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  startDate: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  department: string;
};

// export type ItemType = {
//   firstName: string;
//   lastName: string;
//   dateOfBirth: Date;
//   startDate: Date;
//   street: string;
//   city: string;
//   state: string;
//   zipCode: number;
//   department: string;
// };

export type HeaderType = {
  key: keyof ItemType;
  label: string;
};

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

export const mockData: ItemType[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1980-01-01',
    startDate: '2020-01-01',
    street: '77 Massachusetts Avenue',
    city: 'Boston',
    state: 'KS',
    zipCode: '2139',
    department: 'Legal',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1992-05-10',
    startDate: '2018-06-15',
    street: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    department: 'Sales',
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    dateOfBirth: '1985-09-20',
    startDate: '2019-03-12',
    street: '456 Elm Street',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60610',
    department: 'Marketing',
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    dateOfBirth: '1990-07-15',
    startDate: '2017-02-28',
    street: '789 Oak Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    department: 'Marketing',
  },
  {
    firstName: 'William',
    lastName: 'Anderson',
    dateOfBirth: '1982-12-05',
    startDate: '2022-04-20',
    street: '321 Pine Road',
    city: 'Seattle',
    state: 'WA',
    zipCode: '98101',
    department: 'Sales',
  },
  {
    firstName: 'Olivia',
    lastName: 'Wilson',
    dateOfBirth: '1998-03-25',
    startDate: '2016-08-10',
    street: '555 Cedar Lane',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94102',
    department: 'Human Resources',
  },
  {
    firstName: 'James',
    lastName: 'Brown',
    dateOfBirth: '1987-06-30',
    startDate: '2021-09-05',
    street: '999 Maple Avenue',
    city: 'Miami',
    state: 'FL',
    zipCode: '33101',
    department: 'Engineering',
  },
  {
    firstName: 'Sophia',
    lastName: 'Taylor',
    dateOfBirth: '1995-11-18',
    startDate: '2019-11-30',
    street: '222 Elmwood Drive',
    city: 'Dallas',
    state: 'TX',
    zipCode: '75201',
    department: 'Engineering',
  },
];
