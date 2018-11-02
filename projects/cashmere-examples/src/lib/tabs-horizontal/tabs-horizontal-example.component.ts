import {Component} from '@angular/core';
import {TabChangeEvent} from '@healthcatalyst/cashmere';

/**
 * @title Horizontal Tabs with Event Handling
 */
@Component({
    selector: 'hc-example',
    templateUrl: 'tabs-horizontal-example.component.html',
    styleUrls: ['tabs-horizontal-example.component.sass']
})
export class TabsHorizontalExampleComponent {
    selectedIndex: number = 0;

    selectionChanged(event: TabChangeEvent) {
        this.selectedIndex = event.index;
    }

    addTask(event: Event) {
        window.alert('The "Add Task" tab was clicked.');
    }
}