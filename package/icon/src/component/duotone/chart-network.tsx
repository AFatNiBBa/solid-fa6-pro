
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-network` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-network?s=duotone chart-network}
 * @preview ![chart-network](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chart-network.svg)
 */
const ChartNetwork: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M119.4 272c5.4 9.4 8.6 20.3 8.6 32c0 .7 0 1.5 0 2.2s-.1 1.4-.1 2.2c-.1 1.4-.2 2.9-.4 4.3c-.4 2.8-.9 5.6-1.7 8.2c-1.5 5.4-3.6 10.5-6.3 15.2l76.1 0c14.6 64.1 71.9 112 140.4 112c40.8 0 77.7-17 103.9-44.3L512 446.9c.4-23.6 13.6-44.1 32.9-54.9l-72-43.2c4.6-14.1 7.1-29.2 7.1-44.8c0-20.3-4.2-39.7-11.8-57.2l82-60.2c-20.5-9-35.3-28.5-37.8-51.6l-82.1 60.2C405 173.3 372.1 160 336 160c-10.4 0-20.6 1.1-30.4 3.2l-29.2-62.5C264.9 117.2 245.7 128 224 128c-.9 0-1.9 0-2.8-.1c-.9 0-1.9-.1-2.8-.2l29.2 62.5C221.8 210.4 203 239 195.6 272l-76.1 0zM384 304a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M224 128A64 64 0 1 0 224 0a64 64 0 1 0 0 128zm352 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm64 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM64 368a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ChartNetwork;