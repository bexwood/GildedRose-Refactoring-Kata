import { increaseQualityBy, updateSellByDate } from "./itemHandler.js";

export default function updateBackstagePassItem(item) {
    if (item.sellIn > 10) {
        item.quality = increaseQualityBy(1, item.quality);
    } else if (item.sellIn > 5) {
        item.quality = increaseQualityBy(2, item.quality);
    } else if (item.sellIn > 0) {
        item.quality = increaseQualityBy(3, item.quality);
    } else if (item.sellIn <= 0) {
        item.quality = 0
    }
    item = updateSellByDate(item);
    return item;
};