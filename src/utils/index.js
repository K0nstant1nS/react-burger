import {
  SCROLL_ON_BUN,
  SCROLL_ON_SAUCE,
  SCROLL_ON_MAIN,
} from "../services/actions/ingredients-scroll";

export const handleScrollIniter = (target, dispatch) => {
  return (e) => {
    if (e.target.scrollTop < (target.sauceY + target.bunY) / 2) {
      dispatch({ type: SCROLL_ON_BUN });
    } else if (
      e.target.scrollTop >= (target.sauceY + target.bunY) / 2 &&
      e.target.scrollTop < (target.mainY + target.sauceY) / 2
    ) {
      dispatch({ type: SCROLL_ON_SAUCE });
    } else {
      dispatch({ type: SCROLL_ON_MAIN });
    }
  };
};
