import {
  SAY_GOOD_MORNING,
  SAY_GOOD_AFTERNOON,
  SAY_GOOD_NIGHT,
} from "./actionTypes";

export const sayGoodMorning = () => ({
  type: SAY_GOOD_MORNING,
});
export const sayGoodAfterNoon = () => ({
  type: SAY_GOOD_AFTERNOON,
});
export const sayGoodNight = () => ({
  type: SAY_GOOD_NIGHT,
});
