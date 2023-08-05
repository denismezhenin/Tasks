import { convertor } from './convertor';

const request1 = convertor(
  JSON.stringify({ distance: { unit: 'm', value: 0.5 }, convert_to: 'ft' }),
);

const request2 = convertor(JSON.stringify({ expand: { km: 1000 } }));

const request3 = convertor(
  JSON.stringify({
    distance: { unit: 'm', value: '100' },
    convert_to: 'km',
  }),
);
console.log(
  `Request: "{ distance: { unit: 'm', value: 0.5 }, convert_to: 'ft' }"`,
);
console.log(`response:`, request1);
console.log(`Request to expand units with km: "{ expand: { km: 1000 } }"`);
console.log(`response:`, request2);
console.log(`Request convert to newly added unit km: "{ unit: 'm', value: '100' }, convert_to: 'km' }"`);
console.log(`response:`, request3);
