
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=sharp-light bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l16 0 64 0 32 0 96 0 32 0 96 0 32 0 96 0 32 0 64 0 16 0 0 32-16 0-64 0 0 64 64 0 16 0 0 32-16 0-64 0-32 0-96 0-32 0-96 0-32 0-96 0-32 0-64 0-16 0 0-32 16 0 64 0 0-64L48 64 32 64l0-32zM384 264.4l0 23.6 0 48c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128 0 16-16 0-96 0-16 0 0-16 0-128c0-35.3-28.7-64-64-64l-16 0-16 0 0-32 16 0 16 0c53 0 96 43 96 96l0 112 64 0 0-112c0-53 43-96 96-96c24.6 0 47 9.2 64 24.4zM400 64l0 64 96 0 0-64-96 0zm-32 64l0-64-96 0 0 64 96 0zM144 64l0 64 96 0 0-64-96 0zM528 224c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 32 0 128 0 32-32 0-160 0-32 0 0-32 0-128 0-32 32 0 0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default BridgeLock;