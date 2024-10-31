
import { Icon } from "../../index";

/**
 * A component that renders the `chart-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-user?s=light chart-user}
 * @preview ![chart-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chart-user.svg)
 */
const ChartUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 32L224 32c-17.7 0-32 14.3-32 32l0 36c-10.2-2.6-21-4-32-4l0-32c0-35.3 28.7-64 64-64L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-239.2 0c-5.3-11.4-11.8-22.2-19.5-32L576 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32zM400 128c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-57.4L395.3 267.3c-6.2 6.2-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L384 233.4 473.4 144 416 144c-8.8 0-16-7.2-16-16zM160 288a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0-160a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 384c-54.2 0-98.4 42.5-101.2 96l255.7 0c-2.8-53.5-47-96-101.2-96l-53.3 0zm0-32l53.3 0C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7L26.7 512C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z" />
    </Icon>
);

export default ChartUser;