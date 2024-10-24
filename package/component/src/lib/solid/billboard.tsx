
import { Icon } from "../../index";

/**
 * A component that renders the `billboard` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/billboard?s=solid billboard}
 * @preview ![billboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/billboard.svg)
 */
const Billboard: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 32c0-17.7-14.3-32-32-32s-32 14.3-32 32L256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32L80 32C53.5 32 32 53.5 32 80l0 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l48 0 208 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 208 0 48 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-272c0-26.5-21.5-48-48-48L448 32zM320 352L96 352 96 96l96 0 0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32 128 0 0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-32 96 0 0 256-224 0z" />
    </Icon>
);

export default Billboard;