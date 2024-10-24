
import { Icon } from "../../index";

/**
 * A component that renders the `qrcode` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/qrcode?s=sharp-thin qrcode}
 * @preview ![qrcode](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/qrcode.svg)
 */
const Qrcode: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M176 48l0 160L16 208 16 48l160 0zM16 32L0 32 0 48 0 208l0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0L16 32zM176 304l0 160L16 464l0-160 160 0zM16 288L0 288l0 16L0 464l0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0L16 288zM272 48l160 0 0 160-160 0 0-160zM256 32l0 16 0 160 0 16 16 0 160 0 16 0 0-16 0-160 0-16-16 0L272 32l-16 0zm0 256l0 8 0 176 0 8 16 0 0-8 0-168 32 0 0 104 0 8 8 0 48 0 8 0 0-8 0-104 32 0 0 104 0 8 8 0 32 0 8 0 0-16-8 0-24 0 0-104 0-8-8 0-48 0-8 0 0 8 0 104-32 0 0-104 0-8-8 0-48 0-8 0zm80-176l32 0 0 32-32 0 0-32zM320 96l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0-16 0zM112 112l0 32-32 0 0-32 32 0zM80 96L64 96l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0L80 96zm0 272l32 0 0 32-32 0 0-32zM64 352l0 16 0 32 0 16 16 0 32 0 16 0 0-16 0-32 0-16-16 0-32 0-16 0zm256 96l0 32 32 0 0-32-32 0zm128 0l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Qrcode;