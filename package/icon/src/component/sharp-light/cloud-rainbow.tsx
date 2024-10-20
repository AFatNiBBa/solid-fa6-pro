
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-rainbow` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-rainbow?s=sharp-light cloud-rainbow}
 * @preview ![cloud-rainbow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cloud-rainbow.svg)
 */
const CloudRainbow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M284.8 196.9C337.4 98.8 440.9 32 560 32l16 0 0-32L560 0C427.8 0 313.1 74.5 255.5 183.9c7.2 4.8 13.9 10.1 20.1 16c3-1.1 6.1-2.1 9.3-3zm160.4 96.2c1.8 .5 3.6 1.1 5.4 1.6C469.3 253.1 511.3 224 560 224l16 0 0-32-16 0c-53 0-99.6 27.1-126.8 68.2c5.4 10.2 9.5 21.3 12 33zm-56.3-81C428.4 161 490.4 128 560 128l16 0 0-32-16 0c-82.5 0-155.5 40.2-200.6 102.2c10.5 3.4 20.4 8.1 29.5 13.9zM384 320l0 32 32 0c35.3 0 64 28.7 64 64l0 64-64 0L96 480l-64 0 0-64c0-27.8 17.8-51.6 42.7-60.4L96 348.1l0-22.6L96 304c0-44.2 35.8-80 80-80c27 0 50.9 13.4 65.5 34l17.8 25.2 25.9-16.9c10-6.5 22-10.3 34.9-10.3c35.3 0 64 28.7 64 64zM0 512l32 0 64 0 320 0 64 0 32 0 0-32 0-64c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C247.3 210.8 213.9 192 176 192c-61.9 0-112 50.1-112 112l0 21.5C26.7 338.6 0 374.2 0 416l0 64 0 32z" />
    </Icon>
);

export default CloudRainbow;