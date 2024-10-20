
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=duotone car-wrench}
 * @preview ![car-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-wrench.svg)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M10.9 43c0 6.9 6.4 13 14.6 13L56 56c13.3 0 24 10.7 24 24s-10.7 24-24 24l-30.5 0c-8.2 0-14.6 6.1-14.6 13c0 2.2 .6 4.5 2.1 6.6C27.2 145.5 51.9 160 80 160c29.1 0 54.5-15.5 68.5-38.7c3.3-5.4 8.9-9.3 15.3-9.3l184.4 0c6.4 0 12 3.8 15.3 9.3c14 23.2 39.5 38.7 68.5 38.7c28.1 0 52.8-14.5 67.1-36.4c1.4-2.2 2.1-4.4 2.1-6.6c0-6.9-6.4-13-14.6-13L456 104c-13.3 0-24-10.7-24-24s10.7-24 24-24l30.5 0c8.2 0 14.6-6.1 14.6-13c0-2.2-.6-4.5-2.1-6.6C484.8 14.5 460.1 0 432 0c-29.1 0-54.5 15.5-68.5 38.7c-3.3 5.4-8.9 9.3-15.3 9.3L163.8 48c-6.4 0-12-3.8-15.3-9.3C134.5 15.5 109.1 0 80 0C51.9 0 27.2 14.5 12.9 36.4c-1.4 2.2-2.1 4.4-2.1 6.6z" />
        <path d="M170.8 234.6L151.7 288l208.6 0-19.1-53.4c-2.3-6.4-8.3-10.6-15.1-10.6l-140.3 0c-6.8 0-12.8 4.3-15.1 10.6zM82.2 292.4l28.3-79.3C121.9 181.3 152 160 185.8 160l140.3 0c33.8 0 64 21.3 75.3 53.1l28.3 79.3c20.1 8.5 34.2 28.4 34.2 51.6l0 40 0 64 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32-256 0 0 32c0 17.7-14.3 32-32 32l-16 0c-17.7 0-32-14.3-32-32l0-32 0-64 0-40c0-23.2 14.1-43.1 34.2-51.6zM152 368a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm232 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default CarWrench;