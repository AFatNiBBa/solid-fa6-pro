
import { Icon } from "../../index";

/**
 * A component that renders the `rabbit` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit?s=sharp-solid rabbit}
 * @preview ![rabbit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/rabbit.svg)
 */
const Rabbit: typeof Icon = x => (
    <Icon {...x}>
        <path d="M311.9 128l24 0c1-23.7-2.8-47.2-11-69.2c7.6-17.8 18.6-34.2 32.7-48.3L368 0l24 8 3 11.9c10.4 41.6 3.3 85.1-18.6 120.8L448 199.1l0 88.9-96 0 0 10.3 78 210.6 1.2 3.1-68.2 0L317.7 390.1 265.6 448l22.4 0 32 0 0 64-32 0-80 0-48 0-32 0-32 0 0-40.8C85.8 481.6 71.7 488 56 488c-30.9 0-56-25.1-56-56s25.1-56 56-56c17.4 0 33 8 43.3 20.5C114 317.7 176.8 255.9 256 242.7l0-88.8c-29.7-37.6-42.4-86.4-34-134.4L224 8l32-8 10.4 10.3C298 41.7 314.1 84.6 311.9 128zM368 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Rabbit;