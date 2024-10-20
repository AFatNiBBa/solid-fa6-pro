
import { Icon } from "../../index";

/**
 * A component that renders the `bridge-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-lock?s=light bridge-lock}
 * @preview ![bridge-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bridge-lock.svg)
 */
const BridgeLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 32l80 0 128 0 128 0 128 0 80 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 64 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0-16 0-128 0-128 0-128 0-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-64L48 64c-8.8 0-16-7.2-16-16s7.2-16 16-16zM320 240c40.6 0 75.4 25.3 89.4 60.9C394 312.6 384 331.2 384 352l0-16c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 96c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-96c0-35.3-28.7-64-64-64l-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c53 0 96 43 96 96l0 96c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-96c0-53 43-96 96-96zM496 64l-96 0 0 64 96 0 0-64zM368 64l-96 0 0 64 96 0 0-64zM240 64l-96 0 0 64 96 0 0-64zM528 224c-26.5 0-48 21.5-48 48l0 48 96 0 0-48c0-26.5-21.5-48-48-48zm-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l0-48zm0 80l0 128 160 0 0-128-160 0z" />
    </Icon>
);

export default BridgeLock;