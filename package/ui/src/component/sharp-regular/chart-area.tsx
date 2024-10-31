
import { Icon } from "../../index";

/**
 * A component that renders the `chart-area` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-area?s=sharp-regular chart-area}
 * @preview ![chart-area](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/chart-area.svg)
 */
const ChartArea: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 56l0-24L0 32 0 56 0 456l0 24 24 0 464 0 24 0 0-48-24 0L48 432 48 56zm209.9 73.9L224 96l-33.9 33.9L96 224l0 112 0 48 48 0 288 0 48 0 0-48 0-96-64.7-75.4L384 128l-30.1 30.1-4 4-30 30-33.9-33.9-28.1-28.1zm96 96l27.3-27.3L432 257.8l0 78.2-288 0 0-92.1 80-80 62.1 62.1L320 259.9l33.9-33.9z" />
    </Icon>
);

export default ChartArea;