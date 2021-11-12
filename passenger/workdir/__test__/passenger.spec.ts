import { prefilled } from "./mock";
import task, { person } from '../task/app';

const locations:string[] = [ 'Abuja', 'Benue', 'Katsina', 'Lagos', 'Sambisa'];

/**
 * @function to generate mock passengers
 * @param start
 * @param end
 * @returns an array of passengers starting from the start to the end
 */
const generateMockPassengers = (start:number, end:number,): person[] => {
  const reservation:person[] = [];
  let count:number = 0;
  for (let i=start; i <= end; i++) {
      const person = { name: `passenger${i}`, location: locations[count] };
      reservation.push(person);
      count === 4 ? count = 0 : count++;
  }
  return reservation
}

// interface for key value pair
interface keyValue {
  [propName:string]: number
}

describe("Test for function structure", () => {
  it("Returns an object for even distro", () => {
    const returnValue = task(100, 2);
    expect(returnValue).toHaveProperty('boarded');
    expect(returnValue).toHaveProperty('count');
    expect(returnValue).toHaveProperty('reservation');
  });

  it("checks that the function is called with 2 arguments", () => {
    const length:number = task.length;
    expect(length).toEqual(2);
  });
});

describe("Test for function expected value", () => {
  it("Returns evenly distributed values for boarded", () => {
    const returnValue = task(10, 2);
    const locations = returnValue.boarded.map((location: Record<string, any>) => location.location);

    //get location frequency
    const locationFreq = locations.reduce((tally:keyValue, value:string) => {
      tally[value] = (tally[value] || 0) + 1;
      return tally;
    }, {});

    const evenDistribution = locations.every((location) => locationFreq[location] === 2);
    expect(evenDistribution).toBe(true);
  })
  it("Returns reservation list for uneven distro", () => {
    const returnValue = task(61, 2);
    expect(returnValue.reservation).toHaveLength(1);
  });

  it("boarded does not exceed 50 people for 60 passengers with shuffle of 0", () => {
    const returnValue = task(60, 0);
    expect(returnValue.boarded.length).toBe(50);
  });
});

describe("test for shuffle", () => {
  it("Single shuffle works ", () => {
    const returnValue = task(60, 1);
    expect(returnValue.count).toEqual(2);
    expect(returnValue.boarded).toEqual(generateMockPassengers(51, 60));
  });

  it("first multiple shuffle works ", () => {
    const returnValue = task(105, 2);
    expect(returnValue.count).toBe(3)
    expect(returnValue.boarded).toEqual(generateMockPassengers(101, 105))
  });

  it("second multiple shuffle works ", () => {
    const returnValue = task(155, 3);
    expect(returnValue.count).toBe(4);
    expect(returnValue.boarded).toEqual(generateMockPassengers(151, 155));
  });

  it("third multiple shuffle works ", () => {
    const returnValue = task(205, 4);
    expect(returnValue.count).toBe(5);
    expect(returnValue.boarded).toEqual(generateMockPassengers(201, 205));
  });
});

describe("test for boarded value with passengers of 50 and shuffle 0", () => {
  let passengers = 50;
  let shuffle = 0;

  const expected = task(passengers, shuffle);
  expect(expected.boarded).toStrictEqual(prefilled);
});
