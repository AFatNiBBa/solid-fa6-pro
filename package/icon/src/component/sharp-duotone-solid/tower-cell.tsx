
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tower-cell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tower-cell?s=sharp-duotone-solid tower-cell}
 * @preview ![tower-cell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tower-cell.svg)
 */
const TowerCell: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 34.7 6.1 68 17.4 98.8L32 256l55.6-27.8C72.5 198 64 164 64 128s8.5-70 23.6-100.2L32 0 17.4 29.2C6.1 60 0 93.3 0 128zm112 0c0 28.3 6.7 55 18.5 78.7l42.9-21.5C164.9 168 160 148.6 160 128s4.9-40 13.5-57.3L130.5 49.3C118.7 73 112 99.7 112 128zM402.5 70.7C411.1 88 416 107.4 416 128s-4.9 40-13.5 57.3l42.9 21.5C457.3 183 464 156.3 464 128s-6.7-55-18.5-78.7L402.5 70.7zm85.9-42.9C503.5 58 512 92 512 128s-8.5 70-23.6 100.2L544 256l14.6-29.2C569.9 196 576 162.7 576 128s-6.1-68-17.4-98.8L544 0 488.4 27.8z" />
        <path d="M336.9 169.3L496 512l-70.6 0-29.7-64-215.4 0-29.7 64L80 512 239.1 169.3C229.7 158.2 224 143.7 224 128c0-35.3 28.7-64 64-64s64 28.7 64 64c0 15.7-5.7 30.2-15.1 41.3zM210 384l156 0-14.9-32-126.3 0L210 384zm111.4-96L288 216l-33.4 72 66.9 0z" />
    </Icon>
);

export default TowerCell;