"use strict";
var observable_1 = require('data/observable');
var BasePage_1 = require('../shared/BasePage');
var viewModel = new observable_1.Observable({
    selectedStyle: 'light'
});
var ActionBarPage = (function (_super) {
    __extends(ActionBarPage, _super);
    function ActionBarPage() {
        _super.apply(this, arguments);
    }
    ActionBarPage.prototype.mainContentLoaded = function (args) {
    };
    ActionBarPage.prototype.loaded = function (args) {
        var page = args.object;
        page.bindingContext = viewModel;
    };
    ActionBarPage.prototype.changeActionBarStyle = function (args) {
        var style = args.object.rel.toLowerCase();
        viewModel.set('selectedStyle', style);
    };
    return ActionBarPage;
}(BasePage_1.BasePage));
module.exports = new ActionBarPage();
//# sourceMappingURL=action-bar.js.map