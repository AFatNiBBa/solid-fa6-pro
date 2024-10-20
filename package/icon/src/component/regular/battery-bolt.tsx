
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=regular battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l92.2 0c-11.6-13-15.3-31.5-9.5-48L80 368c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32l159.2 0 60-48L80 96zM464 368l-159.2 0-60 48L464 416c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80l-92.2 0c11.6 13 15.3 31.5 9.5 48l82.7 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32zM346.1 115.6c-5.8-4.7-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l70.1 0L193.7 376.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-70.1 0 52.4-104.8c3.4-6.7 1.6-14.9-4.2-19.6z" />
    </Icon>
);

export default BatteryBolt;