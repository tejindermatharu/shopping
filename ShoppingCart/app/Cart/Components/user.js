

(function () {
    'use strict';

    angular.module('app')
        .component('userComponent', {
            templateUrl: 'app/Cart/Templates/user.html',
            controllerAs: "vm",
            controller: controller
        });

    function controller(configuration) {
        var vm = this;

        var test =   configuration.get();

        vm.name = "John Dee";
        vm.showConfig = false;

        var dataArray = getMockDatasource(1, 100, 100);

        vm.dataSource = new kendo.data.PivotDataSource({
            //columns: ["ProductName"],
            //rows: ["Category"],
                columns: ["titi"],
                rows: ["toto_lb", "tutu"],
            measures: ["Amount", "Quantity"],
            excel: {
                fileName: "Kendo UI PivotGrid Export.xlsx",
                filterable: true
            },
           // data: [{ ProductName: "Chai", UnitPrice: 42, Category: "Beverages" }, { ProductName: "Chai", UnitPrice: 10, Category: "Beverages" }, { ProductName: "Chai", UnitPrice: 56, Category: "Test" }, { ProductName: "Beans", UnitPrice: 77, Category: "Test" }],
            data:dataArray,
            schema: {
                cube: {
                    dimensions: {
                        ProductName: { caption: "All Products" },
                        Category: { caption: "All Cateogries" }
                    },
                    measures: {
                                "Amount": { field: "amt", aggregate: "sum" },
                              	"Quantity": { field: "qty", aggregate: "sum" }
                       }
                    //measures: {
                    //    "Sum": {
                    //        field: "amt",
                    //        aggregate: "sum"
                    //        //aggregate: function (value, state, context) {
                    //        //    return (state.accumulator || 0) + value;
                    //        //}
                    //    }
                    //}
                }
            }
        });

        var pivotgrid = $("#pivotgrid").kendoPivotGrid({
            excel: {
                fileName: "Kendo UI PivotGrid Export.xlsx",
                proxyURL: "//demos.telerik.com/kendo-ui/service/export",
                filterable: true
            },
            filterable: true,
            allowCopy: true,
            sortable: true,
            columnWidth: 100,
            height: 880,
            dataSource:(vm.dataSource)
        }).data("kendoPivotGrid");

        vm.export = function() {
            pivotgrid.saveAsExcel();
        };

        vm.show = function() {
            vm.showConfig = !vm.showConfig;
        };

        vm.options = {
            columnWidth: 200,
            height: 580,
            dataSource: vm.dataSource
        };

          function getMockDatasource(dataRepetition, nToto, nTiti) {
            var  nTutu = 2;
            var obj = [];
            var  res = [];
            for (var k = 0; k < dataRepetition; k += 1) {
              for (var o = 0; o < nToto; o += 1) {
                for (var i = 0; i < nTiti; i += 1) {
                  for (var u = 0; u < nTutu; u += 1) {
                    obj = {};
                    obj.toto = String(o);
                    obj.toto_lb = 'toto' + o;
                    obj.titi = 'titi ' + i;
                    obj.tutu = u.toString();
                    obj.qty = u + (10 * i) + (100 * o); // +9999999999.1234567890123456
                    obj.amt = u + (10 * i) + (100 * o); // +9999999999.1234567890123456
                    res.push(obj);
                  }
                }
              }
            }
            return res;
        };

    }
})();