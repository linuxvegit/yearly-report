export default class SizeUtils {
  static getValue(size) {
    return Number.parseFloat(size);
  }

  static getUnit(size) {
    return this.makeSafeString(size).substr(this.makeSafeString(SizeUtils.getValue(size)).length);
  }

  static makeSafeString(value) {
    return value == null ? '' : String(value);
  }
}