
import { Icon } from "../../index";

/**
 * A component that renders the `gamepad` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gamepad?s=sharp-thin gamepad}
 * @preview ![gamepad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gamepad.svg)
 */
const Gamepad: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 80l0 352 608 0 0-352L16 80zM0 64l16 0 608 0 16 0 0 16 0 352 0 16-16 0L16 448 0 448l0-16L0 80 0 64zM200 192l0 56 56 0 8 0 0 16-8 0-56 0 0 56 0 8-16 0 0-8 0-56-56 0-8 0 0-16 8 0 56 0 0-56 0-8 16 0 0 8zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm40 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm64-160a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Gamepad;