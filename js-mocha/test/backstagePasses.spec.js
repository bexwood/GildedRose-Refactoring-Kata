import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe ("Backstage passes to a TAFKAL80ETC concert", function(){
  it("should have quality increased by one when more than 10 days before sell in date", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(31);
  });

  it("should have quality increased by two when 10-6 days before sell in date", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(32);
  });

  it("should have quality increased by three when 5 or less days before sell in date", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(33);
  });

  it("should have quality of 0 past sell in date", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("should never have quality greater then 50", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

  it("should be able to start with negative quality", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, -10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(-9);
  });

  it("sell by date should decrease by one each day", function(){
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
  });
});
