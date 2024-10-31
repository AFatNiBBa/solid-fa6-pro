
import { Icon } from "../../index";

/**
 * A component that renders the `h1` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h1?s=thin h1}
 * @preview ![h1](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/h1.svg)
 */
const H1: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M496 72c0-2.9-1.6-5.6-4.1-7s-5.7-1.3-8.1 .2l-64 40c-3.7 2.3-4.9 7.3-2.5 11s7.3 4.9 11 2.5L480 86.4 480 432l-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0 64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-360zM16 72c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 248 0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-184 288 0 0 184c0 4.4 3.6 8 8 8s8-3.6 8-8l0-192 0-176c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168L16 240 16 72z" />
    </Icon>
);

export default H1;