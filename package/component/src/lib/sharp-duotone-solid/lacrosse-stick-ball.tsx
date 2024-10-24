
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lacrosse-stick-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lacrosse-stick-ball?s=sharp-duotone-solid lacrosse-stick-ball}
 * @preview ![lacrosse-stick-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lacrosse-stick-ball.svg)
 */
const LacrosseStickBall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6 120-120c-18.7-11-34.3-26.6-45.3-45.3l-120 120L2.7 464zM416 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M264.8 117.7l-10 35.1L253 159l-4 5-43.2 54c-8.9 11.1-13.8 25-13.8 39.2c0 34.7 28.1 62.8 62.8 62.8c14.3 0 28.1-4.9 39.2-13.8L348 263l5-4 6.2-1.8 35.1-10c31.8-9.1 53.7-38.1 53.7-71.2c0 0 0 0 0 0l0-.3c0-19.9-13.6-48.1-38.6-73.1s-53.2-38.6-73.1-38.6l-.3 0s0 0 0 0c-33.1 0-62.1 21.9-71.2 53.7zM512 176.1c0 61.6-40.9 115.7-100.1 132.7L383 317l-49 39.2c-22.5 18-50.4 27.8-79.2 27.8c-70 0-126.8-56.8-126.8-126.8c0-28.8 9.8-56.7 27.8-79.2L195 129l8.3-28.9C220.2 40.9 274.4 0 336 0c0 0 0 0 0 0l.3 0c43.8 0 87.4 26.4 118.4 57.3s57.3 74.5 57.3 118.4c0 .1 0 .3 0 .4z" />
    </Icon>
);

export default LacrosseStickBall;