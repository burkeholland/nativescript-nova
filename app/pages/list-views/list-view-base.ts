import { ObservableArray } from 'data/observable-array';
import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { BasePage } from '../../shared/BasePage';

let viewModel = new Observable({
    fakeListItems: new ObservableArray([
        { artist: 'Anberlin', title: 'New Surrender', img: 'new-surrender.jpg' },
        { artist: 'Anberlin', title: 'Vital', img: 'vital.jpg' },
        { artist: 'Anberlin', title: 'Dark Is The Way, Light Is A Place', img: 'dark-is-the-way.jpg' },
        { artist: 'Anberlin', title: 'Lowborn', img: 'lowborn.jpg' },
        { artist: 'Anberlin', title: 'Cities', img: 'cities.jpg' },
        { artist: 'Anberlin', title: 'Lost Songs', img: 'lost-songs.jpg' },
        { artist: 'Anberlin', title: 'Never Take Friendship Personal', img: 'never-take-friendship-personal.jpg' },
        { artist: 'Anberlin', title: 'Blueprints for City Friendships: The Anberlin Anthology', img: 'blueprints-for-city-friendships.jpg' },
        { artist: 'Anberlin', title: 'Blueprints for The Black Market', img: 'blueprints-for-the-blackmarket.jpg' },
        { artist: 'Anberlin', title: 'Dancing Between The Fibers Of Time', img: 'dancing-between-the-fibers-of-time.jpg' },
        { artist: 'Anberlin', title: 'Devotion', img: 'devotion.jpg' },
        { artist: 'Anberlin', title: 'Vital (The Remixes)', img: 'vital-the-remixes.jpg' }
    ])
});

class ListViewBase extends BasePage {
    mainContentLoaded(args) {
      
    }
    
    loaded(args: EventData) {
        let page = <Page>args.object;
        page.bindingContext = viewModel;
    }
}

export default ListViewBase;