"use strict";
var Product = (function () {
    function Product(name, desc, price, date, editMode) {
        if (name === void 0) { name = ''; }
        if (desc === void 0) { desc = ''; }
        if (price === void 0) { price = 0; }
        if (editMode === void 0) { editMode = false; }
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.date = date;
        this.editMode = editMode;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBRUksaUJBQW1CLElBQWlCLEVBQVMsSUFBaUIsRUFBUyxLQUFpQixFQUFTLElBQVcsRUFBUyxRQUF5QjtRQUFsSSxvQkFBd0IsR0FBeEIsU0FBd0I7UUFBRSxvQkFBd0IsR0FBeEIsU0FBd0I7UUFBRSxxQkFBd0IsR0FBeEIsU0FBd0I7UUFBc0Isd0JBQWdDLEdBQWhDLGdCQUFnQztRQUEzSCxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFPO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFDOUksQ0FBQztJQUNMLGNBQUM7QUFBRCxDQUFDLEFBSkQsSUFJQztBQUpZLGVBQU8sVUFJbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQcm9kdWN0IGltcGxlbWVudHMgSVByb2R1Y3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcgPSAnJywgcHVibGljIGRlc2M6IHN0cmluZyA9ICcnLCBwdWJsaWMgcHJpY2U6IG51bWJlciA9IDAsIHB1YmxpYyBkYXRlPzogRGF0ZSwgcHVibGljIGVkaXRNb2RlOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUHJvZHVjdCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBkZXNjOiBzdHJpbmc7XHJcbiAgICBwcmljZTogbnVtYmVyO1xyXG4gICAgZGF0ZT86IERhdGU7XHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbjtcclxufSJdfQ==