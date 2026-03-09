const Validator = require('../src');

describe('Validator', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('валидирует корректные имена', () => {
    expect(validator.validateUsername('john_doe')).toBe(true);
    expect(validator.validateUsername('user-name')).toBe(true);
    expect(validator.validateUsername('alex')).toBe(true);
    expect(validator.validateUsername('test123')).toBe(true); // 3 цифры в конце — допустимо
    expect(validator.validateUsername('my_user-name')).toBe(true);
    expect(validator.validateUsername('a-b_c')).toBe(true);
    expect(validator.validateUsername('start123')).toBe(true); // цифры в конце — допустимо
  });

  test('отклоняет имена с недопустимыми символами', () => {
    expect(() => validator.validateUsername('john@doe')).toThrow('Недопустимые символы в имени пользователя');
    expect(() => validator.validateUsername('user#name')).toThrow('Недопустимые символы в имени пользователя');
    expect(() => validator.validateUsername('ivan.ivanov')).toThrow('Недопустимые символы в имени пользователя');
    expect(() => validator.validateUsername('name space')).toThrow('Недопустимые символы в имени пользователя');
  });

  test('отклоняет имена, начинающиеся с цифры, тире или подчёркивания', () => {
    expect(() => validator.validateUsername('1john')).toThrow('Имя не может начинаться с цифры, тире или подчёркивания');
    expect(() => validator.validateUsername('-user')).toThrow('Имя не может начинаться с цифры, тире или подчёркивания');
    expect(() => validator.validateUsername('_alex')).toThrow('Имя не может начинаться с цифры, тире или подчёркивания');
  });

  test('отклоняет имена, заканчивающиеся тире или подчёркиванием', () => {
    expect(() => validator.validateUsername('user-')).toThrow('Имя не может заканчиваться тире или подчёркиванием');
    expect(() => validator.validateUsername('alex_')).toThrow('Имя не может заканчиваться тире или подчёркиванием');
  });

  test('отклоняет имена с более чем тремя цифрами подряд', () => {
    expect(() => validator.validateUsername('user1234')).toThrow('Нельзя использовать более трёх цифр подряд');
    expect(() => validator.validateUsername('test9999')).toThrow('Нельзя использовать более трёх цифр подряд');
    expect(() => validator.validateUsername('abc1234def')).toThrow('Нельзя использовать более трёх цифр подряд');
    expect(() => validator.validateUsername('start1111end')).toThrow('Нельзя использовать более трёх цифр подряд');
  });
});
