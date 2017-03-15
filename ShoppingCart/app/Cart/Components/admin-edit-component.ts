
namespace AdminEdit {

    interface IAdminEditComponentBindings {
        productList: Array<any>;
        deleteProd: (event: any) => any;
        editProd: (event: any) => any;
    }

    import IEmitterService = Emitter.IEmitterService;

    class AdminEditComponent implements ng.IComponentOptions {

        public controller: any;

        public templateUrl: string;
        public bindings: any;

        constructor() {
            this.controller = AdminEditController;
            this.bindings = {
                productList: '<',
                deleteProd: '&',
                editProd: '&',
                dockable: '@'
            };
            this.templateUrl = 'app/Cart/Templates/admin-edit.html';
        }
    };

    class AdminEditController implements IAdminEditComponentBindings {

        public productList: Array<any>;
        public deleteProd: (event: any) => any;
        public editProd: (event: any) => any;
        public dockable: string;

        static $inject = ['emitterService', 'genericDataService', '$window', '$timeout'];

        constructor(private emitter: IEmitterService, private genericDataService: any, private $window : ng.IWindowService, private $timeout: ng.ITimeoutService) {

            if (this.dockable) {
                this.getAllProducts();
  
                window.addEventListener('storage', event => {
                    this.addProductToList(JSON.parse(event.newValue));
                });

            }
        }

        public deleteProduct(product) {

            this.deleteProd({
                $event: {
                    product: product
                }
            });
        };

        public update(product) {

            this.editProd({
                $event: {
                    product: product
                }
            });
        };

        public updateOnEnter(product, event) {

            if (event.key === "Enter") {
                this.update(product);
            };
        };

        public toggleEditMode(item) {
            // Toggle
            item.editMode = !item.editMode;
        };

        private addProductToList(item) {

            if (item) {
                this.$timeout(() => (
                    this.productList.push(item)
                    ), 0);
            }
        }

        private getAllProducts() {

            this.genericDataService.getDataPromise('adminRepository').then(
                data => {
                    if (data) {
                        this.productList = data;
                        //vm.productsReceived = true;
                    }
                }
            ).catch(data => { }

                );
        };
    };

    angular.module('app').component('adminEditComponent', new AdminEditComponent());

}; 