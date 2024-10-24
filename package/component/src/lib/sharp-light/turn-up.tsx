
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=sharp-light turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 160l0 32 0 192 0 32-32 0-96 0 0 64 192 0 0-288 0-32 32 0 50.7 0L192 45.3 77.3 160l50.7 0 32 0zM64 192l-32 0 0-32L169.4 22.6 192 0l22.6 22.6L352 160l0 32-32 0-32 0-32 0 0 32 0 256 0 32-32 0L32 512 0 512l0-32 0-64 0-32 32 0 64 0 32 0 0-32 0-128 0-32-32 0-32 0z" />
    </Icon>
);

export default TurnUp;