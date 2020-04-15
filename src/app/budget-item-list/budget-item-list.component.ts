import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget.item.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { BudgetItemService } from '../services/budget-item.service';

export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent {
  @Input() budgetItems: BudgetItem[];
}
