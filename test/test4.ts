import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Quality of Backstage Passes Test', function () {
    const gildedRose = new GildedRose([
        new Item('Backstage passes to a TAFKAL80ETC concert', 10, 5),
        new Item('Backstage passes to a TAFKAL80ETC concert', 8, 9),
        new Item('Backstage passes to a TAFKAL80ETC concert', 5, 18),
        new Item('Backstage passes to a TAFKAL80ETC concert', 3, 27),
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 31)]);
    const items = gildedRose.updateQuality();

    it('should decrease according to sell by date', function() {
        expect(items[0].quality).to.equal(7);
        expect(items[1].quality).to.equal(11);
        expect(items[2].quality).to.equal(21);
        expect(items[3].quality).to.equal(30);
        expect(items[4].quality).to.equal(0);
    })
})