import { increaseQualityBy, updateSellByDate } from "./itemHandler.js";

export default function updateBackstagePassItem(item, conjured) {
    let factor = 1
    if (conjured) {
        factor = 2
    }
    if (item.sellIn > 10) {
        item.quality = increaseQualityBy(factor * 1, item.quality);
    } else if (item.sellIn > 5) {
        item.quality = increaseQualityBy(factor * 2, item.quality);
    } else if (item.sellIn > 0) {
        item.quality = increaseQualityBy(factor * 3, item.quality);
    } else if (item.sellIn <= 0) {
        item.quality = 0
    }
    item = updateSellByDate(item);
    return item;
};