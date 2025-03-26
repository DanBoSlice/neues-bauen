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
})
