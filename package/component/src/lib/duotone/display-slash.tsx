
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=duotone display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 352c0 35.3 28.7 64 64 64l176 0-10.7 32L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32c0-2.2-.2-4.3-.6-6.3L446.8 448l-68.1 0L368 416l38.2 0-81.2-64L96 352l0-180.4L32 121.2zM53.2 16.4L113.9 64 544 64l0 288-62.6 0c26.3 20.6 52.6 41.3 79 61.9c27.4-7.2 47.6-32.2 47.6-61.9l0-288c0-35.3-28.7-64-64-64L96 0C79.6 0 64.6 6.2 53.2 16.4z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default DisplaySlash;