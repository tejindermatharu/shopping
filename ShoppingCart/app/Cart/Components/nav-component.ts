
//import { module } from "angular";


namespace Nav {

    'use strict';

    import IEmitterService = Emitter.IEmitterService;

    class NavComponent implements ng.IComponentOptions {

        public controller: any;
        public templateUrl: string;

        constructor() {
            this.controller = NavController;
            this.templateUrl = 'app/Cart/Templates/nav-template.html';
        }
    };

    class NavController {

        public itemsCount: number;

        static $inject = ['emitterService', 'shopService'];

        constructor(private emitter: IEmitterService, private shopService: any) {

            this.itemsCount = 0;
            this.activate();
        }

        public $onDestroy() {
            // clean up events
            this.emitter.dispose();
        };

        private activate() {

            var promise = this.shopService.subcribeToAddToCart();

            var self = this;

            promise.then(null, null, function (count) {

                self.itemsCount += count;
            });

            this.emitter.listen('item-added', (event) => {

                this.itemsCount += event.Quantity;
                console.log('item added: ' + JSON.stringify(event));
            });
        }
    }

    angular.module('app').component('navComponent', new NavComponent());
}; 