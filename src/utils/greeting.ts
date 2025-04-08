/** Return a greeting (pt-br) based on what time of day is.
 * @param {number} currentHour - time of day in hours.
 * @example
 * const greeting = getGreeting(new Date().getHours());
 * @example
 * const greeting = getGreeting(5); // Bom dia
 */
export function getGreeting(currentHour: number) {
  if (currentHour <= 12) {
    return 'Bom dia';
  }

  if (currentHour > 12 && currentHour <= 18) {
    return 'Boa tarde';
  }

  if (currentHour > 18) {
    return 'Boa noite';
  }

  return 'Olá';
}
