const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/Connection');
// create our Post model
class Wishlist extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.wishlist_id
    }).then(() => {
      return Post.findOne({
        where: {
          id: body.wishlist_id
        },
        attributes: [
          'id',
          'title',
          'description',
          'created_at',
        ],
          }
        
      );
    });
}
}

// create fields/columns for Post model
Wishlist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishlist'
  }
);

module.exports = Wishlist;
