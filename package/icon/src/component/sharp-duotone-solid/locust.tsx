
import { Icon, generic } from "../../index";

/**
 * A component that renders the `locust` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/locust?s=sharp-duotone-solid locust}
 * @preview ![locust](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/locust.svg)
 */
const Locust: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 32l0 48 24 0 48 0c90.1 0 163.6 70.9 167.8 160c16 0 32 0 48.1 0C571.6 124.4 476.6 32 360 32l-48 0-24 0z" />
        <path d="M397.7 104.3l16.4 38.2L455.8 240 576 240l0 80c0 44.2-35.8 80-80 80l-12.4 0 45.7 80-55.3 0-45.7-80L348 400l-55.4 80-58.4 0 55.4-80-53 0-59.8 80-59.9 0 65-86.9-41.2-15.7L59.6 480l-61.2 0L269.2 137.1l25-31.7 15.9 37.1 21.5 50.2 41.2-55.1 24.9-33.3zM249.1 240l47.2 0 2.1-2.8-16.6-38.6L249.1 240zm107.1 0l47.4 0-17.3-40.3L356.2 240zm-205.5 0L64.1 348.2 32 336l0-96 118.7 0zM512 304a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Locust;