
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-magnifying-glass?s=duotone building-magnifying-glass}
 * @preview ![building-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/building-magnifying-glass.svg)
 */
const BuildingMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 48C0 21.5 21.5 0 48 0L336 0c26.5 0 48 21.5 48 48l0 125.3c-27.6 12-51.1 31.6-67.9 56.2c-2.9-3.4-7.2-5.5-12.1-5.5l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l19.2 0c-2.1 10.3-3.2 21-3.2 32c0 65.6 39.5 121.9 95.9 146.7C382.6 491.9 361.6 512 336 512l-96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 80-96 0c-26.5 0-48-21.5-48-48L0 48zm64 64l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm96-128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm96-128l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M528 320.2a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM519.9 426c-20.5 14-45.3 22.1-71.9 22.1c-70.7 0-128-57.3-128-128s57.3-128 128-128s128 57.3 128 128c0 26.7-8.2 51.4-22.1 71.9L633 471.2c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L519.9 426z" />
    </Icon>
);

export default BuildingMagnifyingGlass;