import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe ("Sulfras", function(){
  it("should log", function(){
    const gildedRose = new Shop([new Item("Sulfras", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfras");
  })
})