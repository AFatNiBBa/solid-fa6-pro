
import { Icon, generic } from "../../index";

/**
 * A component that renders the `field-hockey-stick-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/field-hockey-stick-ball?s=sharp-duotone-solid field-hockey-stick-ball}
 * @preview ![field-hockey-stick-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/field-hockey-stick-ball.svg)
 */
const FieldHockeyStickBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm8.8-322.3c.1 .1 .3 .2 .4 .3c26.5 17.7 53 35.4 79.5 53l38.9-56.9 27.1-39.6L427.5 12.3 400.4 51.9l-39.6 57.8z" />
        <path d="M441 163.3L361.2 110 161.9 400.2c-6.7 9.7-17.6 15.5-29.4 15.5c-19.9 .1-36-16.1-35.9-36l0-2.4c.1-7.3 2.2-14.4 6.2-20.6l17.3-26.5 26.3-40.2L66.1 237.6 39.8 277.7 22.5 304.3C8.4 325.8 .8 350.9 .6 376.7l0 2.4C.1 452.3 59.5 512 132.8 511.8c43.3-.1 83.7-21.5 108.2-57.2L441 163.3z" />
    </Icon>
);

export default FieldHockeyStickBall;