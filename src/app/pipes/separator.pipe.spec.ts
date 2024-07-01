import { SeparatorPipe } from './separator.pipe';

describe('SeparatorPipe', () => {
  it('create an instance', () => {
    const pipe = new SeparatorPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms [] to ""', () => {
    const pipe = new SeparatorPipe();
    expect(pipe.transform([])).toBe('');
  });

  it('transforms undefined to ""', () => {
    const pipe = new SeparatorPipe();
    expect(pipe.transform(undefined)).toBe('');
  });

  it('transforms ["test1", "test2"] to "test1, test2"', () => {
    const pipe = new SeparatorPipe();
    expect(pipe.transform([{name: 'test1'}, {name: 'test2'}])).toBe('test1, test2');
  });
});
