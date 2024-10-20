
import { Icon, generic } from "../../index";

/**
 * A component that renders the `billboard` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=sharp-duotone-solid billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 128l0 64 32 0 32 0 32 0 32 0 0-64-32 0 0-32 0-64 0-32L192 0l0 32 0 64 0 32-32 0zM288 416l0 64 0 32 64 0 0-32 0-64-64 0zm64-288l0 64 32 0 32 0 32 0 32 0 0-64-32 0 0-32 0-64 0-32L384 0l0 32 0 64 0 32-32 0z" />
        <path d="M192 32L96 32 32 32l0 64 0 256L0 352l0 64 32 0 64 0 448 0 64 0 32 0 0-64-32 0 0-256 0-64-64 0-96 0 0 64 96 0 0 256L96 352 96 96l96 0 0-64zm64 64l128 0 0-64L256 32l0 64z" />
    </Icon>
);

export default Billboard;