
import { Icon, generic } from "../../index";

/**
 * A component that renders the `football-helmet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/football-helmet?s=sharp-duotone-solid football-helmet}
 * @preview ![football-helmet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/football-helmet.svg)
 */
const FootballHelmet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M280 320l41.7 0-13.2-70.6c10.6-1.3 21.2-2.7 31.8-4l14 74.5L496 320l16 0 0 16 0 72 0 72 0 16-16 0-128 0-13.3 0-2.4-13-13.5-72-11.1-59L292 352c-4-10.7-8-21.3-12-32zm80.3 32l7.5 40L480 392l0-40-119.7 0zm13.5 72l7.5 40 98.7 0 0-40-106.2 0z" />
        <path d="M256 256l238.2-29.8C479.5 107.7 378.5 16 256 16C123.5 16 16 123.5 16 256c0 61.5 23.1 117.5 61.1 160l34.9 0 99.5 42.6c8.3 3.5 17.2 5.4 26.1 5.4c36.7 0 66.4-29.7 66.4-66.4l0-1.3c0-8.1-1.5-16.2-4.3-23.8L256 256zm-80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FootballHelmet;