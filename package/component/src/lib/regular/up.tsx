
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=regular up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 82.4L334.7 232.3c.8 .8 1.3 2 1.3 3.2c0 2.5-2 4.6-4.6 4.6L248 240c-13.3 0-24 10.7-24 24l0 168-64 0 0-168c0-13.3-10.7-24-24-24l-83.4 0c-2.5 0-4.6-2-4.6-4.6c0-1.2 .5-2.3 1.3-3.2L192 82.4zm192 153c0-13.5-5.2-26.5-14.5-36.3L222.9 45.2C214.8 36.8 203.7 32 192 32s-22.8 4.8-30.9 13.2L14.5 199.2C5.2 208.9 0 221.9 0 235.4c0 29 23.5 52.6 52.6 52.6l59.4 0 0 144c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-144 59.4 0c29 0 52.6-23.5 52.6-52.6z" />
    </Icon>
);

export default Up;