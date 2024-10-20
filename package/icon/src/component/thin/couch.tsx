
import { Icon } from "../../index";

/**
 * A component that renders the `couch` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/couch?s=thin couch}
 * @preview ![couch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/couch.svg)
 */
const Couch: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 48L192 48C130.1 48 80 98.1 80 160l0 33.3c-5.2-.9-10.5-1.3-16-1.3l0-32C64 89.3 121.3 32 192 32l256 0c70.7 0 128 57.3 128 128l0 32c-5.5 0-10.8 .5-16 1.3l0-33.3c0-61.9-50.1-112-112-112zM112 288c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 144c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-144zM0 288c0-35.3 28.7-64 64-64s64 28.7 64 64l384 0c0-35.3 28.7-64 64-64s64 28.7 64 64l0 144c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l-384 0c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48L0 288zM128 416l384 0 0-112-384 0 0 112zM624 288c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 144c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-144z" />
    </Icon>
);

export default Couch;