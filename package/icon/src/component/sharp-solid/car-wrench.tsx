
import { Icon } from "../../index";

/**
 * A component that renders the `car-wrench` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-wrench?s=sharp-solid car-wrench}
 * @preview ![car-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/car-wrench.svg)
 */
const CarWrench: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 0c32.8 0 61 19.7 73.3 48l205.3 0C371 19.7 399.2 0 432 0c12.5 0 24.4 2.9 34.9 8c19.6 9.5 34.8 26.9 41.4 48L480 56l-26.8 0L432 56l0 48 21.2 0 26.8 0 28.3 0c-6.6 21.1-21.8 38.5-41.4 48c-10.6 5.1-22.4 8-34.9 8c-32.8 0-61-19.7-73.3-48l-205.3 0C141 140.3 112.8 160 80 160c-12.5 0-24.4-2.9-34.9-8c-19.6-9.5-34.8-26.9-41.4-48L32 104l26.8 0L80 104l0-48L58.8 56 32 56 3.7 56C10.3 34.9 25.4 17.5 45.1 8C55.6 2.9 67.5 0 80 0zm49.4 160l22.6 0 208 0 22.6 0 7.6 21.2L428.3 288l35.7 0 0 96 0 64 0 64-80 0 0-64-256 0 0 64-80 0 0-64 0-64 0-96 35.7 0 38.1-106.8 7.6-21.2zm208 64l-162.9 0-22.9 64 208.6 0-22.9-64zM128 392a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm280-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CarWrench;