
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-network` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-network?s=sharp-duotone-solid chart-network}
 * @preview ![chart-network](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chart-network.svg)
 */
const ChartNetwork: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 272l0 64 67.6 0c14.6 64.1 71.9 112 140.4 112c43.5 0 82.4-19.3 108.8-49.7L512 434.1l0-50.1 42 0-79-42.1c3.3-12.1 5-24.8 5-37.9c0-20.3-4.2-39.7-11.8-57.2L542.8 192c-10.3 0-20.6 0-30.8 0l0-56.7-81.7 59.9C405 173.3 372.1 160 336 160c-10.4 0-20.6 1.1-30.4 3.2L288 125.5l0 2.5c-23.1 0-46.3 0-69.4 0l29.1 62.3C221.8 210.4 203 239 195.6 272L128 272zm256 32a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M288 0L160 0l0 128 128 0L288 0zM128 240L0 240 0 368l128 0 0-128zM512 64l0 128 128 0 0-128L512 64zM640 384l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default ChartNetwork;