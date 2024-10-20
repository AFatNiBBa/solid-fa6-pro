
import { Icon } from "../../index";

/**
 * A component that renders the `chart-network` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-network?s=solid chart-network}
 * @preview ![chart-network](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-network.svg)
 */
const ChartNetwork: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M288 64c0 13.7-4.3 26.3-11.6 36.7l29.2 62.5c9.8-2.1 20-3.2 30.4-3.2c36.1 0 69 13.3 94.3 35.2L512.4 135c-.2-2.3-.4-4.6-.4-7c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-9.2 0-17.9-1.9-25.8-5.4l-82 60.2c7.6 17.5 11.8 36.9 11.8 57.2c0 15.6-2.5 30.7-7.1 44.8l72 43.2c9.2-5.1 19.8-8 31.1-8c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64l0-1.1-72.1-43.3C413.7 431 376.8 448 336 448c-68.5 0-125.9-47.9-140.4-112l-76.1 0c-11.1 19.1-31.7 32-55.4 32c-35.3 0-64-28.7-64-64s28.7-64 64-64c23.7 0 44.4 12.9 55.4 32l76.1 0c7.5-33 26.3-61.6 52.1-81.7l-29.2-62.5C185.7 124.9 160 97.5 160 64c0-35.3 28.7-64 64-64s64 28.7 64 64zm48 288a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ChartNetwork;