import { increaseQualityBy, updateSellByDate } from "./itemHandler.js";

export default function updateBrieItem(item) {
    if (item.sellIn > 0) {
        item.quality = increaseQualityBy(1, item.quality);
    } else if (item.sellIn <= 0) {
        item.quality = increaseQualityBy(2, item.quality);
    }
    item = updateSellByDate(item);
    return item;
};