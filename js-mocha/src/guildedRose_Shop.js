import updateBrieItem from "./brie.js";
import updateBackstagePassItem from "./backstagePass.js";
import updateGeneralItem from "./generalItem.js";


export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let item of this.items) {
            if (item.name === 'Aged Brie') {
                item = updateBrieItem(item);
            } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
                continue;
            } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                item = updateBackstagePassItem(item);
            } else if (item.name === 'Conjured') {
                item = updateGeneralItem(item, true);
            } else {
                item = updateGeneralItem(item, false);
            }
        }
        return this.items;
    };
};