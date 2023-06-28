import { Item, GildedRose } from '../app/gilded-rose';
import {expect} from "chai";

describe('Golden Master Test', function () {

    const gildedRose = new GildedRose([
        new Item('apple', 6, 0),
        new Item('pear', 10, 25),
        new Item('Aged Brie', 5, 30),
        new Item('orange', 0, 20),
        new Item('Aged Brie', 10, 50),
        new Item('Sulfuras, Hand of Ragnaros', 10, 80),
        new Item('Backstage passes to a TAFKAL80ETC concert', 9, 30),
        new Item('Backstage passes to a TAFKAL80ETC concert', 4, 13),
        new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
        new Item('Conjured Mana Cake', 6, 8),
        new Item('Conjured Mana Cake', 0, 8)]);
    const items = gildedRose.updateQuality();

    it('should increase the quality of Aged Brie', function() {
        expect(items[2].quality).to.equal(31);
    });

    it('should decrease the quality twice as fast of items passed the sell by date', function() {
        expect(items[3].quality).to.equal(18);
    })

    it('should not decrease the quality of an item below 0', function() {
        expect(items[0].quality).to.equal(0);
    })

    it('should not increase the quality of an item above 50', function() {
        expect(items[4].quality).to.equal(50);
    })

    it('should not change the sell date and quality of Sulfuras', function() {
        expect(items[5].sellIn).to.equal(10);
        expect(items[5].quality).to.equal(80);
    })

    it('should increase the value of backstage passes accordingly', function() {
        expect(items[6].quality).to.equal(32);
        expect(items[7].quality).to.equal(16);
        expect(items[8].quality).to.equal(0);
    })

    it('should decrease the quality of Conjured Mana Cake twice as fast', function() {
        expect(items[9].quality).to.equal(6);
        expect(items[10].quality).to.equal(4);
    })

});