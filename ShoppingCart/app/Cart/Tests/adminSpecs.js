
/// <reference path="~/Scripts/jasmine/jasmine.js" />
describe("Admin Edit Tests", function () {

    var $componentController;
    var $q;
    var $scope;
    var deferred;
    var ctrl;

    beforeEach(module('app'));

    beforeEach(inject(function (_$componentController_, _$rootScope_, _$q_) {
        $componentController = _$componentController_;
        $q = _$q_;
        $scope = _$rootScope_.$new();
        // We use the $q service to create a mock instance of defer
        deferred = _$q_.defer();
    }));

    describe('when toggleEditMode called ', function () {

        it('edit mode should toggle ', function () {

            var prodList = [];
            var item = {
                editMode: false
            };
            prodList.push(item);

            // Here we are passing actual bindings to the component
            var bindings = { productList: prodList };
            ctrl = $componentController('adminEditComponent', null, bindings);

            ctrl.toggleEditMode(item);

            expect(ctrl.productList[0].editMode).toBe(true);
        });

    });

    describe('when calling getAllProductsUsingPromises', function () {

        it('productsReceived should be true', function () {

            var genericDataServiceMock = {
                getDataPromise: function () {
                    return deferred.promise;
                }
            };

            var adminRepositoryMock = {};

            var services = {
                genericDataService: genericDataServiceMock,
                adminRepository: adminRepositoryMock
            };

            ctrl = $componentController('adminComponent', services, null);

            ctrl.getAllProductsUsingPromises();
            deferred.resolve([{ id: 1 }, { id: 2 }]);
            $scope.$apply();
            expect(ctrl.productsReceived).toBe(true);

        });

    });



});
