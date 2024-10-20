
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stopwatch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stopwatch?s=sharp-duotone-solid stopwatch}
 * @preview ![stopwatch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/stopwatch.svg)
 */
const Stopwatch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 304C16 200 92.3 113.8 192 98.4c10.4-1.6 21.1-2.4 32-2.4s21.6 .8 32 2.4c37.5 5.8 71.7 21.6 99.7 44.6c16.6 13.6 31 29.7 42.8 47.7C419.7 223.3 432 262.2 432 304c0 114.9-93.1 208-208 208S16 418.9 16 304zM200 168l0 24 0 128 0 24 48 0 0-24 0-128 0-24-48 0z" />
        <path d="M144 0l48 0 64 0 48 0 0 64-48 0 0 34.4c-10.4-1.6-21.1-2.4-32-2.4s-21.6 .8-32 2.4L192 64l-48 0 0-64zM355.7 143l21.6-21.6L400 98.7 445.3 144l-22.6 22.6-24.1 24.1c-11.7-18-26.2-34.1-42.8-47.7zM248 192l0 128 0 24-48 0 0-24 0-128 0-24 48 0 0 24z" />
    </Icon>
);

export default Stopwatch;