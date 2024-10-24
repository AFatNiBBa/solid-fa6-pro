
import { Icon } from "../../index";

/**
 * A component that renders the `signal-fair` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signal-fair?s=solid signal-fair}
 * @preview ![signal-fair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/signal-fair.svg)
 */
const SignalFair: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160zM96 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64z" />
    </Icon>
);

export default SignalFair;