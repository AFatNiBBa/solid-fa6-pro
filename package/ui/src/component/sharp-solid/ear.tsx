
import { Icon } from "../../index";

/**
 * A component that renders the `ear` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear?s=sharp-solid ear}
 * @preview ![ear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ear.svg)
 */
const Ear: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 192c0 71.2-38.7 133.3-96.3 166.5c.2 3.1 .3 6.3 .3 9.5c0 79.5-64.5 144-144 144S0 447.5 0 368L0 192C0 86 86 0 192 0S384 86 384 192zm-256 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 8 0 24 48 0 0-24 0-8c0-61.9-50.1-112-112-112S80 130.1 80 192l0 40 0 14.8 13.3 6.6L128 270.8l0 5.9L88.6 309.6 70.2 324.9l30.7 36.9 18.4-15.4 48-40 8.6-7.2 0-11.2 0-32 0-14.8-13.3-6.6L128 217.2l0-25.2z" />
    </Icon>
);

export default Ear;