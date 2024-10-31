
import { Icon } from "../../index";

/**
 * A component that renders the `tower-cell` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-cell?s=sharp-regular tower-cell}
 * @preview ![tower-cell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tower-cell.svg)
 */
const TowerCell: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 128c0-38.6 9.1-75.1 25.3-107.4L32 0 17.4 29.2C6.1 60 0 93.3 0 128s6.1 68 17.4 98.8L32 256l41.3-20.6C57.1 203.1 48 166.6 48 128zm56 0c0 29.6 7 57.5 19.4 82.3l42.9-21.5c-9.2-18.3-14.3-39-14.3-60.8s5.2-42.5 14.3-60.8L123.4 45.7C111 70.5 104 98.4 104 128zM452.6 45.7L409.7 67.2c9.2 18.3 14.3 39 14.3 60.8s-5.2 42.5-14.3 60.8l42.9 21.5C465 185.5 472 157.6 472 128s-7-57.5-19.4-82.3zM528 128c0 38.6-9.1 75.1-25.3 107.4L544 256l14.6-29.2C569.9 196 576 162.7 576 128s-6.1-68-17.4-98.8L544 0 502.7 20.6C518.9 52.9 528 89.4 528 128zM496 512L336.9 169.3c9.4-11.1 15.1-25.6 15.1-41.3c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 15.7 5.7 30.2 15.1 41.3L80 512l52.9 0 37.1-80 235.9 0 37.1 80 52.9 0zM288 192c2.1 0 4.3-.1 6.4-.3L339.1 288l-102.2 0 44.7-96.3c2.1 .2 4.2 .3 6.4 .3zM192.3 384L216 333.1l0 2.9 145.4 0 22.3 48-191.3 0z" />
    </Icon>
);

export default TowerCell;