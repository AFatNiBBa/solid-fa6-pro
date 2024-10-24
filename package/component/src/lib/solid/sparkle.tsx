
import { Icon } from "../../index";

/**
 * A component that renders the `sparkle` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkle?s=solid sparkle}
 * @preview ![sparkle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sparkle.svg)
 */
const Sparkle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M245.8 45.9C241.9 37.4 233.4 32 224 32s-17.9 5.4-21.8 13.9L142.7 174.7 13.9 234.2C5.4 238.1 0 246.6 0 256s5.4 17.9 13.9 21.8l128.8 59.5 59.5 128.8c3.9 8.5 12.4 13.9 21.8 13.9s17.9-5.4 21.8-13.9l59.5-128.8 128.8-59.5c8.5-3.9 13.9-12.4 13.9-21.8s-5.4-17.9-13.9-21.8L305.3 174.7 245.8 45.9z" />
    </Icon>
);

export default Sparkle;