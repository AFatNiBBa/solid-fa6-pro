
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-arrow-down-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-arrow-down-to-line?s=duotone person-arrow-down-to-line}
 * @preview ![person-arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-arrow-down-to-line.svg)
 */
const PersonArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 288c0 10.9 5.5 21.5 15.5 27.5c15.1 9.1 34.8 4.2 43.9-10.9L120 256.9 120 448l64 0 0-96 16 0 0 96 64 0 0-191.1 28.6 47.5c9.1 15.1 28.8 20 43.9 10.9c10-6 15.5-16.6 15.5-27.5c0-5.6-1.5-11.3-4.6-16.5l-58.3-97c-17.4-28.9-48.6-46.6-82.3-46.6l-29.7 0c-33.7 0-64.9 17.7-82.3 46.6l-58.3 97C33.5 276.7 32 282.4 32 288zM144 48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M496 32c-17.7 0-32 14.3-32 32l0 242.7-25.4-25.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L528 306.7 528 64c0-17.7-14.3-32-32-32zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default PersonArrowDownToLine;