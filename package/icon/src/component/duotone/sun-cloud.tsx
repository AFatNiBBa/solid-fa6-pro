
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun-cloud` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun-cloud?s=duotone sun-cloud}
 * @preview ![sun-cloud](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sun-cloud.svg)
 */
const SunCloud: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 355.4c0 2.1 .4 4.2 1.2 6.1c2.1 5 6.6 8.6 11.9 9.6L121 391l19.8 107.9c1 5.3 4.6 9.8 9.6 11.9s10.7 1.5 15.2-1.6L256 446.9l90.3 62.3c4.5 3.1 10.2 3.7 15.2 1.6s8.6-6.6 9.6-11.9l9.4-51c-42.1-1.5-77.4-30.2-88.7-69c-11.4 3.3-23.4 5.1-35.8 5.1c-70.7 0-128-57.3-128-128s57.3-128 128-128c61.3 0 112.6 43.1 125.1 100.7c20.5-22.5 50-36.7 82.9-36.7c8.6 0 17 1 25.1 2.8l20.1-29.1c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L391 121 371.1 13.1c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.9c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3C1 349 0 352.2 0 355.4zM160 256c0 53 43 96 96 96c11.3 0 22.1-1.9 32.2-5.5c2.2-39.3 28.1-72.3 63.7-85c.1-1.8 .2-3.7 .2-5.5c0-53-43-96-96-96s-96 43-96 96z" />
        <path d="M320 352c0 35.3 28.7 64 64 64l184 0c39.8 0 72-32.2 72-72s-32.2-72-72-72c-10.1 0-19.7 2.1-28.4 5.8C528.8 246.5 499 224 464 224c-38.7 0-71 27.5-78.4 64c-.5 0-1.1 0-1.6 0c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default SunCloud;