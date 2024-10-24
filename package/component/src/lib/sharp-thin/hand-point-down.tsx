
import { Icon } from "../../index";

/**
 * A component that renders the `hand-point-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-down?s=sharp-thin hand-point-down}
 * @preview ![hand-point-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hand-point-down.svg)
 */
const HandPointDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M56 512l-8 0 0-8 0-248L8 256l-8 0 0-8 0-96C0 68.1 68.1 0 152 0l80 0c83.9 0 152 68.1 152 152l0 8 0 8 0 64 0 72 0 8-8 0-72 0 0 8 0 8-8 0-72 0 0 24 0 8-8 0-72 0 0 144 0 8-8 0-80 0zm88-168l64 0 0-16 0-8 0-64-64 0 0 88zm64-104s0 0 0 0l0-64-104 0-8 0 0-16 8 0 104 0 8 0 8 0 64 0 8 0 8 0 64 0 0-8c0-75.1-60.9-136-136-136l-80 0C76.9 16 16 76.9 16 152l0 88 32 0s0 0 0 0l16 0s0 0 0 0l64 0s0 0 0 0l16 0s0 0 0 0l64 0zm16 0l0 8 0 8 0 56 64 0 0-8 0-128-64 0 0 64zm-96 16l-64 0 0 240 64 0 0-136 0-8 0-96zm240-24l0-56-64 0 0 120 64 0 0-64z" />
    </Icon>
);

export default HandPointDown;