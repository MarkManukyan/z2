const validateUsername = require('../src/validateUsername');

describe('validateUsername', () => {
  test('should return true for valid usernames', () => {
    expect(validateUsername('john')).toBe(true);
    expect(validateUsername('john-doe')).toBe(true);
    expect(validateUsername('john_doe')).toBe(true);
    expect(validateUsername('j123')).toBe(true);
  });

  test('should return false for usernames with consecutive hyphens/underscores', () => {
    expect(validateUsername('john--doe')).toBe(false);
    expect(validateUsername('john__doe')).toBe(false);
    expect(validateUsername('john-_doe')).toBe(false);
  });

  test('should return false for usernames starting/ending with hyphen/underscore', () => {
    expect(validateUsername('-john')).toBe(false);
    expect(validateUsername('_john')).toBe(false);
    expect(validateUsername('john-')).toBe(false);
    expect(validateUsername('john_')).toBe(false);
  });

  test('should return false for empty string or non-string input', () => {
    expect(validateUsername('')).toBe(false);
    expect(validateUsername(123)).toBe(false);
    expect(validateUsername(null)).toBe(false);
    expect(validateUsername(undefined)).toBe(false);
  });
});
