import PropTypes from "prop-types";

export const ingredientProps = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
}).isRequired;

export const orderProps = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  number: PropTypes.number,
});

export const dataProps = PropTypes.arrayOf(
  PropTypes.shape(ingredientProps.isRequired).isRequired
).isRequired;
