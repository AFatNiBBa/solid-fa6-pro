
import { Icon, generic } from "../../index";

/**
 * A component that renders the `field-hockey-stick-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/field-hockey-stick-ball?s=duotone field-hockey-stick-ball}
 * @preview ![field-hockey-stick-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/field-hockey-stick-ball.svg)
 */
const FieldHockeyStickBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zm10.2-321.3c26.6 17.8 53.2 35.5 79.9 53.3c20.4-29.6 40.9-59.1 61.3-88.7c15.1-21.8 9.6-51.7-12.2-66.8C482.9 2.8 473.4 0 464 0c-15.2 0-30.2 7.2-39.5 20.7l-62.2 90z" />
        <path d="M442.1 164l-79.9-53.3L162 400.3c-6.7 9.7-17.7 15.4-29.4 15.5c-20 .1-36.1-16.2-36-36.1l0-2.2c.1-7.3 2.2-14.4 6.2-20.6l17.3-26.5c14.5-22.2 8.3-51.9-13.9-66.4s-51.9-8.3-66.4 13.9L22.5 304.3C8.4 325.8 .8 350.9 .6 376.7l0 2.2C.1 452.3 59.5 512 132.9 511.8c43.2-.1 83.5-21.4 108.1-56.9L442.1 164z" />
    </Icon>
);

export default FieldHockeyStickBall;