
import { Icon } from "../../index";

/**
 * A component that renders the `fork` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=sharp-solid fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path d="M408 8l16 16L320 128l16 16L448 48l16 16L368 176l16 16L488 88l16 16L433.5 227.4C417.7 255 388.4 272 356.7 272c-19.4 0-38.1-6.4-53.4-18L70.6 486.6 48 509.3 2.7 464l22.6-22.6L258 208.8c-11.6-15.3-18-34-18-53.4c0-31.8 17-61.1 44.6-76.8L408 8z" />
    </Icon>
);

export default Fork;