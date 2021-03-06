Lucee.Layout = (function () {
    var a = new Lucee.adapters.Layout();
    function b() {
        return a;
    }
    return {
        getTabLayout: function (d) {
            var c = b();
            return c.getTabLayout(d);
        },
        initializeTabLayout: function (e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabInit", arguments);
            c.initializeTabLayout(e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabInit", Lucee.Layout.getTabLayout(e));
        },
        createTab: function (g, f, h, e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabCreate", arguments);
            c.createTab(g, f, h, e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabCreate", arguments);
        },
        removeTab: function (e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabRemove", arguments);
            c.removeTab(e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabRemove", arguments);
        },
        removeLastTab: function (d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabRemove", [d]);
            c.removeLastTab(d);
            Lucee.Events.dispatchEvent("Layout.afterTabRemove", [d]);
        },
        removeTabByIndex: function (e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabRemove", arguments);
            c.removeTabByIndex(e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabRemove", arguments);
        },
        selectedTab: function (e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabSelect", arguments);
            c.selectedTab(e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabSelect", arguments);
        },
        disableTab: function (e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabDisable", arguments);
            c.disableTab(e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabDisable", arguments);
        },
        enableTab: function (e, d) {
            var c = b();
            Lucee.Events.dispatchEvent("Layout.beforeTabEnable", arguments);
            c.enableTab(e, d);
            Lucee.Events.dispatchEvent("Layout.afterTabEnable", arguments);
        },
    };
})();