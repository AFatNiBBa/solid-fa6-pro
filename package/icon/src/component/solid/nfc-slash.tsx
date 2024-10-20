
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-slash` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-slash?s=solid nfc-slash}
 * @preview ![nfc-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/nfc-slash.svg)
 */
const NfcSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.8-68L544 96c0-35.3-28.7-64-64-64L160 32c-21.6 0-40.7 10.7-52.3 27.1L38.8 5.1zM173.5 110.7c8.7-9 21-14.7 34.5-14.7l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-3.3 0-6.4 1-8.9 2.7l-25.6-20.1zM302.1 211.5c.6-.3 1.3-.5 1.9-.7l0-66.7c0-26.5 21.5-48 48-48l80 0c26.5 0 48 21.5 48 48l0 206.9-32-25.1L448 144c0-8.8-7.2-16-16-16l-80 0c-8.8 0-16 7.2-16 16l0 66.7c18.6 6.6 32 24.4 32 45.3c0 2.3-.2 4.6-.5 6.8l-65.5-51.3zM486.9 479.6L406.2 416 208 416c-26.5 0-48-21.5-48-48l0-145.9L96 171.6 96 416c0 35.3 28.7 64 64 64l320 0c2.3 0 4.6-.1 6.9-.4zM208 384l157.5 0L192 247.3 192 368c0 8.8 7.2 16 16 16z" />
    </Icon>
);

export default NfcSlash;