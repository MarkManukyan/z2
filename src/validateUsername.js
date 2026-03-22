/**
 * Проверяет корректность имени пользователя
 * @param {string} username — имя пользователя для проверки
 * @returns {boolean} true, если имя корректно, иначе false
 */
function validateUsername(username) {
  if (typeof username !== 'string') {
    return false;
  }

  const usernameRegex = /^[a-zA-Z0-9](?!.*[-_]{2})[a-zA-Z0-9_-]*[a-zA-Z0-9]$/;

  return usernameRegex.test(username);
}

module.exports = validateUsername;
