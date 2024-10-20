
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=solid chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 64c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-11.8-25.5-29.9-47.5-52.4-64L576 352l0-288L224 64l0 49.1C205.2 102.2 183.3 96 160 96l0-32zm252.7 75.3c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l88 0c8.8 0 16 7.2 16 16l0 88c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-27-27L401 273c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 55.7-55.7-27-27zM64 224a96 96 0 1 1 192 0A96 96 0 1 1 64 224zM0 485.3C0 411.7 59.7 352 133.3 352l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3z" />
    </Icon>
);

export default ChartUser;