import { parseNumber } from './../utils/number_utils';

class BankAccount {
  private _signature: string = 'Standart';
  private _fees: number = 0.025;
  private _limit: number = 1e4;
  private _installmentsNumber: number = 12;

  constructor(signature: 'Standart' | 'Platinum' | 'Gold') {
    this.signature = signature;

    switch(signature) {
      case 'Standart':
        break;

      case 'Platinum':
        this.fees = 0.0199;
        this.limit = 5e4;
        this.installmentsNumber = 24;
        break;
      
      case 'Gold':
        this.fees = 0.012;
        this.limit = 25e4;
        this.installmentsNumber = 48;
        break;
    }
  }

  // public get signature(): string {
  //   return this._signature;
  // }

  public set signature(value: string) {
    this._signature = value;
  }

  public get fees(): number {
    return this._fees;
  }
  
  public set fees(value: number) {
    this._fees = value;
  }

  public get limit(): number {
    return this._limit;
  }

  public set limit(value: number) {
    this._limit = value;
  }

  public get installmentsNumber(): number {
    return this._installmentsNumber;
  }
  
  public set installmentsNumber(value: number) {
    this._installmentsNumber = value;
  }

  public actualLoanValue(value: number, installmentsNumber: number): number {
    if (value > this.limit) {
      throw new Error('Exceeed maximum value.');
    }

    if (installmentsNumber > this.installmentsNumber) {
      throw new Error('Exceeded installments number.');
    }

    return value * (1 + (this.fees * installmentsNumber));
  }

  public installmentValue(value: number, installmentsNumber: number): number {
    return parseNumber(this.actualLoanValue(value, installmentsNumber) / this.installmentsNumber);
  }

  // public get displayAccount(): string {
  //   return 'Signature: '           + this.signature                       + '\n'
  //     + 'Fees: '                + parseNumber(this.fees * 100)         + '%\n'
  //     + 'Limit: '               + formatCurrency(this.limit)           + '\n'
  //     + 'Installments number: ' + this.installmentsNumber;
  // }
}

export default BankAccount;