
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=duotone stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 304C16 200 92.3 113.8 192 98.4c10.4-1.6 21.1-2.4 32-2.4s21.6 .8 32 2.4c37.5 5.8 71.7 21.6 99.7 44.6c16.6 13.6 31 29.7 42.8 47.7C419.7 223.3 432 262.2 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304zM200 192l0 128c0 13.3 10.7 24 24 24s24-10.7 24-24l0-128c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M144 32c0-17.7 14.3-32 32-32l48 0 48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-16 0 0 34.4c-10.4-1.6-21.1-2.4-32-2.4s-21.6 .8-32 2.4L192 64l-16 0c-17.7 0-32-14.3-32-32zM355.7 143l21.6-21.6c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-24.1 24.1c-11.7-18-26.2-34.1-42.8-47.7zM248 192l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-128c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
    </Icon>
);

export default Stopwatch;