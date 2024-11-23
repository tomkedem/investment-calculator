import { Component, signal } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enterInitialInvestment = signal('0');
  enterAnnualInvestment = signal('0');
  enterExpectedReturn = signal('5');
  enterDuration = signal('10');
  
  constructor(private investmentService: InvestmentService) { }

  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment: + this.enterInitialInvestment(), 
      expectedReturn: + this.enterExpectedReturn(), 
      duration: + this.enterDuration(), 
      annualInvestment: + this.enterAnnualInvestment(), 
    })
  }
}
