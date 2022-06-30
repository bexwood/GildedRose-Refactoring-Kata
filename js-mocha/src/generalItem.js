import { decreaseQualityBy, updateSellByDate } from "./itemHandler.js";

export default function updateGeneralItem(item, conjured) {
    let factor = 1
    if (conjured) {
        factor = 2
    }
    if (item.sellIn > 0) {
        item.quality = decreaseQualityBy(factor * 1, item.quality);
    } else if (item.sellIn <= 0) {
        item.quality = decreaseQualityBy(factor * 2, item.quality);
    }
    item = updateSellByDate(item);
    return item;
};