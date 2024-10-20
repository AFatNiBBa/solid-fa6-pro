
import { Icon } from "../../index";

/**
 * A component that renders the `whale` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=sharp-light whale}
 * @preview ![whale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/whale.svg)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M157.3 130.7l-4.5-19.5-11-47.7L113.9 91.3l10.3 72.4 72.4 10.3 27.9-27.9-47.7-11-19.5-4.5zm93.9-11.2L288 128l-26.7 26.7L208 208l-91.4-13.1-4 5.1L72.8 250.6c-10.2 13-12.1 30.8-4.6 45.7c7.3 14.5 22.1 23.7 38.3 23.7l4.1 0c11.3 0 22.2-3.8 31-10.9l121.2-97C330.9 157.7 415.5 128 502.7 128L608 128l32 0 0 32 0 288 0 32-32 0-449.8 0C70.8 480 0 409.2 0 321.8C0 280 18.1 240.2 49.5 212.7l39.7-34.7 4.3-3.7L80 80l53.3-53.3L160 0l8.5 36.8L184 104l67.2 15.5zM368 296a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM608 448l0-288-105.3 0c-79.9 0-157.5 27.2-219.9 77.1l-121.2 97c-14.5 11.6-32.4 17.9-50.9 17.9l-4.1 0c-28.4 0-54.3-16-67-41.4c-2.1-4.1-3.7-8.4-5-12.7c-1.7 7.8-2.6 15.8-2.6 23.9C32 391.5 88.5 448 158.2 448L608 448z" />
    </Icon>
);

export default Whale;