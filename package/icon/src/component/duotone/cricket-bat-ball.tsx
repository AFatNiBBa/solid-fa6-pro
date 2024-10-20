
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cricket-bat-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cricket-bat-ball?s=duotone cricket-bat-ball}
 * @preview ![cricket-bat-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cricket-bat-ball.svg)
 */
const CricketBatBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.5 374.4c.8 11.3 2.8 28.6 8.2 46.4C13.8 438.1 22.9 457.9 39 473c15 16.2 34.9 25.2 52.2 30.4c17.8 5.4 35.1 7.4 46.4 8.2c16 1.1 30.4-5.6 40.4-15.6C236.7 437.3 295.3 378.6 353.9 320c-38 0-76 0-113.9 0c-26.5 0-48-21.5-48-48l0-113.9C133.3 216.7 74.7 275.3 16.1 334C6.1 344-.6 358.4 .5 374.4zM224 126.1L224 272c0 8.8 7.2 16 16 16c48.6 0 97.3 0 145.9 0c7.7-7.7 15.4-15.4 23-23c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17c-13.8-13.8-27.6-27.6-41.4-41.4c-15.1-15.1-30.2-30.2-45.3-45.3L281 103c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7c-7.7 7.7-15.4 15.4-23 23z" />
        <path d="M502.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-135 135 45.3 45.3 135-135c12.5-12.5 12.5-32.8 0-45.3zM385.9 288L240 288c-8.8 0-16-7.2-16-16l0-145.9-32 32L192 272c0 26.5 21.5 48 48 48l113.9 0 32-32zM512 432a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CricketBatBall;