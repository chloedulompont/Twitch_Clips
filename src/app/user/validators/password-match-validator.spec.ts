import { PasswordMatchValidator } from './password-match-validator';

describe('EmailMatchValidator', () => {
  it('should create an instance', () => {
    expect(new PasswordMatchValidator()).toBeTruthy();
  });
});
