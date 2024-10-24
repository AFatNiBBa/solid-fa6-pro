
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=sharp-duotone-solid car-wrench}
 * @preview ![car-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-wrench.svg)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M3.7 56L80 56l0 48L3.7 104c10.2 32.5 40.5 56 76.3 56c32.8 0 61-19.7 73.3-48l205.3 0c12.3 28.3 40.5 48 73.3 48c35.8 0 66.1-23.5 76.3-56L432 104l0-48 76.3 0C498.1 23.5 467.8 0 432 0c-32.8 0-61 19.7-73.3 48L153.3 48C141 19.7 112.8 0 80 0C44.2 0 13.9 23.5 3.7 56z" />
        <path d="M152 160l-22.6 0-7.6 21.2L83.7 288 48 288l0 96 0 64 0 64 80 0 0-64 256 0 0 64 80 0 0-64 0-64 0-96-35.7 0L390.1 181.2 382.6 160 360 160l-208 0zM360.3 288l-208.6 0 22.9-64 162.9 0 22.9 64zM104 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm280-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default CarWrench;