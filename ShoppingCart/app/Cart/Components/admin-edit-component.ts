
namespace AdminEdit {

    interface IAdminEditComponentBindings {
        productList: Array<any>;
        deleteProd: (event: any) => any;
        editProd: (event: any) => any;
    }
    //import EditController = require("./admin-edit-controller");

    class AdminEditComponent implements ng.IComponentOptions {

        public controller: any;

        public templateUrl: string;
        public bindings: any;

        constructor() {
            this.controller = AdminEditController;
            this.bindings = {
                productList: '<',
                deleteProd: '&',
                editProd: '&'
            };
            this.templateUrl = 'app/Cart/Templates/admin-edit.html';
        }
    };

    class AdminEditController implements IAdminEditComponentBindings {

        public productList: Array<any>;
        public deleteProd: (event: any) => any;
        public editProd: (event: any) => any;

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
    };

    angular.module('app').component('adminEditComponent', new AdminEditComponent());

}; 