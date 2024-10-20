
import { Icon } from "../../index";

/**
 * A component that renders the `battery-bolt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/battery-bolt?s=sharp-thin battery-bolt}
 * @preview ![battery-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/battery-bolt.svg)
 */
const BatteryBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 416l-272.4 0 20.7-16L512 400l0-80 0-16 0-96 0-16 0-80-143 0 4-16 139 0 16 0 0 16 0 80 32 0 16 0 0 16 0 96 0 16-16 0-32 0 0 80 0 16-16 0zM16 112l0 288 159 0-4 16L16 416 0 416l0-16L0 112 0 96l16 0 288.4 0-20.7 16L16 112zm544 96l-32 0 0 96 32 0 0-96zM214.3 374.9L236 288l4-16-16.5 0L176 272l-16 0 0-16 0-8L315.6 127.8 336 112l-6.3 25.1L308 224l-4 16 16.5 0 47.5 0 16 0 0 16 0 8L228.4 384.2 208 400l6.3-25.1zM240 256l20.5 0-5 19.9-20.8 83.3L368 256.1l0-.1-64 0-20.5 0 5-19.9 20.8-83.3L176 255.9l0 .1 64 0z" />
    </Icon>
);

export default BatteryBolt;