
import { Icon } from "../../index";

/**
 * A component that renders the `locust` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/locust?s=sharp-thin locust}
 * @preview ![locust](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/locust.svg)
 */
const Locust: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M312 32l-8 0 0 16 8 0 64 0c98.9 0 179.6 78.1 183.8 176l-115.2 0-53.7-92-6.5-11.2-7.1 10.9-52.7 80.8-53.9-80.9-6.3-9.5-6.8 9.2L189.6 224 48 224l-16 0 0 16 0 99.2 54.9 25.1L2.1 480l19.8 0 79.8-108.9 73.8 33.8L120.2 480l19.9 0 50.4-68.4L200 416l89.6 0-40 64 18.9 0 40-64L480 416c6.2 0 12.3-.6 18.2-1.7L531.1 480l17.9 0-35.1-70.1C550.2 396.2 576 361.1 576 320l0-80 0-16-.2 0C571.6 117.3 483.8 32 376 32l-64 0zM111.4 357.9L197.7 240l237.7 0 1.7 2.9 5-2.9L560 240l0 80c0 44.2-35.8 80-80 80l-276.5 0-92.1-42.1zM177.9 240L96.5 351.1 48 328.9 48 240l129.9 0zm31.6-16l54.2-74 49.4 74-103.6 0zm126.7 0l47.5-72.8L426.1 224l-89.9 0zM496 320a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Locust;