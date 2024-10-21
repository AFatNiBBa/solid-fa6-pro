
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=light hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 0-41.6c0-49.4 22.8-96 61.8-126.3L165.9 256 93.8 199.9C54.8 169.6 32 122.9 32 73.6L32 32 16 32C7.2 32 0 24.8 0 16S7.2 0 16 0L48 0 336 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 41.6c0 49.4-22.8 96-61.8 126.3L218.1 256l52.8 41.1c-4.5 10.3-8.1 21.1-10.6 32.3L192 276.3l-78.6 61.1C82.2 361.6 64 398.9 64 438.4L64 480l232.2 0c10 12.1 21.7 22.9 34.6 32L48 512l-32 0zM192 235.7l78.6-61.1c31.2-24.3 49.4-61.5 49.4-101L320 32 64 32l0 41.6c0 39.5 18.2 76.8 49.4 101L192 235.7zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm0 64c8.8 0 16 7.2 16 16l0 48 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default HourglassClock;