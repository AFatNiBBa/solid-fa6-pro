
import { Icon, generic } from "../../index";

/**
 * A component that renders the `soft-serve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/soft-serve?s=duotone soft-serve}
 * @preview ![soft-serve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/soft-serve.svg)
 */
const SoftServe: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M16 232c0 39.8 32.2 72 72 72l208 0c39.8 0 72-32.2 72-72c0-34.8-24.7-63.8-57.4-70.5c6-9.7 9.4-21.2 9.4-33.5C320 57.3 262.7 0 192 0l6.1 6.1c6.4 6.4 9.9 15 9.9 24C208 48.8 192.8 64 174.1 64L128 64c-35.3 0-64 28.7-64 64c0 12.3 3.5 23.7 9.4 33.5C40.7 168.2 16 197.2 16 232z" />
        <path d="M80 304c-17.7 0-32 14.3-32 32l0 16c0 17.7 14.3 32 32 32l1.8 0 11.1 99.5c1.8 16.2 15.5 28.5 31.8 28.5l134.7 0c16.3 0 30-12.3 31.8-28.5L302.2 384l1.8 0c17.7 0 32-14.3 32-32l0-16c0-17.7-14.3-32-32-32L80 304z" />
    </Icon>
);

export default SoftServe;