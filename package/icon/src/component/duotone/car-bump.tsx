
import { Icon, generic } from "../../index";

/**
 * A component that renders the `car-bump` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-bump?s=duotone car-bump}
 * @preview ![car-bump](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/car-bump.svg)
 */
const CarBump: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M388 498.3c0 7.5 6.6 13.7 14.9 13.7l186.2 0c8.3 0 14.9-6.2 14.9-13.7c0-1.5-.3-3-.8-4.5C591.4 460.4 560 416 496 416s-95.4 44.4-107.2 77.8c-.5 1.5-.8 3-.8 4.5z" />
        <path d="M121.6 148.1l-7 63.6 249.6-66.9L326.4 93.2c-7.8-10.6-21.3-15.4-34.1-12L145.1 120.6c-12.7 3.4-22.1 14.3-23.5 27.4zM47.8 234.2L58 141.1c4.3-39.4 32.3-72 70.6-82.3L275.8 19.4c38.2-10.2 78.9 4 102.3 36l55.4 75.5c25.3 3 47.4 20.9 54.4 47L521 301.5l12.4 46.4c4.6 17.1-5.6 34.6-22.6 39.2l-30.9 8.3c-17.1 4.6-34.6-5.6-39.2-22.6l-12.4-46.4L150 400.9l12.4 46.4c4.6 17.1-5.6 34.6-22.6 39.2l-30.9 8.3c-17.1 4.6-34.6-5.6-39.2-22.6L57.3 425.8 24.2 302.1c-7-26.1 3.2-52.7 23.6-67.9zm108.3 65.7A32 32 0 1 0 94.3 316.5a32 32 0 1 0 61.8-16.6zm255.6-35.3a32 32 0 1 0 -16.6-61.8 32 32 0 1 0 16.6 61.8z" />
    </Icon>
);

export default CarBump;