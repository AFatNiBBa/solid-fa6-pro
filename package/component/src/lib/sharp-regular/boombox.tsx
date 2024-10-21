
import { Icon } from "../../index";

/**
 * A component that renders the `boombox` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boombox?s=sharp-regular boombox}
 * @preview ![boombox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/boombox.svg)
 */
const Boombox: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 0L72 0 568 0l24 0 0 24 0 136 48 0 0 48 0 256 0 48-48 0L48 512 0 512l0-48L0 208l0-48 48 0L48 24 48 0zM544 48L96 48l0 112 96 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 96 0 0-112zm48 160L48 208l0 256 544 0 0-256zM176 240a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm48 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm144 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm96 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Boombox;