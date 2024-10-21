
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broom-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-ball?s=duotone broom-ball}
 * @preview ![broom-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/broom-ball.svg)
 */
const BroomBall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M329.4 201.4l45.3 45.3 192-192c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6S552.2 0 544 0s-16.4 3.1-22.6 9.4l-192 192zM384 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M409.4 281.4L294.6 166.6c-4.2-4.2-10-6.6-16-6.6c-12.5 0-22.6 10.1-22.6 22.6l0 29.1L364.3 320l29.1 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16zm-68.3 72L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8C76.5 307.5 64 337.7 64 369.2c0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9C0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8c30.6-30.6 45.9-73.1 42.3-115.8z" />
    </Icon>
);

export default BroomBall;