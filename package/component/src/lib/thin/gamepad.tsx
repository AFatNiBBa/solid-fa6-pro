
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=thin gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 80C94.8 80 16 158.8 16 256s78.8 176 176 176l256 0c97.2 0 176-78.8 176-176s-78.8-176-176-176L192 80zM0 256C0 150 86 64 192 64l256 0c106 0 192 86 192 192s-86 192-192 192l-256 0C86 448 0 362 0 256zm200-64l0 56 56 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-56 0 0 56c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-56-56 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0 0-56c0-4.4 3.6-8 8-8s8 3.6 8 8zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm64-160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Gamepad;