import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Quality Decrease After Sell By Date Test', function () {
    const gildedRose = new GildedRose([
        new Item('Orange', 0, 20),
        new Item('Apple', 1, 8),
        new Item('Apple', 0, 6)]);
    const items = gildedRose.updateQuality();

    it('should decrease quality twice as fast after sell by date', function() {
        expect(items[0].quality).to.equal(18);
        expect(items[1].quality).to.equal(7);
        expect(items[2].quality).to.equal(4);
    })
})