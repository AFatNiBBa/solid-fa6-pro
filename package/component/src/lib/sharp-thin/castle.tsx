
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=sharp-thin castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0l8 0 64 0 8 0 0 8 0 64 24 0 0-64 0-8 8 0 56 0 8 0 0 8 0 64 32 0 0-64 0-8 8 0 56 0 8 0 0 8 0 64 24 0 0-64 0-8 8 0 64 0 8 0 0 8 0 216 48 0 0-56 0-8 8 0 64 0 8 0 0 8 0 336 0 8-8 0L8 512l-8 0 0-8L0 168l0-8 8 0 64 0 8 0 0 8 0 56 48 0L128 8l0-8zm16 240l-8 0-8 0-56 0-8 0 0-8 0-56-48 0 0 320 224 0 0-104c0-44.2 35.8-80 80-80s80 35.8 80 80l0 104 224 0 0-320-48 0 0 56 0 8-8 0-56 0-8 0-8 0-352 0zm352-16l0-208-48 0 0 64 0 8-8 0-40 0-8 0 0-8 0-64-40 0 0 64 0 8-8 0-48 0-8 0 0-8 0-64-40 0 0 64 0 8-8 0-40 0-8 0 0-8 0-64-48 0 0 208 352 0zM384 392c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 104 128 0 0-104z" />
    </Icon>
);

export default Castle;