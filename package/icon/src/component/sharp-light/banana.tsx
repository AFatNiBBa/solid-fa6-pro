
import { Icon } from "../../index";

/**
 * A component that renders the `banana` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banana?s=sharp-light banana}
 * @preview ![banana](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/banana.svg)
 */
const Banana: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M349.4 51.8L325.8 67.9C332.5 92.1 336 117.7 336 144c0 41.9-8.9 81.7-25 117.6L286.2 238c11.5-29.1 17.8-60.8 17.8-94c0-31.4-5.6-61.3-15.9-89l65.1-44.6C411.4 63.1 448 139.3 448 224c0 14.7-1.1 29.2-3.2 43.3l-34.5 10.9c3.8-17.5 5.8-35.6 5.8-54.2c0-66.3-25.2-126.8-66.6-172.2zM254.1 295.8l-13.8-13.2-90.4 36.2-14.9 5.9-11.9-29.7 14.9-5.9 100-40 9.6-3.8 7.4 7.1 85.2 81.5 143-45.1 11-3.5 6.8 9.3 64 88 9.4 12.9-25.9 18.8-9.4-12.9-57.2-78.7-58.7 18.5C378.2 441.9 277.3 512 160 512L32 512 0 512l0-80 0-32 32 0 16 0c84.5 0 159.5-41 206.1-104.2zm125.9 59l-39.3 12.4-9 2.9-6.8-6.5-47.5-45.4C224.8 387.3 141.6 432 48 432l-16 0 0 48 128 0c93.6 0 175.4-50.2 220.1-125.1z" />
    </Icon>
);

export default Banana;