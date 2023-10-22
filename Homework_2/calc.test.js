import Calculator from './calc';

test('Add positive', () => {
    let calc = new Calculator();
    const actual_result = calc.add(10,20)
    console.log(actual_result)
    expect(actual_result).toBe(30)
})
test('Add negativ', () => {
    let calc = new Calculator();
    const actual_result = calc.add(20,-10)
    console.log(actual_result)
    expect(actual_result).toBeGreaterThan(5)
})
test('Add = 0', () => {
    let calc = new Calculator();
    const actual_result = calc.add(10,-10)
    console.log(actual_result)
    expect(actual_result).toEqual(0)
})
test('Substract positive', () => {
    let calc = new Calculator();
    const actual_result = calc.subtract(10,10)
    console.log(actual_result)
    expect(actual_result).toBeLessThan(1)
})
test('Substract negative', () => {
    let calc = new Calculator();
    const actual_result = calc.subtract(10,'a')
    console.log(actual_result)
    expect(actual_result).toBeNaN()
})
test('Substract 0', () => {
    let calc = new Calculator();
    const actual_result = calc.subtract(10,10)
    console.log(actual_result)
    expect(actual_result).toBeGreaterThanOrEqual(0)
})
test('Multiply positive', () => {
    let calc = new Calculator();
    const actual_result = calc.multiply(10,10)
    console.log(actual_result)
    expect(actual_result).toBe(100)
})
test('Multiply negative', () => {
    let calc = new Calculator();
    const actual_result = calc.multiply(-10,5)
    console.log(actual_result)
    expect(-5)
})
test('Multiply 0', () => {
    let calc = new Calculator();
    const actual_result = calc.multiply(100, 0);
    console.log(actual_result);
    expect(actual_result).toBe(false);
});
test('Divide positive', () => {
    let calc = new Calculator();
    const actual_result = calc.divide(100,5)
    console.log(actual_result)
    expect(actual_result).not.toBeNull()
})
test('Divide negative', () => {
    let calc = new Calculator();
    const actual_result = calc.divide(100,200)
    console.log(actual_result)
    expect(actual_result).not.toEqual(1)
})
/
test('Divide 0', () => {
    let calc = new Calculator();
    const actual_result = calc.divide(0,100)
    console.log(actual_result)
    expect(actual_result).toBeUndefined();
})
