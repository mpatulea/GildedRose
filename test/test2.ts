import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Quality Never Below 0 Test', function () {
    const gildedRose = new GildedRose([
        new Item('Orange', 3, 0),
        new Item('Apple', 6, 0)]);
    const items = gildedRose.updateQuality();

    it('should not decrease quality below 0', function() {
        expect(items[0].quality).to.equal(0);
        expect(items[1].quality).to.equal(0);
    })
})