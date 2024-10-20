
import { Icon } from "../../index";

/**
 * A component that renders the `charging-station` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/charging-station?s=sharp-thin charging-station}
 * @preview ![charging-station](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/charging-station.svg)
 */
const ChargingStation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 16l0 400 256 0 0-400L48 16zm0 416l0 64 256 0 0-64L48 432zM32 496L32 16 32 0 48 0 304 0l16 0 0 16 0 256 8 0c39.8 0 72 32.2 72 72l0 44c0 24.3 19.7 44 44 44s44-19.7 44-44l0-132.4c-40.4-4-72-38.1-72-79.6l0-40 0-8 8 0 24 0 0-56 0-8 16 0 0 8 0 56 64 0 0-56 0-8 16 0 0 8 0 56 24 0 8 0 0 8 0 40c0 41.5-31.6 75.6-72 79.6L504 388c0 33.1-26.9 60-60 60s-60-26.9-60-60l0-44c0-30.9-25.1-56-56-56l-8 0 0 208 32 0 0 16-32 0-16 0L48 512l-16 0L0 512l0-16 32 0zM544 144l-16 0-64 0-16 0-16 0 0 32c0 35.3 28.7 64 64 64s64-28.7 64-64l0-32-16 0zM203.2 110.4l-4.8 6.4L136 200l96 0 16 0-9.6 12.8-72 96-4.8 6.4-12.8-9.6 4.8-6.4L216 216l-96 0-16 0 9.6-12.8 72-96 4.8-6.4 12.8 9.6z" />
    </Icon>
);

export default ChargingStation;