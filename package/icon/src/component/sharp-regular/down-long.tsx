
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=sharp-regular down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M192 352l0-48 0-256-64 0 0 256 0 48-48 0-12.1 0L160 444.1 252.1 352 240 352l-48 0zm1.9 126.1L160 512l-33.9-33.9L0 352l0-48 32 0 16 0 32 0 0-48L80 48 80 0l48 0 64 0 48 0 0 48 0 208 0 48 32 0 16 0 32 0 0 48L193.9 478.1z" />
    </Icon>
);

export default DownLong;