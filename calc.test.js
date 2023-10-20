import Calculator from './calc';

test('Devide func', () => {
    let calc = new Calculator();
    const result = calc.divide(10, 5);

      console.log(`${result}`)
      expect(result).toBe(2);
})