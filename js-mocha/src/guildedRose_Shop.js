export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateSellByDate(item) {
        item.sellIn -= 1;
        return item;
    }

    updateBrieItem(item) {
        if (item.sellIn > 0 && item.quality < 50) {
            item.quality += 1
        } else if (item.sellIn <= 0 && item.quality < 49) {
            item.quality += 2
        }
        item = this.updateSellByDate(item);
        return item;
    };

    updateBackstagePassItem(item) {
        if (item.sellIn > 10 && item.quality < 50) {
            item.quality += 1
        } else if (item.sellIn > 5 && item.quality < 49) {
            item.quality += 2
        } else if (item.sellIn > 0 && item.quality < 48) {
            item.quality += 3
        } else if (item.sellIn <= 0) {
            item.quality = 0
        }
        item = this.updateSellByDate(item);
        return item;
    };

    updateGeneralItem(item) {
        if (item.sellIn > 0 && item.quality > 0) {
            item.quality -= 1;
        } else if (item.sellIn <= 0 && item.quality > 1) {
            item.quality -= 2;
        }
        item = this.updateSellByDate(item);
        return item;
    };

    updateQuality() {
        for (let item of this.items) {
            if (item.name === 'Aged Brie') {
                item = this.updateBrieItem(item);
            } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
                continue;
            } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
                item = this.updateBackstagePassItem(item);
            } else {
                item = this.updateGeneralItem(item);
            }
        }
        return this.items;
    };

};