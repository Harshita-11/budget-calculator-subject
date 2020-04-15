import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from '../../../shared/models/budget.item.model';
import { BudgetItemService } from 'src/app/services/budget-item.service';
import { UpdateEvent } from '../budget-item-list.component';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from 'src/app/edit-item-modal/edit-item-modal.component';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;

  constructor(
    private budgetItemService: BudgetItemService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    console.log(this.item);
  }

  onDeleteItem(item) {
    this.budgetItemService.deleteItem(item);
  }

  onCardClick() {
    this.dialog.open(EditItemModalComponent, {
      width: '580px',
      data: this.item
    });
  }
}
