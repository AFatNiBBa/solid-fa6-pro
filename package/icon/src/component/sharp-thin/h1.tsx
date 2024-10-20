
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=sharp-thin h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M16 72l0-8L0 64l0 8L0 248 0 440l0 8 16 0 0-8 0-184 288 0 0 184 0 8 16 0 0-8 0-192 0-176 0-8-16 0 0 8 0 168L16 240 16 72zm464 9.4L480 432l-56 0-8 0 0 16 8 0 64 0 64 0 8 0 0-16-8 0-56 0 0-360 0-8-8 0-8 0-2.3 0-1.9 1.2L416 102.6l0 18.9 64-40z" />
    </Icon>
);

export default H1;