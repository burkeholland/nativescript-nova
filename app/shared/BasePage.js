"use strict";
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var appViewModel = new observable_1.Observable({ selectedPage: "home" });
var BasePage = (function () {
    function BasePage() {
    }
    BasePage.prototype.loaded = function (args) {
        var page = args.object;
        page.bindingContext = appViewModel;
    };
    BasePage.prototype.toggleDrawer = function () {
        var page = frame_1.topmost().currentPage;
        var drawer = page.getViewById("drawer");
        drawer.toggleDrawerState();
    };
    BasePage.prototype.navigate = function (args) {
        var pageName = args.view.rel.toLowerCase();
        appViewModel.set("selectedPage", pageName);
        frame_1.topmost().navigate("pages/" + pageName);
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map