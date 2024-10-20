
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=light hourglass}
 * @preview ![hourglass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hourglass.svg)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16l16 0 0 41.6c0 49.4 22.8 96 61.8 126.3L165.9 256 93.8 312.1C54.8 342.4 32 389.1 32 438.4L32 480l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0 288 0 32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-41.6c0-49.4-22.8-96-61.8-126.3L218.1 256l72.2-56.1c39-30.3 61.8-76.9 61.8-126.3L352 32l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L336 0 48 0 16 0zM320 32l0 41.6c0 39.5-18.2 76.8-49.4 101L192 235.7l-78.6-61.1C82.2 150.4 64 113.1 64 73.6L64 32l256 0zM192 276.3l78.6 61.1c31.2 24.2 49.4 61.5 49.4 101l0 41.6L64 480l0-41.6c0-39.5 18.2-76.8 49.4-101L192 276.3z" />
    </Icon>
);

export default Hourglass;