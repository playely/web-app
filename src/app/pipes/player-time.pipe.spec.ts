import { PlayerTimePipe } from './player-time.pipe';

describe('PlayerTimePipe', () => {
  it('create an instance', () => {
    const pipe = new PlayerTimePipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms 3600000 to "1:00:00"', () => {
    const pipe = new PlayerTimePipe();
    expect(pipe.transform(3600000)).toBe('01:00:00');
  });

  it('transforms 120000 to "2:00"', () => {
    const pipe = new PlayerTimePipe();
    expect(pipe.transform(120000)).toBe('02:00');
  });

  it('transforms 60000 to "1:00"', () => {
    const pipe = new PlayerTimePipe();
    expect(pipe.transform(60000)).toBe('01:00');
  });

  it('transforms 30000 to "0:30"', () => {
    const pipe = new PlayerTimePipe();
    expect(pipe.transform(30000)).toBe('00:30');
  });

  it('transforms 10000 to "0:10"', () => {
    const pipe = new PlayerTimePipe();
    expect(pipe.transform(10000)).toBe('00:10');
  });
});
