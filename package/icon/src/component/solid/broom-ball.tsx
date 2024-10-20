
import { Icon } from "../../index";

/**
 * A component that renders the `broom-ball` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broom-ball?s=solid broom-ball}
 * @preview ![broom-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/broom-ball.svg)
 */
const BroomBall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M566.6 9.4c12.5 12.5 12.5 32.8 0 45.3l-192 192 34.7 34.7c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6l-29.1 0L256 211.7l0-29.1c0-12.5 10.1-22.6 22.6-22.6c6 0 11.8 2.4 16 6.6l34.7 34.7 192-192c12.5-12.5 32.8-12.5 45.3 0zm-344 225.5L341.1 353.4c3.7 42.7-11.7 85.2-42.3 115.8C271.4 496.6 234.2 512 195.5 512L22.1 512C9.9 512 0 502.1 0 489.9c0-6.3 2.7-12.3 7.3-16.5L133.7 359.7c4.2-3.7-.4-10.4-5.4-7.9L77.2 377.4c-6.1 3-13.2-1.4-13.2-8.2c0-31.5 12.5-61.7 34.8-84l8-8c30.6-30.6 73.1-45.9 115.8-42.3zM464 352a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default BroomBall;