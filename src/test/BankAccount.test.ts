import BankAccount from './../model/BankAccount';

describe('Tests over the fees, limits and installments number', () => {
  test('It should allow the user to have a installment within standart signature', () => {
    const standardBankAccount = new BankAccount('Standart');

    let actualLoanValue = standardBankAccount.actualLoanValue(1000, 5); // buying a mixer

    expect(actualLoanValue).toBe(1125);
  });

  test('It should allow the user to have a installment within platinum signature', () => {
    const platinumBankAccount = new BankAccount('Platinum');

    let actualLoanValue = platinumBankAccount.actualLoanValue(40000, 24); // buying a car

    expect(actualLoanValue).toBe(59104);
  });

  test('It should allow the user to have a installment within golden signature', () => {
    const goldBankAccount = new BankAccount('Gold');

    let actualLoanValue = goldBankAccount.actualLoanValue(100000, 30); // buying a house

    expect(actualLoanValue).toBe(136000);
  });

  test('It should throw an exception when the user is not allowed to have right conditions within standard signature', () => {
    const standardBankAccount = new BankAccount('Standart');

    expect(() => standardBankAccount.actualLoanValue(1000, 13)).toThrowError('Exceeded installments number.');
    expect(() => standardBankAccount.actualLoanValue(1e6, 12)).toThrowError('Exceeed maximum value.');
  });
  
  test('It should ', () => {
    const standardBankAccount = new BankAccount('Standart');

    expect(standardBankAccount.installmentValue(1e4, 12)).toBe(1083.33);
  });

  test('It should throw an exception when the user is not allowed to have right conditions within platinum signature', () => {
    const standardBankAccount = new BankAccount('Platinum');
    
    expect(() => standardBankAccount.actualLoanValue(1000, 48)).toThrowError('Exceeded installments number.');
  });

  test('It should throw an exception when the user is not allowed to have right conditions within golden signature', () => {
    const standardBankAccount = new BankAccount('Gold');
    
    expect(() => standardBankAccount.actualLoanValue(1000, 1024)).toThrowError('Exceeded installments number.');
  });
});