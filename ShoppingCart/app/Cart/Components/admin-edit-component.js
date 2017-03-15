var AdminEdit;
(function (AdminEdit) {
    var AdminEditComponent = (function () {
        function AdminEditComponent() {
            this.controller = AdminEditController;
            this.bindings = {
                productList: '<',
                deleteProd: '&',
                editProd: '&',
                dockable: '@'
            };
            this.templateUrl = 'app/Cart/Templates/admin-edit.html';
        }
        return AdminEditComponent;
    }());
    ;
    var AdminEditController = (function () {
        function AdminEditController(emitter, genericDataService, $window, $timeout) {
            var _this = this;
            this.emitter = emitter;
            this.genericDataService = genericDataService;
            this.$window = $window;
            this.$timeout = $timeout;
            if (this.dockable) {
                this.getAllProducts();
                window.addEventListener('storage', function (event) {
                    _this.addProductToList(JSON.parse(event.newValue));
                });
            }
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
        AdminEditController.prototype.addProductToList = function (item) {
            var _this = this;
            if (item) {
                this.$timeout(function () { return (_this.productList.push(item)); }, 0);
            }
        };
        AdminEditController.prototype.getAllProducts = function () {
            var _this = this;
            this.genericDataService.getDataPromise('adminRepository').then(function (data) {
                if (data) {
                    _this.productList = data;
                }
            }).catch(function (data) { });
        };
        ;
        AdminEditController.$inject = ['emitterService', 'genericDataService', '$window', '$timeout'];
        return AdminEditController;
    }());
    ;
    angular.module('app').component('adminEditComponent', new AdminEditComponent());
})(AdminEdit || (AdminEdit = {}));
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4tZWRpdC1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZG1pbi1lZGl0LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxJQUFVLFNBQVMsQ0F3R2xCO0FBeEdELFdBQVUsU0FBUyxFQUFDLENBQUM7SUFRakI7UUFPSTtZQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsbUJBQW1CLENBQUM7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDWixXQUFXLEVBQUUsR0FBRztnQkFDaEIsVUFBVSxFQUFFLEdBQUc7Z0JBQ2YsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLEdBQUc7YUFDaEIsQ0FBQztZQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0NBQW9DLENBQUM7UUFDNUQsQ0FBQztRQUNMLHlCQUFDO0lBQUQsQ0FBQyxBQWpCRCxJQWlCQztJQUFBLENBQUM7SUFFRjtRQVNJLDZCQUFvQixPQUFZLEVBQVUsa0JBQXVCLEVBQVUsT0FBMkIsRUFBVSxRQUE0QjtZQVRoSixpQkF5RUM7WUFoRXVCLFlBQU8sR0FBUCxPQUFPLENBQUs7WUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUs7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFvQjtZQUFVLGFBQVEsR0FBUixRQUFRLENBQW9CO1lBRXhJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBRXRCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBQSxLQUFLO29CQUNwQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDO1FBQ0wsQ0FBQztRQUVNLDJDQUFhLEdBQXBCLFVBQXFCLE9BQU87WUFFeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDWixNQUFNLEVBQUU7b0JBQ0osT0FBTyxFQUFFLE9BQU87aUJBQ25CO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQzs7UUFFTSxvQ0FBTSxHQUFiLFVBQWMsT0FBTztZQUVqQixJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLE1BQU0sRUFBRTtvQkFDSixPQUFPLEVBQUUsT0FBTztpQkFDbkI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDOztRQUVNLDJDQUFhLEdBQXBCLFVBQXFCLE9BQU8sRUFBRSxLQUFLO1lBRS9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUM7O1FBRU0sNENBQWMsR0FBckIsVUFBc0IsSUFBSTtZQUN0QixTQUFTO1lBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsQ0FBQzs7UUFFTyw4Q0FBZ0IsR0FBeEIsVUFBeUIsSUFBSTtZQUE3QixpQkFPQztZQUxHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFNLE9BQUEsQ0FDaEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQzFCLEVBRmUsQ0FFZixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUM7UUFFTyw0Q0FBYyxHQUF0QjtZQUFBLGlCQVlDO1lBVkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDMUQsVUFBQSxJQUFJO2dCQUNBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ1AsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBRTVCLENBQUM7WUFDTCxDQUFDLENBQ0osQ0FBQyxLQUFLLENBQUMsVUFBQSxJQUFJLElBQU0sQ0FBQyxDQUVkLENBQUM7UUFDVixDQUFDOztRQWpFTSwyQkFBTyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBa0VyRiwwQkFBQztJQUFELENBQUMsQUF6RUQsSUF5RUM7SUFBQSxDQUFDO0lBRUYsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7QUFFcEYsQ0FBQyxFQXhHUyxTQUFTLEtBQVQsU0FBUyxRQXdHbEI7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm5hbWVzcGFjZSBBZG1pbkVkaXQge1xyXG5cclxuICAgIGludGVyZmFjZSBJQWRtaW5FZGl0Q29tcG9uZW50QmluZGluZ3Mge1xyXG4gICAgICAgIHByb2R1Y3RMaXN0OiBBcnJheTxhbnk+O1xyXG4gICAgICAgIGRlbGV0ZVByb2Q6IChldmVudDogYW55KSA9PiBhbnk7XHJcbiAgICAgICAgZWRpdFByb2Q6IChldmVudDogYW55KSA9PiBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xhc3MgQWRtaW5FZGl0Q29tcG9uZW50IGltcGxlbWVudHMgbmcuSUNvbXBvbmVudE9wdGlvbnMge1xyXG5cclxuICAgICAgICBwdWJsaWMgY29udHJvbGxlcjogYW55O1xyXG5cclxuICAgICAgICBwdWJsaWMgdGVtcGxhdGVVcmw6IHN0cmluZztcclxuICAgICAgICBwdWJsaWMgYmluZGluZ3M6IGFueTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlciA9IEFkbWluRWRpdENvbnRyb2xsZXI7XHJcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3MgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdDogJzwnLFxyXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvZDogJyYnLFxyXG4gICAgICAgICAgICAgICAgZWRpdFByb2Q6ICcmJyxcclxuICAgICAgICAgICAgICAgIGRvY2thYmxlOiAnQCdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICdhcHAvQ2FydC9UZW1wbGF0ZXMvYWRtaW4tZWRpdC5odG1sJztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNsYXNzIEFkbWluRWRpdENvbnRyb2xsZXIgaW1wbGVtZW50cyBJQWRtaW5FZGl0Q29tcG9uZW50QmluZGluZ3Mge1xyXG5cclxuICAgICAgICBwdWJsaWMgcHJvZHVjdExpc3Q6IEFycmF5PGFueT47XHJcbiAgICAgICAgcHVibGljIGRlbGV0ZVByb2Q6IChldmVudDogYW55KSA9PiBhbnk7XHJcbiAgICAgICAgcHVibGljIGVkaXRQcm9kOiAoZXZlbnQ6IGFueSkgPT4gYW55O1xyXG4gICAgICAgIHB1YmxpYyBkb2NrYWJsZTogc3RyaW5nO1xyXG5cclxuICAgICAgICBzdGF0aWMgJGluamVjdCA9IFsnZW1pdHRlclNlcnZpY2UnLCAnZ2VuZXJpY0RhdGFTZXJ2aWNlJywgJyR3aW5kb3cnLCAnJHRpbWVvdXQnXTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbWl0dGVyOiBhbnksIHByaXZhdGUgZ2VuZXJpY0RhdGFTZXJ2aWNlOiBhbnksIHByaXZhdGUgJHdpbmRvdyA6IG5nLklXaW5kb3dTZXJ2aWNlLCBwcml2YXRlICR0aW1lb3V0OiBuZy5JVGltZW91dFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRvY2thYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFsbFByb2R1Y3RzKCk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0xpc3QoSlNPTi5wYXJzZShldmVudC5uZXdWYWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZGVsZXRlUHJvZHVjdChwcm9kdWN0KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2Qoe1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgdXBkYXRlKHByb2R1Y3QpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2Qoe1xyXG4gICAgICAgICAgICAgICAgJGV2ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogcHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgdXBkYXRlT25FbnRlcihwcm9kdWN0LCBldmVudCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShwcm9kdWN0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwdWJsaWMgdG9nZ2xlRWRpdE1vZGUoaXRlbSkge1xyXG4gICAgICAgICAgICAvLyBUb2dnbGVcclxuICAgICAgICAgICAgaXRlbS5lZGl0TW9kZSA9ICFpdGVtLmVkaXRNb2RlO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByaXZhdGUgYWRkUHJvZHVjdFRvTGlzdChpdGVtKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0TGlzdC5wdXNoKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0QWxsUHJvZHVjdHMoKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlbmVyaWNEYXRhU2VydmljZS5nZXREYXRhUHJvbWlzZSgnYWRtaW5SZXBvc2l0b3J5JykudGhlbihcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZtLnByb2R1Y3RzUmVjZWl2ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKS5jYXRjaChkYXRhID0+IHsgfVxyXG5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbXBvbmVudCgnYWRtaW5FZGl0Q29tcG9uZW50JywgbmV3IEFkbWluRWRpdENvbXBvbmVudCgpKTtcclxuXHJcbn07ICJdfQ==