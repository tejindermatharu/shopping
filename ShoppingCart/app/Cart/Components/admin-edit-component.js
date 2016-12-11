var AdminEdit;
(function (AdminEdit) {
    //import EditController = require("./admin-edit-controller");
    var AdminEditComponent = (function () {
        function AdminEditComponent() {
            this.controller = AdminEditController;
            this.bindings = {
                productList: '<',
                deleteProd: '&',
                editProd: '&'
            };
            this.templateUrl = 'app/Cart/Templates/admin-edit.html';
        }
        return AdminEditComponent;
    }());
    ;
    var AdminEditController = (function () {
        function AdminEditController() {
        }
        AdminEditController.prototype.deleteProduct = function (product) {
            this.deleteProd({
                $event: {
                    product: product
                }
            });
        };
        ;
        AdminEditController.prototype.update = function (product) {
            this.editProd({
                $event: {
                    product: product
                }
            });
        };
        ;
        AdminEditController.prototype.updateOnEnter = function (product, event) {
            if (event.key === "Enter") {
                this.update(product);
            }
            ;
        };
        ;
        AdminEditController.prototype.toggleEditMode = function (item) {
            // Toggle
            item.editMode = !item.editMode;
        };
        ;
        return AdminEditController;
    }());
    ;
    angular.module('app').component('adminEditComponent', new AdminEditComponent());
})(AdminEdit || (AdminEdit = {}));
;
//# sourceMappingURL=admin-edit-component.js.map