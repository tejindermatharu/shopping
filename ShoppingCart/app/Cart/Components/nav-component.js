//import { module } from "angular";
var Nav;
(function (Nav) {
    'use strict';
    var NavComponent = (function () {
        function NavComponent() {
            this.controller = NavController;
            this.templateUrl = 'app/Cart/Templates/nav-template.html';
        }
        return NavComponent;
    }());
    ;
    var NavController = (function () {
        function NavController(emitter, shopService, store) {
            this.emitter = emitter;
            this.shopService = shopService;
            this.store = store;
            this.items = null;
            this.itemsCount = 0;
            this.state = null;
            this.activate();
        }
        NavController.prototype.$onDestroy = function () {
            // clean up events
            this.emitter.dispose();
        };
        ;
        NavController.prototype.activate = function () {
            var _this = this;
            var self = this;
            self.items = this.store.subscribe('nav');
            this.shopService.onAdd(function (count) {
                self.items.itemsCount += count;
            });
            var promise = this.shopService.addedToCart()
                .then(null, null, function (count) {
                // self.itemsCount += count;
            });
            this.emitter.listen('item-added', function (event) {
                _this.items.itemsCount += event.Quantity;
                console.log('item added: ' + JSON.stringify(event));
            });
        };
        NavController.$inject = ['emitterService', 'shopService', 'Store'];
        return NavController;
    }());
    angular.module('app').component('navComponent', new NavComponent());
})(Nav || (Nav = {}));
;
//# sourceMappingURL=nav-component.js.map