
import { Icon, generic } from "../../index";

/**
 * A component that renders the `stocking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=duotone stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 386.9l0 2.2C0 457 55 512 122.8 512c24.2 0 48-7.2 68.1-20.6l66-44c-20.4-20.3-33-48.3-33-79.4c0-61.9 50.1-112 112-112c5.4 0 10.8 .4 16 1.1L352 96 96 96l0 142.9c0 10.7-5.3 20.7-14.2 26.6L55.7 282.9C20.9 306.1 0 345.1 0 386.9z" />
        <path d="M96 0C78.3 0 64 14.3 64 32l0 32c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L96 0zM352 315.5l0-58.4c-5.2-.7-10.6-1.1-16-1.1c-61.9 0-112 50.1-112 112c0 31 12.6 59.1 33 79.4L295 422c35.6-23.7 57-63.7 57-106.5z" />
    </Icon>
);

export default Stocking;