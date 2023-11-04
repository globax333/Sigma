import Calculator from './calc';

 // Arange
let calc;
beforeEach(() => {
    calc = new Calculator();
});

test.each([[10,20,30], [20,-10,10], [10,-10,0]])
    ('Add Param test', (a, b, expectedresult) => {
         // Act
    const actual_result = calc.add(a, b);
    console.log(`Result = ${expectedresult}`)
        // Assert
      expect(actual_result).toBe(expectedresult);
});





