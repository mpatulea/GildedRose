import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Quality And SellIn Unchanged for Sulfuras Test', function () {
    const gildedRose = new GildedRose([
        new Item('Sulfuras, Hand of Ragnaros', 4, 80),
        new Item('Sulfuras, Hand of Ragnaros', 0, 80)]);
    const items = gildedRose.updateQuality();

    it('should not change quality or sell by date', function() {
        expect(items[0].quality).to.equal(80);
        expect(items[1].quality).to.equal(80);
        expect(items[0].sellIn).to.equal(4);
        expect(items[1].sellIn).to.equal(0);
    })
})