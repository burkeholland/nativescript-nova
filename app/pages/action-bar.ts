import { Page, Button } from 'ui';
import { Observable, EventData } from 'data/observable';
import { BasePage } from '../shared/BasePage';
let viewModel = new Observable({
    selectedStyle: 'light'
});

class ActionBarPage extends BasePage {
    mainContentLoaded(args: EventData) {
        
    }
    
    loaded(args: EventData) {
        let page = <Page>args.object;
        page.bindingContext = viewModel; 
    }
    
    changeActionBarStyle(args: EventData) {
        let style = <Button>args.object.rel.toLowerCase();
        viewModel.set('selectedStyle', style)
    }
}

export = new ActionBarPage();