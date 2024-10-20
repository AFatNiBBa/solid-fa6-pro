
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shuttle-space` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuttle-space?s=duotone shuttle-space}
 * @preview ![shuttle-space](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shuttle-space.svg)
 */
const ShuttleSpace: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 80l0 48 8 0 56 0 0-96L80 32C53.5 32 32 53.5 32 80zm0 304l0 48c0 26.5 21.5 48 48 48l16 0 0-96-56 0-8 0zM128 32l0 99.7c16.1 5.1 30.1 15.1 40 28.3l237.3 0L245.2 63.9C210.4 43 170.6 32 130 32l-2 0zm0 348.3l0 99.7 2 0c40.6 0 80.4-11 115.2-31.9L405.3 352 168 352c-.6 .8-1.3 1.6-1.9 2.4s-1.3 1.6-2 2.4c-1.4 1.5-2.8 3-4.3 4.5c-3 2.9-6.1 5.5-9.5 7.9c-6.7 4.8-14.3 8.6-22.3 11.1z" />
        <path d="M0 168c0-22.1 17.9-40 40-40l64 0c26.2 0 49.4 12.6 64 32l288 0c69.3 0 135 22.7 179.2 81.6c6.4 8.5 6.4 20.3 0 28.8C591 329.3 525.3 352 456 352l-288 0c-14.6 19.4-37.8 32-64 32l-64 0c-22.1 0-40-17.9-40-40l0-16L0 184l0-16zM512 268.4l0-24.9c0-19.6-15.9-35.6-35.6-35.6c-2.5 0-4.4 2-4.4 4.4l0 87.1c0 2.5 2 4.4 4.4 4.4c19.6 0 35.6-15.9 35.6-35.6z" />
    </Icon>
);

export default ShuttleSpace;