
import { Icon, generic } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=duotone compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 256c0 141.4 114.6 256 256 256c55.2 0 106.3-17.5 148.1-47.2L317 345.8l-90.6 34.8c-19.4 7.5-38.5-11.6-31-31l29.4-76.5L82.3 160.8C70.5 190.2 64 222.4 64 256zM134.2 79.9l136 106.6 143.3-55.1c19.4-7.5 38.5 11.6 31 31L397.1 285.9c46.1 36.1 92.2 72.3 138.3 108.4C561.1 354.5 576 307 576 256C576 114.6 461.4 0 320 0C246.8 0 180.9 30.7 134.2 79.9z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default CompassSlash;