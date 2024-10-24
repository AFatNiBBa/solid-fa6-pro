
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=sharp-thin bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l8 0 560 0 8 0 0 16-8 0-80 0 0 96 80 0 8 0 0 16-8 0-72 0L40 160l-8 0 0-16 8 0 80 0 0-96L40 48l-8 0 0-16zM384 288l0 23c-12-23.2-36.1-39-64-39c-39.8 0-72 32.2-72 72l0 128 0 8-8 0-96 0-8 0 0-8 0-128c0-39.8-32.2-72-72-72l-24 0-8 0 0-16 8 0 24 0c48.6 0 88 39.4 88 88l0 120 80 0 0-120c0-48.6 39.4-88 88-88c25.2 0 48 10.6 64 27.6l0 4.4zm8-240l0 96 112 0 0-96L392 48zm-16 96l0-96L264 48l0 96 112 0zM136 48l0 96 112 0 0-96L136 48zM528 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64zm-32 80l0 160 192 0 0-160-32 0-16 0-96 0-16 0-32 0z" />
    </Icon>
);

export default BridgeLock;