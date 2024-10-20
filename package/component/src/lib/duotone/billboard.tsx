
import { Icon, generic } from "../../index";

/**
 * A component that renders the `billboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=duotone billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 160c0 17.7 14.3 32 32 32l32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 0 32c-17.7 0-32 14.3-32 32zM288 416l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64-64 0zm64-256c0 17.7 14.3 32 32 32l32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 0 32c-17.7 0-32 14.3-32 32z" />
        <path d="M192 32L80 32C53.5 32 32 53.5 32 80l0 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 480 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-272c0-26.5-21.5-48-48-48L448 32l0 64 96 0 0 256L96 352 96 96l96 0 0-64zm64 64l128 0 0-64L256 32l0 64z" />
    </Icon>
);

export default Billboard;