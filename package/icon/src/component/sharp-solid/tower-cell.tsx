
import { Icon } from "../../index";

/**
 * A component that renders the `tower-cell` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-cell?s=sharp-solid tower-cell}
 * @preview ![tower-cell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tower-cell.svg)
 */
const TowerCell: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M87.6 27.8L32 0 17.4 29.2C6.1 60 0 93.3 0 128s6.1 68 17.4 98.8L32 256l55.6-27.8C72.5 198 64 164 64 128s8.5-70 23.6-100.2zm42.9 21.5C118.7 73 112 99.7 112 128s6.7 55 18.5 78.7l42.9-21.5C164.9 168 160 148.6 160 128s4.9-40 13.5-57.3L130.5 49.3zm272 21.5C411.1 88 416 107.4 416 128s-4.9 40-13.5 57.3l42.9 21.5C457.3 183 464 156.3 464 128s-6.7-55-18.5-78.7L402.5 70.7zm85.9 157.5L544 256l14.6-29.2C569.9 196 576 162.7 576 128s-6.1-68-17.4-98.8L544 0 488.4 27.8C503.5 58 512 92 512 128s-8.5 70-23.6 100.2zM239.1 169.3L80 512l70.6 0 29.7-64 215.4 0 29.7 64 70.6 0L336.9 169.3c9.4-11.1 15.1-25.6 15.1-41.3c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 15.7 5.7 30.2 15.1 41.3zM366 384l-156 0 14.9-32 126.3 0L366 384zM288 216l33.4 72-66.9 0L288 216z" />
    </Icon>
);

export default TowerCell;