
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-ramp-box` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp-box?s=duotone truck-ramp-box}
 * @preview ![truck-ramp-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-ramp-box.svg)
 */
const TruckRampBox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M23.1 207.7L64.5 362.3c4.6 17.1 22.1 27.2 39.2 22.6l154.5-41.4c17.1-4.6 27.2-22.1 22.6-39.2L239.5 149.7c-4.6-17.1-22.1-27.2-39.2-22.6l-46.4 12.4c6.9 25.8 13.8 51.5 20.7 77.3c2.3 8.5-2.8 17.3-11.3 19.6c-10.3 2.8-20.6 5.5-30.9 8.3c-8.5 2.3-17.3-2.8-19.6-11.3L92.1 156.1c-15.5 4.1-30.9 8.3-46.4 12.4c-17.1 4.6-27.2 22.1-22.6 39.2zM448 416a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M544 288c-66.1 0-120.6 50.2-127.3 114.5L48.4 502.9c-17.1 4.6-34.6-5.4-39.3-22.5s5.4-34.6 22.5-39.3L352 353.8V64c0-35.3 28.7-64 64-64H640V331.3c-23.5-26.6-57.8-43.3-96-43.3zM153.9 139.5L92.1 156.1l20.7 77.3c2.3 8.5 11.1 13.6 19.6 11.3l30.9-8.3c8.5-2.3 13.6-11.1 11.3-19.6l-20.7-77.3z" />
    </Icon>
);

export default TruckRampBox;