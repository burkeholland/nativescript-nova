"use strict";
var observable_array_1 = require('data/observable-array');
var observable_1 = require('data/observable');
var BasePage_1 = require('../shared/BasePage');
//import dialogs = require("ui/dialogs");
var CheckBoxItem = (function (_super) {
    __extends(CheckBoxItem, _super);
    function CheckBoxItem(text) {
        _super.call(this);
        this.checked = true;
        this.text = text;
    }
    CheckBoxItem.prototype.toggle = function (args) {
        this.set('checked', !this.checked);
    };
    return CheckBoxItem;
}(observable_1.Observable));
var ViewModel = (function (_super) {
    __extends(ViewModel, _super);
    function ViewModel() {
        _super.call(this);
        this.checkBoxItems = new observable_array_1.ObservableArray([
            new CheckBoxItem('light'),
            new CheckBoxItem('accent'),
            new CheckBoxItem('dark')
        ]);
    }
    ViewModel.prototype.toggleChecked = function (args) {
        var item = args.view.bindingContext;
        item.checked = !item.checked;
        var index = this.checkBoxItems.indexOf(item);
        // Use Object.assign to clone the object to ensure NativeScript
        // detects the change and updates the UI accordingly
        this.checkBoxItems.setItem(index, Object.assign({}, item));
    };
    return ViewModel;
}(observable_1.Observable));
var viewModel = new ViewModel();
var CheckBoxBase = (function (_super) {
    __extends(CheckBoxBase, _super);
    function CheckBoxBase() {
        _super.apply(this, arguments);
    }
    CheckBoxBase.prototype.mainContentLoaded = function (args) {
        var page = (args.object);
        page.bindingContext = viewModel;
    };
    return CheckBoxBase;
}(BasePage_1.BasePage));
module.exports = new CheckBoxBase();
//# sourceMappingURL=checkbox.js.map