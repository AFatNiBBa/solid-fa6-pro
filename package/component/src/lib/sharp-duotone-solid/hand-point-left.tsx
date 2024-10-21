
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-left?s=sharp-duotone-solid hand-point-left}
 * @preview ![hand-point-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-point-left.svg)
 */
const HandPointLeft: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 64 240 0 0-64L0 96zM272 64l0 192 48 0 32 0 0-96 0-16 32 0 0 16 0 112 0 16-16 0-48 0 0 64 32 0 0 96c88.4 0 160-71.6 160-160l0-61.7c0-42.4-16.9-83.1-46.9-113.1l-11.6-11.6C429.5 77.5 396.9 64 363 64l-91 0z" />
        <path d="M128 192l0 64 112 0 0-64-112 0zm32 96l0 64 128 0 0-64-128 0zm32 160l128 0 0-64-128 0 0 64z" />
    </Icon>
);

export default HandPointLeft;