
import { Icon } from "../../index";

/**
 * A component that renders the `square-k` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-k?s=light square-k}
 * @preview ![square-k](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-k.svg)
 */
const SquareK: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm315.1 59.5l-87.3 84.3 89 118.6c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2L204.6 262.2 160 305.3l0 62.7c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-69.5L128 144c0-8.8 7.2-16 16-16s16 7.2 16 16l0 116.8L292.9 132.5c6.4-6.1 16.5-6 22.6 .4s6 16.5-.4 22.6z" />
    </Icon>
);

export default SquareK;