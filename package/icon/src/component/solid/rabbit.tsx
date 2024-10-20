
import { Icon } from "../../index";

/**
 * A component that renders the `rabbit` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rabbit?s=solid rabbit}
 * @preview ![rabbit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/rabbit.svg)
 */
const Rabbit: typeof Icon = x => (
    <Icon {...x}>
        <path d="M321.4 128c4.8 0 9.6 .3 14.3 .9c1.1-24-2.6-47.9-10.9-70.1c7.6-17.8 18.6-34.2 32.7-48.3l4.6-4.6c3.7-3.7 8.8-5.8 14-5.8c9.2 0 17.2 6.4 19.3 15.4l1 4.4c9.8 42.4 1.8 86.5-21 122.4c5.5 3.1 10.7 6.6 15.6 10.6L425.8 181c14 11.4 22.2 28.6 22.2 46.7c0 33.3-27 60.3-60.3 60.3L352 288l0 25.8 61.7 154.3c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8l-39.4-98.6L265.6 448l22.4 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-80 0-48 0c-28.5 0-52.6-18.6-60.9-44.2C88.8 480.1 73.3 488 56 488c-30.9 0-56-25.1-56-56s25.1-56 56-56c17.4 0 33 8 43.3 20.5C114 317.7 176.8 255.9 256 242.7l0-49.2c0-10.9 2.7-21.2 7.4-30.2c-34.3-36.5-50.3-86.8-43.2-136.8l.7-4.9C222.7 9.2 233.2 0 245.7 0c6.6 0 12.9 2.6 17.6 7.3l3.1 3.1c31.8 31.5 47.9 74.8 45.4 118.4c3.1-.5 6.3-.7 9.6-.7zM368 224a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Rabbit;