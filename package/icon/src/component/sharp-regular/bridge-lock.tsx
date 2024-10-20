
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=sharp-regular bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l24 0 520 0 24 0 0 48-24 0-40 0 0 64 48 0 24 0 0 48-1.6 0c-20.2-19.8-47.9-32-78.4-32s-58.2 12.2-78.4 32L280 192l-48 0-80 0-48 0-48 0-24 0 0-48 24 0 48 0 0-64L56 80 32 80l0-48zM384 258.5l0 29.5 0 39c-12-23.2-36.1-39-64-39c-39.8 0-72 32.2-72 72l0 96 0 24-24 0-96 0-24 0 0-24 0-120c0-26.5-21.5-48-48-48l-24 0 0-48 24 0c53 0 96 43 96 96l0 96 48 0 0-72c0-66.3 53.7-120 120-120c23.5 0 45.5 6.8 64 18.5zM408 80l0 64 80 0 0-64-80 0zm-48 64l0-64-80 0 0 64 80 0zM152 80l0 64 80 0 0-64-80 0zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default BridgeLock;