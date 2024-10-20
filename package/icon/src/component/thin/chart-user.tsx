
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=thin chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16l352 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-247.7 0c3.1 5.2 6 10.5 8.5 16L576 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L224 0c-35.3 0-64 28.7-64 64l0 32c5.4 0 10.8 .3 16 1l0-33c0-26.5 21.5-48 48-48zM416 120c0 4.4 3.6 8 8 8l76.7 0L384 244.7l-74.3-74.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l80 80c3.1 3.1 8.2 3.1 11.3 0L512 139.3l0 76.7c0 4.4 3.6 8 8 8s8-3.6 8-8l0-96c0-4.4-3.6-8-8-8l-96 0c-4.4 0-8 3.6-8 8zM133.3 368l53.3 0C251.5 368 304 420.5 304 485.3c0 5.9-4.8 10.7-10.7 10.7L26.7 496c-5.9 0-10.7-4.8-10.7-10.7C16 420.5 68.5 368 133.3 368zm0-16C59.7 352 0 411.7 0 485.3C0 500.1 11.9 512 26.7 512l266.7 0c14.7 0 26.7-11.9 26.7-26.7C320 411.7 260.3 352 186.7 352l-53.3 0zM80 224a80 80 0 1 1 160 0A80 80 0 1 1 80 224zm176 0A96 96 0 1 0 64 224a96 96 0 1 0 192 0z" />
    </Icon>
);

export default ChartUser;