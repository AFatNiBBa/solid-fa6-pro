
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=sharp-light nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M40.4 18L27.8 8.1 8.1 33.4l12.6 9.8L599.8 494.3l12.6 9.8 19.7-25.2L619.5 469 40.4 18zM544 351.3L544 64l0-32-32 0L139.6 32l40.5 32L192 64l64 0 256 0 0 262 32 25.3zm-64-50.5L480 112l0-16-16 0L320 96l-16 0 0 16 0 49.8 32 25.3 0-59.1 112 0 0 147.5 32 25.3zM378.8 384L192 384l0-147.5-32-25.3L160 400l0 16 16 0 243.4 0-40.5-32zM128 186L96 160.7 96 448l0 32 32 0 372.4 0-40.5-32L128 448l0-262z" />
    </Icon>
);

export default NfcSlash;