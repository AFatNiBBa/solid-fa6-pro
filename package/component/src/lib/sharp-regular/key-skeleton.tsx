
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=sharp-regular key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 144a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm48 0c0 79.5-64.5 144-144 144c-31.1 0-59.9-9.9-83.4-26.6l-87.4 87.4 47 47 17 17-33.9 33.9-17-17-47-47L69.1 412.8l47 47 17 17L99.2 510.7l-17-17-64-64-17-17 17-17L186.6 227.4C169.9 203.9 160 175.1 160 144C160 64.5 224.5 0 304 0s144 64.5 144 144z" />
    </Icon>
);

export default KeySkeleton;