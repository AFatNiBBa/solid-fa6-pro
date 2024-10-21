
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tent-arrow-down-to-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tent-arrow-down-to-line?s=duotone tent-arrow-down-to-line}
 * @preview ![tent-arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tent-arrow-down-to-line.svg)
 */
const TentArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M159.6 448L384 448l0-118.1c0-5.5 4.4-9.9 9.9-9.9c3.7 0 7.2 2.1 8.8 5.5L464 448l144 0c.1 0 .2 0 .4 0l-.7-4.7-24-160c-1.2-8.2-5.6-15.7-12.3-20.7l-168-128c-5.7-4.4-12.6-6.5-19.4-6.5s-13.7 2.2-19.4 6.5l-168 128c-6.6 5-11 12.5-12.3 20.7l-24 160-.7 4.7z" />
        <path d="M240.1 145.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-39.9 36L168 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 122.1-39.9-36c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9l80 72c9.1 8.2 23 8.2 32.1 0l80-72zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l576 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default TentArrowDownToLine;