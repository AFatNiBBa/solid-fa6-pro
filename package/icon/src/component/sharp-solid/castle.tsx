
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=sharp-solid castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l64 0 0 64 48 0 0-64 64 0 0 64 32 0 0-64 64 0 0 64 48 0 0-64 64 0 0 112 0 112 64 0 0-64 64 0 0 64 0 64 0 224-256 0 0-128c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 128L0 512 0 288l0-64 0-64 64 0 0 64 64 0 0-112L128 0z" />
    </Icon>
);

export default Castle;