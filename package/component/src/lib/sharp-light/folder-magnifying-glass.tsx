
import { Icon } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=sharp-light folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 32l192 0 48 64 208 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 64 0 32l32 0zm240 96l-16 0-9.6-12.8L208 64 32 64l0 384 448 0 0-320-208 0zM240 336a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 32c-53 0-96-43-96-96s43-96 96-96s96 43 96 96c0 20.8-6.6 40-17.8 55.7l45.1 45.1 11.3 11.3L352 406.8l-11.3-11.3-45.1-45.1C279.9 361.5 260.7 368 240 368z" />
    </Icon>
);

export default FolderMagnifyingGlass;