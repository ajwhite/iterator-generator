'use strict';

import chai from 'chai';
import iterable from './iterator';
var {expect} = chai;

describe('Iterator', () => {
  it ('should iterator over an entire array', () => {
    var list = ['a', 'b', 'c', 'd', 'e'];
    var iterator = iterable(list);
    expect(iterator.next().value).to.be.eql('a');
    expect(iterator.next().value).to.be.eql('b');
    expect(iterator.next().value).to.be.eql('c');
    expect(iterator.next().value).to.be.eql('d');
    expect(iterator.next().value).to.be.eql('e');
  });
  it ('should indicate when the iterator has completed', () => {
    var list = ['a'];
    var iterator = iterable(list);
    expect(iterator.next().done).to.be.false;
    expect(iterator.next().done).to.be.true;
  });
  it ('should done immediately if the list is empty', () => {
    var list = [];
    var iterator = iterable(list);
    expect(iterator.next().done).to.be.true;
  });
  it ('should only iterate over arrays', () => {
    var iterator = iterable('string');
    expect(iterator.next().done).to.be.true;

    iterator = iterable(123);
    expect(iterator.next().done).to.be.true;

    iterator = iterable(true);
    expect(iterator.next().done).to.be.true;

    iterator = iterable(null);
    expect(iterator.next().done).to.be.true;

    iterator = iterable();
    expect(iterator.next().done).to.be.true;

    iterator = iterable({});
    expect(iterator.next().done).to.be.true;

    iterator = iterable({foo: 'bar'});
    expect(iterator.next().done).to.be.true;
  });
});
