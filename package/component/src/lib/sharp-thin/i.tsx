
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-thin i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M8 32L0 32 0 48l8 0 144 0 0 416L8 464l-8 0 0 16 8 0 304 0 8 0 0-16-8 0-144 0 0-416 144 0 8 0 0-16-8 0L160 32 8 32z" />
    </Icon>
);

export default I;