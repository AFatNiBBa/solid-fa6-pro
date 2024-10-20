
import { Icon } from "../../index";

/**
 * A component that renders the `chart-network` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-network?s=sharp-regular chart-network}
 * @preview ![chart-network](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-network.svg)
 */
const ChartNetwork: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 0L160 0l0 128 79.8 0L261 181.1c-34.9 21.3-60 57.1-67 98.9l-66 0 0-40L0 240 0 368l128 0 0-40 66 0c11.4 68.1 70.7 120 142 120c43.8 0 83-19.5 109.4-50.4l66.6 40 0 74.4 128 0 0-128-124 0-45.8-27.5c6.4-16.3 9.9-34 9.9-52.5c0-23.2-5.5-45.2-15.3-64.6L529.3 192 640 192l0-128L512 64l0 81.2-75.7 55.5C410.4 175.5 375 160 336 160c-10.5 0-20.6 1.1-30.5 3.2L288 119.4 288 0zm48 208a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default ChartNetwork;