import { BudgetItem } from '../../shared/models/budget.item.model';
import { Subject } from 'rxjs';
import { UpdateEvent } from '../budget-item-list/budget-item-list.component';

export class BudgetItemService {
  budgetItems: Array<BudgetItem> = new Array<BudgetItem>();
  totalBudget: number = 0;
  budgetListUpdated = new Subject();

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
    this.budgetListUpdated.next();
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    // this.totalBudget = this.totalBudget - item.amount;
    this.totalBudget -= item.amount;
    this.budgetListUpdated.next();
  }

  getBudgetItems() {
    return [...this.budgetItems];
  }

  onUpdateItem(updatedItem, currentItem) {
    this.budgetItems[this.budgetItems.indexOf(currentItem)] = updatedItem;
    ///update total budget
    this.totalBudget -= currentItem.amount;
    this.totalBudget += updatedItem.amount;
    this.budgetListUpdated.next();
  }
}
