import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Conjured Mana Cake Degrades Twice as Fast Test', function () {
    const gildedRose = new GildedRose([
        new Item('Conjured Mana Cake', 6, 8),
        new Item('Conjured Mana Cake', 0, 8)]);
    const items = gildedRose.updateQuality();

    it('should decrease quality by 2', function() {
        expect(items[0].quality).to.equal(6);
        expect(items[1].quality).to.equal(4);
    })
})