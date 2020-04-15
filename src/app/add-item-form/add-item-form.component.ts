import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget.item.model';
import { BudgetItemService } from '../services/budget-item.service';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {
  @Input() item: BudgetItem; // jaruri nhi hai ki hum isi component se input mai data le, edit compo ko bhi yh lgega component
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  isNewItem: boolean;
  constructor(
    private budgetItemService: BudgetItemService // public dialogRef: MatDialogRef<EditItemModalComponent>
  ) {}

  ngOnInit(): void {
    if (this.item) {
      this.isNewItem = false;
    } else {
      this.isNewItem = true;
      this.item = new BudgetItem('', null);
    }
  }

  onAddItem(form: NgForm) {
    if (this.isNewItem) {
      this.budgetItemService.addItem(form.value);
    } else {
      this.budgetItemService.onUpdateItem(form.value, this.item);
    }
    form.reset();
    this.formSubmit.emit();
  }
}
