
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-rear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-rear?s=sharp-duotone-solid car-rear}
 * @preview ![car-rear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/car-rear.svg)
 */
const CarRear: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 400l0 80 96 0 0-80-96 0zm77.1-208l293.8 0L369.3 96 142.7 96c-11.2 32-22.4 64-33.6 96zM384 400l0 80 96 0 0-80-96 0z" />
        <path d="M97.3 32L120 32l272 0 22.7 0 7.5 21.4L470.7 192l41.3 0 0 208L0 400 0 192l41.3 0L89.8 53.4 97.3 32zm272 64L142.7 96l-33.6 96 293.8 0L369.3 96zM128 256l-80 0 0 48 80 0 0-48zm256 0l0 48 80 0 0-48-80 0zm-64 16l-128 0 0 64 128 0 0-64z" />
    </Icon>
);

export default CarRear;