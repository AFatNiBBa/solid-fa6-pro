
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=sharp-light hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 512L0 512l0-32 16 0 16 0 0-112 0-7.8 6.2-4.8L165.9 256 38.2 156.6 32 151.8l0-7.8L32 32 16 32 0 32 0 0 16 0 48 0 336 0l32 0 16 0 0 32-16 0-16 0 0 112 0 7.8-6.2 4.8L218.1 256l52.8 41.1c-4.5 10.3-8.1 21.1-10.6 32.3L192 276.3 64 375.8 64 480l232.2 0c10 12.1 21.7 22.9 34.6 32L48 512l-32 0zM192 235.7l128-99.6L320 32 64 32l0 104.2 128 99.6zM432 480a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 64l0 16 0 48 32 0 16 0 0 32-16 0-48 0-16 0 0-16 0-64 0-16 32 0z" />
    </Icon>
);

export default HourglassClock;