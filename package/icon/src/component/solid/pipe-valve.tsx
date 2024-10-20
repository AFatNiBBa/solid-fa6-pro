
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=solid pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 12L128 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l128-16 128 16c17.7 0 32-14.3 32-32s-14.3-32-32-32L288 76l0-12zm0 84.2l-32-4-32 4 0 43.8L96 192l0 256 320 0 0-256-128 0 0-43.8zM32 160c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256c0-17.7-14.3-32-32-32zm480 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256z" />
    </Icon>
);

export default PipeValve;