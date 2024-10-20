
import { Icon } from "../../index";

/**
 * A component that renders the `radio` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/radio?s=regular radio}
 * @preview ![radio](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/radio.svg)
 */
const Radio: typeof Icon = x => (
    <Icon {...x}>
        <path d="M494.4 47.1c12.8-3.5 20.3-16.7 16.8-29.5S494.4-2.7 481.6 .9L52.9 119.1C21.6 127.8 0 156.2 0 188.5L0 192 0 304 0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-246.8 0L494.4 47.1zM48 192c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-144 0-112zm304 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM112 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0zM96 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L96 304zm16 64c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z" />
    </Icon>
);

export default Radio;