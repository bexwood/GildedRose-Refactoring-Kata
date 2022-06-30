export default class Shop {
    constructor(items=[]){
        this.items = items;
    }

    getAgedBrie(){
        return this.items.filter(item => (item.name === 'Aged Brie'));
    }

    getSulfuras(){
        return this.items.filter(item => (item.name === 'Sulfuras, Hand of Ragnaros'));
    }

    getBackStagePasses(){
        return this.items.filter(item => (item.name === 'Backstage passes to a TAFKAL80ETC concert'));
    }

    getGeneralItems(){
        return this.items.filter(item => (item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.name !== 'Sulfuras, Hand of Ragnaros' && item.name !== 'Aged Brie'));
    }

    updateSellByDate(arrayOfItems){
        for (let item of arrayOfItems) {
            item.sellIn -= 1
        }
        return arrayOfItems
    }

    updateAgedBrieQuality(arrayOfAgedBrie){
        for (let item of arrayOfAgedBrie) {
            if (item.sellIn>0 && item.quality<50) {
                item.quality += 1
            } else if (item.sellIn<=0 && item.quality<49){
                item.quality += 2
            }
        }
        return arrayOfAgedBrie;
    }

    updateBackstagePassQuality(arrayOfBackstagePasses){
        for (let item of arrayOfBackstagePasses) {
            if (item.sellIn>10 && item.quality<50) {
                item.quality += 1
            } else if (item.sellIn>5 && item.quality<49){
                item.quality += 2
            } else if (item.sellIn>0 && item.quality<48){
                item.quality += 3
            } else if (item.sellIn<=0) {
                item.quality = 0
            }
        }
        return arrayOfBackstagePasses;
    }

    updateGeneralItemQuality(arrayOfItems){
        for (let item of arrayOfItems) {
            if (item.sellIn>0 && item.quality>0) {
                item.quality -= 1
            } else if (item.sellIn<=0 && item.quality>1){
                item.quality -= 2
            }
        }
        return arrayOfItems;
    }

    updateQuality(){
        let agedBrie = this.updateSellByDate(this.updateAgedBrieQuality(this.getAgedBrie()));
        let sulfuras = this.getSulfuras();
        let backstagePasses = this.updateSellByDate(this.updateBackstagePassQuality(this.getBackStagePasses()));
        let otherItems = this.updateSellByDate(this.updateGeneralItemQuality(this.getGeneralItems()));
        this.items = agedBrie.concat(sulfuras).concat(backstagePasses).concat(otherItems);
        return this.items;
    }