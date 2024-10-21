
import { Icon } from "../../index";

/**
 * A component that renders the `chart-pie` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-pie?s=sharp-thin chart-pie}
 * @preview ![chart-pie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/chart-pie.svg)
 */
const ChartPie: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 224c0-114.9-93.1-208-208-208l0 208 208 0zM304 .6c5.3-.4 10.6-.6 16-.6C443.7 0 544 100.3 544 224c0 5.4-.2 10.7-.6 16L320 240l-16 0 0-16L304 .6zM240 294.6l0-6.6 0-237.7C131.5 65.8 48 159.2 48 272c0 123.7 100.3 224 224 224c47.9 0 92.3-15 128.7-40.7l-156-156-4.7-4.7zm173.6 151L425 457c-4.1 3.4-8.4 6.7-12.8 9.9C372.8 495.3 324.3 512 272 512C139.5 512 32 404.6 32 272C32 150.3 122.6 49.8 240 34.1c5.3-.7 10.6-1.2 16-1.6l0 16L256 288 413.6 445.6zM320 288l22.6 0 216.8 0 16 0c-.4 5.4-.9 10.7-1.6 16c-8.2 61.3-39.5 115.4-84.9 153L336 304l-16-16zm38.6 16l131 131c36-34 60.8-79.7 68.1-131l-199.1 0z" />
    </Icon>
);

export default ChartPie;