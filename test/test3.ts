import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Quality Never Above 50 Test', function () {
    const gildedRose = new GildedRose([
        new Item('Aged Brie', 3, 50),
        new Item('Backstage passes to a TAFKAL80ETC concert', 6, 50)]);
    const items = gildedRose.updateQuality();

    it('should not increase quality above 50', function() {
        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(50);
    })
})