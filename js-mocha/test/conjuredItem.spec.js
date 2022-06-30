import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe ("conjuredItem", function(){
  it("should have quality decreased by two before sell in date", function(){
    const gildedRose = new Shop([new Item("Conjured", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(28);
  });

  it("should have quality decreased by four after sell in date", function(){
    const gildedRose = new Shop([new Item("Conjured", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(26);
  });

  it("should be able to start with quality greater then 50", function(){
    const gildedRose = new Shop([new Item("Conjured", 10,60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(58);
  });

  it("should never have negative quality", function(){
    const gildedRose = new Shop([new Item("Conjured", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("sell by date should decrease by one each day", function(){
    const gildedRose = new Shop([new Item("Conjured", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
  });
})