
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-slash?s=duotone gun-slash}
 * @preview ![gun-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gun-slash.svg)
 */
const GunSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 208c0 17.7 14.3 32 32 32l10 0c20.8 0 36.1 19.6 31 39.8L65 440.2c-2.4 9.6-.2 19.7 5.8 27.5S86.1 480 96 480l96 0c14.7 0 27.5-10 31-24.2L249 352l75.9 0L32 121.2zM113.9 64l81.7 64L496 128c8.8 0 16 7.2 16 16s-7.2 16-16 16l-259.6 0c34 26.7 68 53.3 102.1 80l43.4 0-9.5 26.6c13.3 10.4 26.5 20.8 39.8 31.2L432.9 240l31.1 0c8.5 0 16.6-3.4 22.6-9.4L509.3 208l66.7 0c17.7 0 32-14.3 32-32l0-80c0-17.7-14.3-32-32-32l-16 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8L113.9 64z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default GunSlash;