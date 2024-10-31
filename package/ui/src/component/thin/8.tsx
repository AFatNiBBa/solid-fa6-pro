
import { Icon } from "../../index";

/**
 * A component that renders the `8` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/8?s=thin 8}
 * @preview ![8](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/8.svg)
 */
const $8: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M296 148c0-64.1-51.9-116-116-116l-40 0C75.9 32 24 83.9 24 148c0 45.2 25.9 84.4 63.6 103.5C37.3 264.2 0 309.7 0 364c0 64.1 51.9 116 116 116l88 0c64.1 0 116-51.9 116-116c0-54.3-37.3-99.8-87.6-112.5C270.1 232.4 296 193.2 296 148zM180.1 264l23.9 0c55.2 0 100 44.8 100 100s-44.8 100-100 100l-88 0C60.8 464 16 419.2 16 364s44.8-100 100-100l23.9 0c0 0 0 0 .1 0l40 0c0 0 0 0 .1 0zm0-16c0 0 0 0-.1 0l-40 0c0 0 0 0-.1 0C84.7 248 40 203.2 40 148C40 92.8 84.8 48 140 48l40 0c55.2 0 100 44.8 100 100c0 55.2-44.7 100-99.9 100z" />
    </Icon>
);

export default $8;