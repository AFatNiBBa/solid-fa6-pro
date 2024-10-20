
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grill-fire` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill-fire?s=duotone grill-fire}
 * @preview ![grill-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/grill-fire.svg)
 */
const GrillFire: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 72L0 96c0 89.8 52.9 167.3 129.2 203l-23.1 53.8c-3.3-.5-6.7-.8-10.1-.8c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64l75.5 0c-5.5-15.3-9.1-31.4-10.7-48l-73 0 22.9-53.4c15.9 3.6 32.3 5.4 49.3 5.4c1.2 0 2.4 0 3.6 0c5.9-26.2 18.6-52.9 33.6-77.3c21.7-35.2 51.9-71.2 87.3-102.8C366.2 124 393.3 124 411 140c9 8.1 17.7 16.4 26.2 25.1c7-21.8 10.9-45 10.9-69.1l0-24c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72zM120 416a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M576 352c0 88.4-71.6 160-160 160s-160-71.6-160-160c0-76.7 62.5-144.7 107.2-179.4c5-3.9 10.9-5.8 16.8-5.8c7.9-.1 16 3.1 22 9.2l46 46 11.3-11.3c11.7-11.7 30.6-12.7 42.3-1C560.5 268 576 320.2 576 352zM416 464.2c35.3 0 64-28.7 64-64c0-36.5-37-73-54.8-88.4c-5.4-4.7-13.1-4.7-18.5 0C389 327.1 352 363.6 352 400.2c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default GrillFire;