
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=light nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 64L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l163 0c-1.6 10.5-2.6 21.2-2.9 32L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 131c-10.9 1.7-21.6 4-32 6.9L416 96c0-17.7-14.3-32-32-32zm0 64l0 117.3c-11.1 4.8-21.8 10.2-32 16.4L352 128l-112 0 0 82.7c18.6 6.6 32 24.4 32 45.3c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3l0-82.7c0-17.7 14.3-32 32-32l112 0c17.7 0 32 14.3 32 32zM233.9 416L96 416c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 256 149.3 0c-4.4 10.3-8.2 21-11.3 32zM224 240a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm272 16c8.8 0 16 7.2 16 16s-7.2 16-16 16c-114.9 0-208 93.1-208 208c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-132.5 107.5-240 240-240zM480 448a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm32-80c0 8.8-7.2 16-16 16c-61.9 0-112 50.1-112 112c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-79.5 64.5-144 144-144c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default NfcSignal;