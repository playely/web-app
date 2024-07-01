import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms 120 to "2 h 0 min"', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(120)).toBe('2 h 0 min');
  });

  it('transforms 60 to "1 h 0 min"', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(60)).toBe('1 h 0 min');
  });

  it('transforms 30 to "30 min"', () => {
    const pipe = new DurationPipe();
    expect(pipe.transform(30)).toBe('30 min');
  });
});
