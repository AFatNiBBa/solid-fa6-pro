
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-building` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-building?s=duotone car-building}
 * @preview ![car-building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-building.svg)
 */
const CarBuilding: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 48C0 21.5 21.5 0 48 0L272 0c26.5 0 48 21.5 48 48l0 88.4c-29.5 12.1-53.1 36.6-63.7 68.2l-.5 1.4c-1-7.9-7.7-14-15.9-14l-32 0c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l31.2 0-5.6 16.9C208.5 290.2 192 319.2 192 352l0 96 0 32L48 480c-26.5 0-48-21.5-48-48L0 48zm64 64l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L80 96c-8.8 0-16 7.2-16 16zm0 96l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 96l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM192 112l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
        <path d="M347.4 234.9L329.7 288l204.5 0-17.7-53.1c-2.2-6.5-8.3-10.9-15.2-10.9l-138.8 0c-6.9 0-13 4.4-15.2 10.9zm-87.3 59.4l26.6-79.7C297.6 182 328.2 160 362.6 160l138.8 0c34.4 0 65 22 75.9 54.7l26.6 79.7C625.2 304.7 640 326.6 640 352l0 96s0 0 0 0l0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32-256 0 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32s0 0 0 0l0-96c0-25.4 14.8-47.3 36.1-57.6zM328 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CarBuilding;