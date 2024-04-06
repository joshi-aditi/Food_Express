import { sum } from "../sum";

test("sum function should return sum of two given numbers",()=>{
    const result = sum(3,4);

    //Assertion : 
    expect(result).toBe(7);
});