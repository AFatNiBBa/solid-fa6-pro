
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lacrosse-stick-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lacrosse-stick-ball?s=duotone lacrosse-stick-ball}
 * @preview ![lacrosse-stick-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lacrosse-stick-ball.svg)
 */
const LacrosseStickBall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6c12.5 12.5 32.8 12.5 45.3 0l136-136c-18.7-11-34.3-26.6-45.3-45.3l-136 136C3.1 463.6 0 471.8 0 480zm416-48a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M264.8 117.7l-3.3 11.5c-5.6 19.6-15.1 37.9-27.8 53.9L205.8 218c-8.9 11.1-13.8 25-13.8 39.2c0 34.7 28.1 62.8 62.8 62.8c14.3 0 28.1-4.9 39.2-13.8l34.9-27.9c15.9-12.8 34.3-22.2 53.9-27.8l11.5-3.3c31.8-9.1 53.7-38.1 53.7-71.2c0 0 0 0 0 0c0-.1 0-.2 0-.3c0-19.9-13.6-48.1-38.6-73.1s-53.2-38.6-73.1-38.6l-.3 0s0 0 0 0c-33.1 0-62.1 21.9-71.2 53.7zM512 176s0 0 0 0c0 61.6-40.9 115.8-100.1 132.7L400.3 312c-11.5 3.3-22.2 8.8-31.5 16.2l-34.9 27.9c-22.5 18-50.4 27.8-79.2 27.8c-70 0-126.8-56.8-126.8-126.8c0-28.8 9.8-56.7 27.8-79.2l27.9-34.9c7.4-9.3 13-20 16.2-31.5l3.3-11.5C220.2 40.9 274.4 0 336 0c0 0 0 0 0 0l.3 0c43.8 0 87.4 26.4 118.4 57.3s57.3 74.5 57.3 118.4l0 .3z" />
    </Icon>
);

export default LacrosseStickBall;