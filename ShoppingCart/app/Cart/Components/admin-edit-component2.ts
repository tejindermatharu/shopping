

import IEmitterService = Emitter.IEmitterService;
import { Component, Input, Output, EventEmitter, Inject, OnInit} from '@angular/core';
import { IProduct }  from '../Models/product';

@Component({
    selector: 'admin-edit',
    templateUrl: 'app/Cart/Templates/admin-edit2.html'
    //providers: [
    //    { provide: Window, useValue: window }
    //]
})
export class AdminEditController2 implements OnInit {

    @Input() dockable: any;
    @Input() product: IProduct[];

    @Output() delete = new EventEmitter<IProduct>();
    @Output() editProd = new EventEmitter<IProduct>();

    //static $inject = ['emitterService', 'genericDataService', '$window', '$timeout'];


    //constructor(private emitter: IEmitterService, private genericDataService: any, @Inject(Window) private _window: Window) {
    constructor() {

    }

    ngOnInit(): void {

        if (this.dockable) {
            // this.getAllProducts();

            //_window.addEventListener('storage', event => {
            //    this.addProductToList(JSON.parse(event.newValue));
            //});

        }
    }

    public deleteProduct(product: IProduct) {

        this.delete.emit(product);
    };

    public update(product) {

        this.editProd.emit(product);
    };

    //public updateOnEnter(product, event) {

    //    if (event.key === "Enter") {
    //        this.update(product);
    //    };
    //};

    public toggleEditMode(item) {
        // Toggle
        item.editMode = !item.editMode;
    };

    //private addProductToList(item) {

    //    if (item) {
    //       // this.$timeout(() => (
    //        this.productList.push(item);
    //        // ), 0);
    //    }
    //}

    //private getAllProducts() {

    //    //this.genericDataService.getDataPromise('adminRepository').then(
    //    //    data => {
    //    //        if (data) {
    //    //            this.productList = data;
    //    //            //vm.productsReceived = true;
    //    //        }
    //    //    }
    //    //).catch(data => { }

    //    //    );
    //};
};
