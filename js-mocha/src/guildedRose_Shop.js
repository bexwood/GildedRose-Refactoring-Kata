export default class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateSellByDate(item) {
        item.sellIn -= 1;
        return item;
    }

    increaseQualityBy(value, quality){
        let newQuality = quality + value;
        return Math.min(newQuality, 50);
    }

    decreaseQualityBy(value, quality){
        let newQuality = quality - value;
        return Math.max(newQuality, 0);
    }

    updateBrieItem(item) {
        if (item.sellIn > 0) {
            item.quality = this.increaseQualityBy(1, item.quality);
        } else if (item.sellIn <= 0) {
            item.quality = this.increaseQualityBy(2, item.quality);
        }
        item = this.updateSellByDate(item);
        return item;
    };

    updateBackstagePassItem(item) {
        if (item.sellIn > 10) {
            item.quality = this.increaseQualityBy(1, item.quality);
        } else if (item.sellIn > 5) {
            item.quality = this.increaseQualityBy(2, item.quality);
        } else if (item.sellIn > 0) {
            item.quality = this.increaseQualityBy(3, item.quality);
        } else if (item.sellIn <= 0) {
            item.quality = 0
        }
        item = this.updateSellByDate(item);
        return item;
    };

    updateGeneralItem(item, conjured) {
        let factor = 1
        if (conjured) {
            factor = 2
        }
        if (item.sellIn > 0) {
            item.quality = this.decreaseQualityBy(factor * 1, item.quality);
        } else if (item.sellIn <= 0) {
            item.quality = this.decreaseQualityBy(factor * 2, item.quality);
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
            } else if (item.name === 'Conjured') {
                item = this.updateGeneralItem(item, true);
            } else {
                item = this.updateGeneralItem(item, false);
            }
        }
        return this.items;
    };
};