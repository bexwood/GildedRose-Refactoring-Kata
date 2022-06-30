export function updateSellByDate(item) {
    item.sellIn -= 1;
    return item;
}

export function increaseQualityBy(value, quality){
    let newQuality = quality + value;
    return Math.min(newQuality, 50);
}

export function decreaseQualityBy(value, quality){
    let newQuality = quality - value;
    return Math.max(newQuality, 0);
}