import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe ("Sulfuras, Hand of Ragnaros", function(){
  it("should not decrease in quality before sell by date", function(){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it("should not decrease in quality after sell by date", function(){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it("sell by date should not decrease", function(){
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(10);
  });
});