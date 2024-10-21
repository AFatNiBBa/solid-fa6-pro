
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=thin battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l92.2 0c-4.2-4.7-7.4-10.2-9.5-16L80 400c-35.3 0-64-28.7-64-64l0-160c0-35.3 28.7-64 64-64l199.2 0 20-16L80 96zM448 400l-183.2 0-20 16L448 416c44.2 0 80-35.8 80-80l0-16 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0 0-16c0-44.2-35.8-80-80-80l-76.2 0c4.2 4.7 7.4 10.2 9.5 16l66.7 0c35.3 0 64 28.7 64 64l0 16 0 16 0 96 0 16 0 16c0 35.3-28.7 64-64 64zm96-192c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-16 0 0-96 16 0zM283.6 232.8c-2.5 5-2.2 10.9 .7 15.6s8.1 7.6 13.6 7.6l70.1 0L208 384l52.4-104.8c2.5-5 2.2-10.9-.7-15.6s-8.1-7.6-13.6-7.6L176 256 336 128 283.6 232.8zm66.7-97.7c3.4-6.7 1.6-14.9-4.2-19.6s-14.2-4.7-20.1-.1l-160 128c-5.3 4.2-7.4 11.4-5.1 17.8s8.3 10.7 15.1 10.7l52.2 0 17.9 0-8 16-44.4 88.8c-3.4 6.7-1.6 14.9 4.3 19.6s14.2 4.7 20.1 .1l160-128c5.3-4.2 7.4-11.4 5.1-17.8s-8.3-10.7-15.1-10.7l-52.2 0-17.9 0 8-16 44.4-88.8z" />
    </Icon>
);

export default BatteryBolt;