import { sortIncomingData } from './data-sorter';

const mockedData1 = JSON.stringify({
  data: [
    { user: 'mike@mail.com', rating: 20, disabled: false },
    { user: 'greg@mail.com', rating: 14, disabled: false },
    { user: 'john@mail.com', rating: 25, disabled: true },
  ],
  condition: { exclude: [{ disabled: true }], sort_by: ['rating'] },
});
const mockedData2 = JSON.stringify({
  data: [
    { user: 'mike@mail.com', rating: 20, disabled: false },
    { user: 'greg@mail.com', rating: 14, disabled: false },
    { user: 'john@mail.com', rating: 25, disabled: true },
  ],
  condition: { exclude: [{ rating: 14 }], sort_by: ['rating'] },
});
const mockedData3 = JSON.stringify({
  data: [
    { name: 'John', email: 'john2@mail.com' },
    { name: 'John', email: 'john1@mail.com' },
    { name: 'Jane', email: 'jane@mail.com' },
  ],
  condition: { include: [{ name: 'John' }], sort_by: ['email'] },
});
const mockedData4 = JSON.stringify({
  data: [
    { name: 'John', email: 'john2@mail.com' },
    { name: 'John', email: 'john1@mail.com' },
    { name: 'Jane', email: 'jane@mail.com' },
  ],
  condition: { sort_by: ['name'] },
});

const request1 = sortIncomingData(mockedData1);
const request2 = sortIncomingData(mockedData2);
const request3 = sortIncomingData(mockedData3);
const request4 = sortIncomingData(mockedData4);

console.log(`Request: ${mockedData1}`);
console.log(`response:`, request1);
console.log(`Request: ${mockedData2}`);
console.log(`response:`, request2);
console.log(`Request: ${mockedData3}`);
console.log(`response:`, request3);
console.log(`Request: ${mockedData4}`);
console.log(`response:`, request4);
