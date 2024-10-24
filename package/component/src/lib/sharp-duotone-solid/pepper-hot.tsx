
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pepper-hot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pepper-hot?s=sharp-duotone-solid pepper-hot}
 * @preview ![pepper-hot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pepper-hot.svg)
 */
const PepperHot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 432l0 80 103.2 0c153.9 0 292.3-81 369.5-206.7c-8.2-16.4-16.4-32.9-24.6-49.3c-37.3 0-74.7 0-112 0c-5.3-37.3-10.7-74.7-16-112c-15.2-1.7-30.3-3.4-45.5-5.1L171.2 345.5C154 380 122.2 404.9 84.5 413.2L0 432z" />
        <path d="M419 35.7l4.8 8.7c9.7 17.5 11.5 37.6 6 55.8C406.8 87.3 380.3 80 352 80c-47.8 0-90.7 21-120 54.2l88 9.8 16 112 112 0 36.7 73.4C501.9 303.9 512 273.1 512 240c0-42.1-16.2-80.4-42.8-108.9c16.4-34.3 15.9-75.4-3.4-110L461 12.3 419 35.7z" />
    </Icon>
);

export default PepperHot;