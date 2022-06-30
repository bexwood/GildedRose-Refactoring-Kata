import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe ("Aged Brie", function(){
  it("should have quality increased by one before sell in date", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(31);
  });

  it("should have quality increased by two after sell in date", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(32);
  });

  it("should never have quality greater then 50", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("should be able to start with negative quality", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 10, -10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(-9);
  });

  it("sell by date should decrease by one each day", function(){
    const gildedRose = new Shop([new Item("Aged Brie", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
  });
})
