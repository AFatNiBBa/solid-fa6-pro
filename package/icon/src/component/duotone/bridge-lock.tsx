
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=duotone bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 64c0 17.7 14.3 32 32 32l40 0 0 64-72 0 0 128c53 0 96 43 96 96l0 64c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-64c0-53 43-96 96-96c28.8 0 54.6 12.7 72.2 32.7c5.6-10 13.9-18.4 23.8-24.1l0-24.6c0-61.9 50.1-112 112-112l8 0 0-64 40 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64zM152 96l80 0 0 64-80 0 0-64zm128 0l80 0 0 64-80 0 0-64zm128 0l80 0 0 64-80 0 0-64z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default BridgeLock;