
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=light battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 384l66.4 0c1 12.1 6.2 23.4 14.4 32L80 416c-44.2 0-80-35.8-80-80L0 176c0-44.2 35.8-80 80-80l196 0-33.8 32L80 128c-26.5 0-48 21.5-48 48l0 160c0 26.5 21.5 48 48 48zm156 32l33.8-32L432 384c26.5 0 48-21.5 48-48l0-160c0-26.5-21.5-48-48-48l-66.4 0c-1-12.1-6.2-23.4-14.4-32L432 96c44.2 0 80 35.8 80 80l0 160c0 44.2-35.8 80-80 80l-196 0zM560 192c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zM191.7 264l48.3 0c5.5 0 10.5 2.8 13.5 7.4s3.3 10.4 1 15.3l-19.4 41.9L320.3 248 272 248c-5.5 0-10.5-2.8-13.5-7.4s-3.3-10.4-1-15.3l19.4-41.9L191.7 264zm20.5 130.5c-3.7 3.5-8.7 5.5-13.8 5.5c-14.7 0-24.4-15.2-18.2-28.5L215 296l-49.4 0c-11.9 0-21.6-9.7-21.6-21.6c0-5.9 2.4-11.6 6.7-15.7L299.8 117.5c3.7-3.5 8.7-5.5 13.8-5.5c14.7 0 24.4 15.2 18.2 28.5L297 216l49.4 0c11.9 0 21.6 9.7 21.6 21.6c0 5.9-2.4 11.6-6.7 15.7L212.2 394.5z" />
    </Icon>
);

export default BatteryBolt;