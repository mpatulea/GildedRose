import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Quality Increase for Aged Brie Test', function () {
    const gildedRose = new GildedRose([
        new Item('Aged Brie', 4, 6),
        new Item('Aged Brie', 0, 6)]);
    const items = gildedRose.updateQuality();

    it('should increase quality', function() {
        expect(items[0].quality).to.equal(7);
        expect(items[1].quality).to.equal(8);
    })
})