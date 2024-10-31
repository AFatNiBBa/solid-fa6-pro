
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=regular bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M56 32C42.7 32 32 42.7 32 56s10.7 24 24 24l48 0 0 64-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 128 0 193.6 0c20.2-19.8 47.9-32 78.4-32c27.3 0 52.4 9.8 71.8 26.1c5-4.4 8.2-10.9 8.2-18.1c0-13.3-10.7-24-24-24l-48 0 0-64 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 32zM336 240l-32 0c-57.4 0-104 46.6-104 104l0 88-48 0 0-96c0-53-43-96-96-96c-13.3 0-24 10.7-24 24s10.7 24 24 24c26.5 0 48 21.5 48 48l0 104c0 22.1 17.9 40 40 40l64 0c22.1 0 40-17.9 40-40l0-96c0-30.9 25.1-56 56-56l32 0c24.9 0 45.9 16.2 53.2 38.6c5.5-12.6 14.9-23.2 26.8-30l0-19c-19.1-22.9-47.8-37.5-80-37.5zM488 80l0 64-80 0 0-64 80 0zM360 80l0 64-80 0 0-64 80 0zM232 80l0 64-80 0 0-64 80 0zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default BridgeLock;