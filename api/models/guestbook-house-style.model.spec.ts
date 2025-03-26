import { GuestbookHouseStyleModel } from './guestbook-house-style.model';

describe('GuestbookHouseStyleDto', () => {
  it('should handle null', () => {
    const style = new GuestbookHouseStyleModel(null);

    expect(style.isValid()).toBe(false);
  });

  it('should not be valid if empty', () => {
    const style = new GuestbookHouseStyleModel({});

    expect(style.isValid()).toBe(false);
  });

  it('should be valid', () => {
    const style = new GuestbookHouseStyleModel({
      facadeStyle: 0,
      facadeColor: 0,
      accentColor: 0,
      doorStyle: 0,
    });

    expect(style.isValid()).toBe(true);
  });
})
