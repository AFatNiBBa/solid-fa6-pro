
import { Icon } from "../../index";

/**
 * A component that renders the `h6` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h6?s=sharp-thin h6}
 * @preview ![h6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/h6.svg)
 */
const H6: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 64l0 8 0 168 288 0 0-168 0-8 16 0 0 8 0 176 0 192 0 8-16 0 0-8 0-184L16 256l0 184 0 8L0 448l0-8L0 248 0 72l0-8 16 0zM496 432c70.7 0 128-57.3 128-128s-57.3-128-128-128c-69.9 0-126.7 56-128 125.5c0 .8 0 1.6 0 2.5c0 0 0 0 0 0c0 70.7 57.3 128 128 128zM352 304c0-1.2 0-2.5 0-3.7c.8-31.6 11.7-62.1 31.2-87L500.1 64l20.3 0L434.5 173.7C453.2 164.9 474 160 496 160c79.5 0 144 64.5 144 144s-64.5 144-144 144s-144-64.5-144-144c0 0 0 0 0 0z" />
    </Icon>
);

export default H6;