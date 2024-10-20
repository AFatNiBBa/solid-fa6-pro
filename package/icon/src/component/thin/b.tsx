
import { Icon } from "../../index";

/**
 * A component that renders the `b` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=thin b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32C14.3 32 0 46.3 0 64L0 248 0 448c0 17.7 14.3 32 32 32l168 0c66.3 0 120-53.7 120-120c0-56.7-39.3-104.2-92.1-116.7C263.6 224.5 288 187.1 288 144c0-61.9-50.1-112-112-112L32 32zM176 240L16 240 16 64c0-8.8 7.2-16 16-16l144 0c53 0 96 43 96 96s-43 96-96 96zM16 256l160 0 24 0c57.4 0 104 46.6 104 104s-46.6 104-104 104L32 464c-8.8 0-16-7.2-16-16l0-192z" />
    </Icon>
);

export default B;