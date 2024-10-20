
import { Icon, generic } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=duotone folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L288 96c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32L64 32C28.7 32 0 60.7 0 96zM144 272c0-53 43-96 96-96s96 43 96 96c0 17.8-4.9 34.5-13.3 48.9L361 359.2c4.7 4.7 7 10.8 7 17s-2.3 12.3-7 17s-10.8 7-17 7s-12.3-2.3-17-7l-38.4-38.4C274.4 363.2 257.8 368 240 368c-53 0-96-43-96-96zm48 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M322.7 320.9c8.5-14.3 13.3-31 13.3-48.9c0-53-43-96-96-96s-96 43-96 96s43 96 96 96c17.8 0 34.4-4.8 48.7-13.2L327 393.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-38.3-38.3zM192 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default FolderMagnifyingGlass;