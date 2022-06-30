import { expect } from 'chai';
import Item from '../src/guildedRose_Item.js';
import Shop from '../src/guildedRose_Shop.js';

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("fixme");
  });

});
