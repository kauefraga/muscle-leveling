import { describe, expect, it } from 'bun:test';
import { getGreeting } from './greeting';

describe('greeting function', () => {
  it('should return Bom dia at 06:00', () => {
    const g = getGreeting(6);

    expect(g).toBe('Bom dia');
  });

  it('should return Boa Tarde at 17:00', () => {
    const g = getGreeting(17);

    expect(g).toBe('Boa tarde');
  });

  it('should return Boa noite at 21:00', () => {
    const g = getGreeting(21);

    expect(g).toBe('Boa noite');
  });

  it('should never return Olá', () => {
    const g = getGreeting(new Date().getHours());

    expect(g).not.toBe('Olá');
  });
});
