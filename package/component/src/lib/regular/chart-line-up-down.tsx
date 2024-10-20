
import { Icon } from "../../index";

/**
 * A component that renders the `chart-line-up-down` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-line-up-down?s=regular chart-line-up-down}
 * @preview ![chart-line-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/chart-line-up-down.svg)
 */
const ChartLineUpDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 32c13.3 0 24 10.7 24 24l0 352c0 13.3 10.7 24 24 24l416 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L72 480c-39.8 0-72-32.2-72-72L0 56C0 42.7 10.7 32 24 32zm352 80c-13.3 0-24-10.7-24-24s10.7-24 24-24l80 0c6.4 0 12.5 2.5 17 7s7 10.6 7 17l0 80c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-22.1L305 273c-9.4 9.4-24.6 9.4-33.9 0l-63-63-63 63c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l80-80c9.4-9.4 24.6-9.4 33.9 0l63 63L398.1 112 376 112zm0 272c-13.3 0-24-10.7-24-24s10.7-24 24-24l22.1 0-47-47L385 255l47 47 0-22.1c0-13.3 10.7-24 24-24s24 10.7 24 24l0 80c0 6.4-2.5 12.5-7 17s-10.6 7-17 7l-80 0z" />
    </Icon>
);

export default ChartLineUpDown;