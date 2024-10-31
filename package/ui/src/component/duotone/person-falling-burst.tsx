
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-falling-burst` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling-burst?s=duotone person-falling-burst}
 * @preview ![person-falling-burst](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-falling-burst.svg)
 */
const PersonFallingBurst: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M292 219.6c0 1.2 .1 2.4 .4 3.6c1.5 6.4 6.7 11.2 13.1 12.2l78.7 12.2L379.5 314c4.7 6.3 9.4 12.5 14.1 18.8c.3 .4 .6 .8 .9 1.3s.6 .9 .8 1.3c.5 .9 1 1.8 1.5 2.7c.9 1.8 1.6 3.7 2.1 5.6c2.4-.7 4.6-1.9 6.5-3.6L464 286.1l58.6 53.9c4.8 4.4 11.9 5.5 17.8 2.6s9.5-9 9-15.5l-5.6-79.4 78.7-12.2c6.5-1 11.7-5.9 13.1-12.2c.3-1.2 .4-2.4 .4-3.6c0-5.2-2.5-10.1-6.9-13.2l-65.6-45.1L603 92.2c3.3-5.7 2.7-12.8-1.4-17.9s-10.9-7.2-17.2-5.3L508.3 92.1l-29.4-74C476.4 12 470.6 8 464 8s-12.4 4-14.9 10.1l-29.4 74L343.6 68.9c-6.3-1.9-13.1 .2-17.2 5.3s-4.6 12.2-1.4 17.9l39.5 69.1-65.6 45.1c-4.4 3-6.9 8-6.9 13.2z" />
        <path d="M224 0c17.7 0 32 14.3 32 32l0 9.8c0 54.6-27.9 104.6-72.5 133.6l.2 .3L240.5 256l71.5 0c15.1 0 29.3 7.1 38.4 19.2l43.2 57.6c10.6 14.1 7.7 34.2-6.4 44.8s-34.2 7.7-44.8-6.4L304 320l-80 0-1.4 0 92.3 142.6c9.6 14.8 5.4 34.6-9.5 44.3s-34.6 5.4-44.3-9.5L100.5 249.2c-2.9 9.2-4.5 19-4.5 29L96 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-73.8C32 213 71.6 154.5 132.1 130.3C168.3 115.8 192 80.8 192 41.8l0-9.8c0-17.7 14.3-32 32-32zM48 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default PersonFallingBurst;