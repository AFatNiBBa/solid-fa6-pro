
import { Icon } from "../../index";

/**
 * A component that renders the `chart-network` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-network?s=sharp-solid chart-network}
 * @preview ![chart-network](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/chart-network.svg)
 */
const ChartNetwork: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 0L160 0l0 128 58.6 0 29.1 62.3C221.8 210.4 203 239 195.6 272L128 272l0-32L0 240 0 368l128 0 0-32 67.6 0c14.6 64.1 71.9 112 140.4 112c38.4 0 73.3-15 99.1-39.5L512 459.8l0 52.2 128 0 0-128-126.3 0-43.1-28.7c6.1-15.9 9.4-33.2 9.4-51.3c0-20.3-4.2-39.7-11.8-57.2L542.8 192l97.2 0 0-128L512 64l0 71.3-81.7 59.9C405 173.3 372.1 160 336 160c-10.4 0-20.6 1.1-30.4 3.2L288 125.5 288 0zm48 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default ChartNetwork;