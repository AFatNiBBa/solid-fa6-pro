
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pie` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie?s=thin chart-pie}
 * @preview ![chart-pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-pie.svg)
 */
const ChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 224l-208 0 0-208c114.9 0 208 93.1 208 208zM320 240l208.5 0c8.4 0 15.4-6.5 15.5-14.9l0-1.1C544 100.3 443.7 0 320 0l-1.1 0C310.5 0 304 7.1 304 15.5L304 224c0 8.8 7.2 16 16 16zm-75.3 59.3l156 156C364.3 481 319.9 496 272 496C148.3 496 48 395.7 48 272C48 159.2 131.5 65.8 240 50.3L240 288c0 4.2 1.7 8.3 4.7 11.3zM239 34.3C122.1 50.3 32 150.7 32 272c0 132.5 107.5 240 240 240c51.8 0 99.8-16.4 139-44.3c7.7-5.5 8.2-16.5 1.5-23.1L256 288l0-238.4c0-9.2-7.8-16.6-17-15.4zM358.6 304l199.1 0c-7.3 51.3-32.1 97-68.1 131l-131-131zm215.1 1c1.3-9.2-6.1-17-15.4-17l-199.8 0c-14.3 0-21.4 17.2-11.3 27.3L478.7 446.7c5.8 5.8 15.2 6.3 21.2 .7c39.3-36.7 66.2-86.5 73.9-142.3z" />
    </Icon>
);

export default ChartPie;