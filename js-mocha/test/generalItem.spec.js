import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe ("generalItem", function(){
  it("should have quality decreased by one before sell in date", function(){
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(29);
  });

  it("should have quality decreased by two after sell in date", function(){
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(28);
  });

  it("should be able to start with quality greater then 50", function(){
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 10,60)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(59);
  });

  it("should never have negative quality", function(){
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(0);
  });

  it("sell by date should decrease by one each day", function(){
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(9);
  });
})