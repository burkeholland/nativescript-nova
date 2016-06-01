import { ObservableArray } from 'data/observable-array';
import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { BasePage } from '../shared/BasePage';
//import dialogs = require("ui/dialogs");

class CheckBoxItem extends Observable {
    text: string;
    checked: boolean = true;

    constructor(text: string) {
        super();
        this.text = text;
    }
    
    toggle(args: any) {
        this.set('checked', !this.checked);
    }
}

class ViewModel extends Observable {
    checkBoxItems: ObservableArray<CheckBoxItem>
    
    constructor() {
        super();
        
        this.checkBoxItems = new ObservableArray<CheckBoxItem>([
            new CheckBoxItem('light'),
            new CheckBoxItem('accent'),
            new CheckBoxItem('dark')   
        ]);
    }
    
    toggleChecked(args: any) {
        var item = args.view.bindingContext;
        item.checked = !item.checked;
        
        var index = this.checkBoxItems.indexOf(item);
        
		// Use Object.assign to clone the object to ensure NativeScript
		// detects the change and updates the UI accordingly
        this.checkBoxItems.setItem(index, Object.assign({}, item));
    }
    
    
}

let viewModel = new ViewModel();

class CheckBoxBase extends BasePage {
    mainContentLoaded(args: EventData) {
      var page = <Page>(args.object);
      page.bindingContext = viewModel;
    }
}

module.exports = new CheckBoxBase();