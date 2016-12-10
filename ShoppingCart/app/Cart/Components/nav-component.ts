
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

        public items: any;
        public itemsCount: number;
        public state: any;
        static $inject = ['emitterService', 'shopService', 'Store'];

        constructor(private emitter: IEmitterService, private shopService: any, private store: any) {

            this.items = null;
            this.itemsCount = 0;
            this.state = null;
            this.activate();
        }

        public $onDestroy() {
            // clean up events
            this.emitter.dispose();
        };

        private activate() {

            var self = this;
            self.items = this.store.subscribe('nav');

            this.shopService.onAdd(function (count) {

                self.items.itemsCount += count;
            })

            var promise = this.shopService.addedToCart()
                                          .then(null,null,function (count) {

                                             // self.itemsCount += count;

                                               });

            this.emitter.listen('item-added', (event) => {

                this.items.itemsCount += event.Quantity;
                console.log('item added: ' + JSON.stringify(event));
            });
        }
    }

    angular.module('app').component('navComponent', new NavComponent());
}; 