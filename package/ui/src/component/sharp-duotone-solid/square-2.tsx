
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-2` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-2?s=sharp-duotone-solid square-2}
 * @preview ![square-2](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-2.svg)
 */
const Square_2: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zM126.4 173.4c6.4-4.8 12.7-9.7 19.1-14.5c5.4-4.1 10.8-8.2 16.2-12.3c15.8-12 35.2-18.4 55.1-18.1c1.2 0 2.3 0 3.4 .1c46.5 .7 83.8 38.6 83.8 85.1c0 23.5-9.7 46-26.9 62.1c-21.5 20.1-42.9 40.3-64.4 60.4c27.8 0 55.5 0 83.3 0c8 0 16 0 24 0l0 48c-8 0-16 0-24 0c-48 0-96 0-144 0c-8 0-16 0-24 0l0-34.4c2.5-2.4 5.1-4.7 7.6-7.1c36.2-34 72.5-67.9 108.7-101.9c7.5-7 11.7-16.8 11.7-27.1c0-20.3-16.3-36.8-36.6-37.1c-1.1 0-2.3 0-3.4-.1c-9.1-.1-18 2.8-25.3 8.3c-5.4 4.1-10.8 8.2-16.2 12.3c-6.4 4.9-12.7 9.7-19.1 14.5c-9.7-12.7-19.4-25.5-29.1-38.2z" />
        <path d="M216.7 128.3c-19.9-.3-39.3 6.1-55.1 18.1l-16.2 12.3-19.1 14.5 29.1 38.2L174.5 197l16.2-12.3c7.2-5.5 16.1-8.4 25.3-8.3l3.4 .1c20.3 .3 36.6 16.8 36.6 37.1c0 10.3-4.2 20.1-11.7 27.1L135.6 342.5l-7.6 7.1 0 34.4 24 0 144 0 24 0 0-48-24 0-83.3 0 64.4-60.4C294.3 259.5 304 237 304 213.5c0-46.5-37.3-84.4-83.8-85.1l-3.4-.1z" />
    </Icon>
);

export default Square_2;