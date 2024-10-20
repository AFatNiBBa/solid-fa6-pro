
import { Icon, generic } from "../../index";

/**
 * A component that renders the `temperature-sun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/temperature-sun?s=duotone temperature-sun}
 * @preview ![temperature-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/temperature-sun.svg)
 */
const TemperatureSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M320 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-33.2-11.3-63.8-30.1-88.1c-.9-1.2-1.5-2.2-1.7-2.8c-.1-.3-.2-.5-.2-.6L576 112C576 50.2 525.9 0 464 0S352 50.2 352 112l0 164.4c0 .1-.1 .3-.2 .6c-.2 .6-.8 1.6-1.7 2.8c-18.9 24.4-30.1 55-30.1 88.1zm64 0c0-18.5 6.2-35.4 16.7-48.9c8.2-10.6 15.3-25.2 15.3-42.5L416 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 164.5c0 17.3 7.1 31.9 15.3 42.5C537.8 332.6 544 349.5 544 368c0 44.2-35.8 80-80 80s-80-35.8-80-80z" />
        <path d="M320.6 98.5c-.4 4.4-.6 8.9-.6 13.5l0 146.8c-20.2 28.6-32 63.5-32 101.2c0 18.7 2.9 36.7 8.3 53.7c-.7 .4-1.4 .8-2.1 1.1c-5.1 2.1-10.9 1.5-15.4-1.6L208 363.5l-70.8 49.6c-4.5 3.1-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6s8.7 6.7 9.6 12.1l14.1 84.7 2.7 .5zM208 144a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM464 96c8.8 0 16 7.2 16 16l0 210.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3L448 112c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default TemperatureSun;