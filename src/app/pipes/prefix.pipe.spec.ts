import { PrefixPipe } from './prefix.pipe';

describe('PrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new PrefixPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "test" to "prefix test"', () => {
    const pipe = new PrefixPipe();
    expect(pipe.transform('test', true, 'prefix')).toBe('testprefix');
  });

});
