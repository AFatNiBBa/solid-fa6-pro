
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-signal` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=duotone house-signal}
 * @preview ![house-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-signal.svg)
 */
const HouseSignal: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 224c0 3.5 .6 7 1.8 10.4c18.3 5.3 35.9 12.6 52.3 21.6l9.9 0 0 5.7c56.8 34.2 99.6 89.1 118.1 154.3L464 416c26.5 0 48-21.5 48-48l0-112 32 0c13.2 0 25-8.1 29.8-20.3c1.5-3.8 2.2-7.7 2.2-11.6c0-8.8-3.6-17.3-10.3-23.5l-208-192C351.6 2.8 343.8 0 336 0s-15.6 2.8-21.7 8.5l-208 192C99.6 206.7 96 215.2 96 224zm192-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-64z" />
        <path d="M0 280c0-13.3 10.7-24 24-24c128.1 0 232 103.9 232 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24zM0 480a32 32 0 1 1 64 0A32 32 0 1 1 0 480zM24 352c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default HouseSignal;