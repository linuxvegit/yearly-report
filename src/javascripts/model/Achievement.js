export default class Achievement {
  constructor(data) {
    /**
     * @type {string}
     * @private
     */
    this.title = data['title'] || '';

    /**
     * @type {string[]}
     * @private
     */
    this.images = data['images'] | [];
  }

  /**
   * @returns {string}
   */
  getTitle() {
    return this.title;
  }

  /**
   * @returns {string[]}
   */
  getImages() {
    return this.images;
  }

  /**
   * @returns {{title: string, images: string[]}}
   */
  toJSON() {
    return {
      'title': this.title,
      'images': this.images
    }
  }
}