
import { Icon, generic } from "../../index";

/**
 * A component that renders the `football-helmet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/football-helmet?s=duotone football-helmet}
 * @preview ![football-helmet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/football-helmet.svg)
 */
const FootballHelmet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M272 320l49.7 0-13.2-70.6 31.8-4 14 74.5L464 320c26.5 0 48 21.5 48 48l0 32 0 50.4c0 25.2-20.4 45.6-45.6 45.6l-17 0c-54.9 0-102-39.1-112.1-93l-9.6-51L288 352c-5.3-10.7-10.7-21.3-16-32zm88.3 32l6 32L480 384l0-16c0-8.8-7.2-16-16-16l-103.7 0zm14.4 64c13.1 28.7 42 48 74.7 48l17 0c7.5 0 13.6-6.1 13.6-13.6l0-34.4-105.3 0z" />
        <path d="M462.5 230.2c17.5-2.2 30.2-18.3 25.7-35.3C461.1 91.9 367.4 16 256 16C123.5 16 16 123.5 16 256c0 56.3 19.4 108.1 51.9 149.1c5.7 7.1 14.4 10.9 23.5 10.9l14 0c4.3 0 8.6 .9 12.6 2.6l93.4 40c8.3 3.5 17.2 5.4 26.1 5.4l1.7 0c35.7 0 64.7-29 64.7-64.7c0-10-2.3-20-6.8-28.9L259 294c-2-4-3-8.4-3-12.8c0-14.4 10.7-26.6 25.1-28.4l181.4-22.7zM176 312a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FootballHelmet;