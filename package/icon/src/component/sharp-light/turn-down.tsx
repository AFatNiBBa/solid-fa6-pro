
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=sharp-light turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 352l0-32 0-192 0-32-32 0L32 96l0-64 192 0 0 288 0 32 32 0 50.7 0L192 466.7 77.3 352l50.7 0 32 0zM64 320l-32 0 0 32L169.4 489.4 192 512l22.6-22.6L352 352l0-32-32 0-32 0-32 0 0-32 0-256 0-32L224 0 32 0 0 0 0 32 0 96l0 32 32 0 64 0 32 0 0 32 0 128 0 32-32 0-32 0z" />
    </Icon>
);

export default TurnDown;