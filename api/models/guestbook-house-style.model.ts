import { accentColors, doorStyles, facadeColors, facadeStyles } from '@api/guestbook-config';

export class GuestbookHouseStyleModel {
  facadeStyle: number;
  facadeColor: number;
  accentColor: number;
  doorStyle: number;

  constructor(style: any) {
    this.facadeStyle = Number(style?.facadeStyle);
    this.facadeColor = Number(style?.facadeColor);
    this.accentColor = Number(style?.accentColor);
    this.doorStyle = Number(style?.doorStyle);
  }

  isValid(): boolean {
    return !isNaN(this.facadeStyle) &&
      !isNaN(this.facadeColor) &&
      !isNaN(this.accentColor) &&
      !isNaN(this.doorStyle) &&
      this.facadeStyle >= 0 &&
      this.facadeColor >= 0 &&
      this.accentColor >= 0 &&
      this.doorStyle >= 0 &&
      this.facadeStyle < facadeStyles &&
      this.facadeColor < facadeColors &&
      this.accentColor < accentColors &&
      this.doorStyle < doorStyles;
  }
}
