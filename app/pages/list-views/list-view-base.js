"use strict";
var observable_array_1 = require('data/observable-array');
var observable_1 = require('data/observable');
var BasePage_1 = require('../../shared/BasePage');
var viewModel = new observable_1.Observable({
    fakeListItems: new observable_array_1.ObservableArray([
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
var ListViewBase = (function (_super) {
    __extends(ListViewBase, _super);
    function ListViewBase() {
        _super.apply(this, arguments);
    }
    ListViewBase.prototype.mainContentLoaded = function (args) {
    };
    ListViewBase.prototype.loaded = function (args) {
        var page = args.object;
        page.bindingContext = viewModel;
    };
    return ListViewBase;
}(BasePage_1.BasePage));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListViewBase;
//# sourceMappingURL=list-view-base.js.map