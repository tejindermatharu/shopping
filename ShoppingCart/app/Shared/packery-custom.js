
/***********************************************
AUTHOR:      Tejinder Matharu
DESCRIPTION: Adds custom logic to the Packery prototype. Packery is a library for creating drag and drop panels. The custom logic here is
so that we can initialise a panel grid as well as being able to save the state of it and resetting to dafault state.
DEPENDENCIES: JQuery, Jquery UI, Packery
USEFULL LINKS:
http://packery.metafizzy.co/
https://jqueryui.com/draggable/
***********************************************/
(function () {

        var packery = window.Packery;
        
        // Add Packery.prototype methods

        // get JSON-friendly data for items positions
        packery.prototype.getShiftPositions = function (attrName) {
            attrName = attrName || 'id';
            var _this = this;
            return this.items.map(function (item) {
                return {
                    attr: item.element.getAttribute(attrName),
                    x: item.rect.x / _this.packer.width
                }
            });
        };

        packery.prototype.initShiftLayout = function (positions, attr) {
            if (!positions) {
                // if no initial positions, run packery layout
                this.layout();
                return;
            }
            // parse string to JSON
            if (typeof positions == 'string') {
                try {
                    positions = JSON.parse(positions);
                } catch (error) {
                    console.error('JSON parse error: ' + error);
                    this.layout();
                    return;
                }
            }

            attr = attr || 'id'; // default to id attribute
            this._resetLayout();
            
            // set item order and horizontal position from saved positions
            this.items = positions.map(function (itemPosition) {
                var selector = '[' + attr + '="' + itemPosition.attr + '"]';
                var itemElem = this.element.querySelector(selector);
                var item = this.getItem(itemElem);
                item.rect.x = itemPosition.x * this.packer.width;
                return item;
            }, this);
            this.shiftLayout();
        };

        function draggablePanel(gridName) {

            var dragPositions = 'dragPositions' + gridName;

            var self = this;

            // init Packery
            self.$grid = $('#' + gridName).packery({
                itemSelector: '.grid-item',
                columnWidth: 100
            });

            // get saved dragged positions
            var initPositions = localStorage.getItem(dragPositions);

            if (initPositions) {
                // init layout with saved positions
                self.$grid.packery('initShiftLayout', initPositions, 'data-item-id');
            }

            // make draggable
            var $items =  this.$grid.find('.grid-item').draggable();
            
            // bind drag events to Packery
            self.$grid.packery('bindUIDraggableEvents', $items);
            
            // save drag positions on event
            self.$grid.on('dragItemPositioned', function () {
                // save drag positions
                var positions = self.$grid.packery('getShiftPositions', 'data-item-id');
                localStorage.setItem(dragPositions, JSON.stringify(positions));
            });
        }

      window.document.DraggablePanel = draggablePanel;
})();

