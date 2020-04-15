import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';
import { BudgetItemService } from '../services/budget-item.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  budgetItems: Array<BudgetItem> = new Array<BudgetItem>();
  totalBudget: number = 0;
  budgetListSubscription: Subscription;

  constructor(private budgetItemService: BudgetItemService) {}

  ngOnInit(): void {
    this.budgetListSubscription = this.budgetItemService.budgetListUpdated.subscribe(
      () => {
        this.budgetItems = this.budgetItemService.getBudgetItems();
        this.totalBudget = this.budgetItemService.totalBudget;
      }
    );
  }
}
