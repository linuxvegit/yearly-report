import Achievement from './Achievement';

export default class Category {
  constructor(data) {
    /**
     * @type {string}
     * @private
     */
    this.title = data['title'] || '';

    /**
     * @type {Achievement[]}
     * @private
     */
    this.achievements = (data['achievements'] || []).map(achievement => new Achievement(achievement));
  }

  /**
   * @returns {string}
   */
  getTitle() {
    return this.title;
  }

  /**
   * @returns {Achievement[]}
   */
  getAchievements() {
    return this.achievements;
  }

  /**
   * @returns {{title: string, achievements: {title: string, images: string[]}[]}}
   */
  toJSON() {
    return {
      'title': this.title,
      'achievements': this.achievements.map(achievement => achievement.toJSON())
    }
  }
}