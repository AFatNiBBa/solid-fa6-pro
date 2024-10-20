
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=thin circle-arrow-up}
 * @preview ![circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-arrow-up.svg)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM365.7 234.3l-104-104c-3.1-3.1-8.2-3.1-11.3 0l-104 104c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 155.3 248 376c0 4.4 3.6 8 8 8s8-3.6 8-8l0-220.7 90.3 90.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3z" />
    </Icon>
);

export default CircleArrowUp;