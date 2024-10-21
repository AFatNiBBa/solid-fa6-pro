
import { Icon } from "../../index";

/**
 * A component that renders the `tamale` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tamale?s=sharp-solid tamale}
 * @preview ![tamale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tamale.svg)
 */
const Tamale: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 48S48 0 160 0S320 48 320 48L295.4 208l-59.2 0L248 72.7l.7-8-15.9-1.4-.7 8L220.1 208 168 208l0-144 0-8-16 0 0 8 0 144-52.1 0L88 71.3l-.7-8L71.3 64.7l.7 8L83.8 208l-59.2 0L0 48zM256 304l39.4 0L320 464s-48 48-160 48S0 464 0 464L24.6 304 64 304 44.8 329.6l34.5 25.9L72 439.3l-.7 8 15.9 1.4 .7-8 6.4-73.9 27.2 20.4 28.8-38.4 1.6-2.1L152 448l0 8 16 0 0-8 0-101.3 1.6 2.1 28.8 38.4 27.2-20.4 6.4 73.9 .7 8 15.9-1.4-.7-8-7.3-83.8 34.5-25.9L256 304zM24 240l136 0 136 0 16 0 0 32-16 0-104 0 28.8 38.4 9.6 12.8-25.6 19.2-9.6-12.8L160 282.7l-35.2 46.9-9.6 12.8L89.6 323.2l9.6-12.8L128 272 24 272 8 272l0-32 16 0z" />
    </Icon>
);

export default Tamale;