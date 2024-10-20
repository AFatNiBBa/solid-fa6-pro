
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=sharp-thin paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128.6 41.6L127.3 48l-6.5 0L80 48l0 16 0 32 160 0 0-32 0-16-40.8 0-6.5 0-1.3-6.4C188.4 27 175.5 16 160 16s-28.4 11-31.4 25.6zM64 48l0-8 0-8 8 0 42.7 0C121.3 13.4 139.1 0 160 0s38.7 13.4 45.3 32L248 32l8 0 0 8 0 8 48 0 16 0 0 16 0 32-16 0 0-32-48 0 0 40 0 8-8 0L72 112l-8 0 0-8 0-40L16 64l0 368 176 0 0 16L16 448 0 448l0-16L0 64 0 48l16 0 48 0zM496 496l0-265.4L409.4 144 240 144l0 352 256 0zm16-272l0 272 0 16-16 0-256 0-16 0 0-16 0-352 0-16 16 0 176 0 96 96z" />
    </Icon>
);

export default Paste;