export default class Category {
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
    this.images = data['images'] || [];
  }

  /**
   * @returns {string}
   */
  getTitle() {
    return this.title;
  }

  /**
   * @return {string[]}
   */
  getImages() {
    return this.images;
  }


  /**
   * @return {{title: string, images: string[]}}
   */
  toJSON() {
    return {
      'title': this.title,
      'images': this.images
    }
  }
}