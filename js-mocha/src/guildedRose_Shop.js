import updateBrieItem from "./brie.js";
import updateBackstagePassItem from "./backstagePass.js";
import updateGeneralItem from "./generalItem.js";

export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    checkIfConjured(item){
        return item.name.slice(0,8) === 'Conjured';
    }

    updateQuality() {
        for (let item of this.items) {
            let conjured = this.checkIfConjured(item)
            if (item.name.includes('Aged Brie')) {
                item = updateBrieItem(item, conjured);
            } else if (item.name.includes('Sulfuras')) {
                continue
            } else if (item.name.includes('Backstage pass')) {
                item = updateBackstagePassItem(item, conjured);
            } else {
                item = updateGeneralItem(item, conjured);
            }
        }
        return this.items;
    };
};