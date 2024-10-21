
import { Icon } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=solid display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-70.5-55.2c27.4-7.2 47.6-32.2 47.6-61.9l0-288c0-35.3-28.7-64-64-64L96 0C79.6 0 64.6 6.2 53.2 16.4L38.8 5.1zM113.9 64L544 64l0 288-62.6 0L113.9 64zM32 352c0 35.3 28.7 64 64 64l176 0-10.7 32L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32c0-2.1-.2-4.1-.6-6.1L446.6 448l-67.9 0L368 416l38 0-81.2-64L96 352l0-180.2L32 121.4 32 352z" />
    </Icon>
);

export default DisplaySlash;