import Category from './Category';

export default class Period {
  constructor(data) {
    /**
     * @type {string}
     * @private
     */
    this.title = data['title'] || '';

    /**
     * @type {string}
     * @private
     */
    this.time = data['time'] || '';

    /**
     * @type {string}
     * @private
     */
    this.color = data['color'] || 'red';

    /**
     * @type {Category[]}
     * @private
     */
    this.categories = (data['categories'] || []).map(category => new Category(category));
  }

  /**
   * @returns {string}
   */
  getTitle() {
    return this.title;
  }

  /**
   * @returns {string}
   */
  getTime() {
    return this.time;
  }

  /**
   * @return {string}
   */
  getColor() {
    return this.color;
  }

  /**
   * @returns {Category[]}
   */
  getCategories() {
    return this.categories;
  }

  /**
   * @return {{title: string, time: string, categories: {title: string, images: string[]}[]}}
   */
  toJSON() {
    return {
      'title': this.title,
      'time': this.time,
      'categories': this.categories.map(category => category.toJSON())
    };
  }
}