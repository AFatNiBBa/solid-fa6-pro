
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=thin nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l161.1 0c-.5 5.3-.8 10.6-1 16L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 131c-5.4 .8-10.7 1.8-16 2.9l0-134c0-26.5-21.5-48-48-48zm-16 88l0 116.8c-5.4 2.8-10.8 5.8-16 8.9L352 136c0-4.4-3.6-8-8-8l-104 0c-4.4 0-8 3.6-8 8l0 80.8c18.3 3.7 32 19.8 32 39.2c0 22.1-17.9 40-40 40s-40-17.9-40-40c0-19.4 13.7-35.5 32-39.2l0-80.8c0-13.3 10.7-24 24-24l104 0c13.3 0 24 10.7 24 24zM239 400l-135 0c-13.3 0-24-10.7-24-24l0-240c0-13.3 10.7-24 24-24l48 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-48 0c-4.4 0-8 3.6-8 8l0 240c0 4.4 3.6 8 8 8l141.3 0c-2.3 5.2-4.3 10.6-6.3 16zM224 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm280 24c4.4 0 8 3.6 8 8s-3.6 8-8 8c-128.1 0-232 103.9-232 232c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-137 111-248 248-248zM464 480a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm48 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm0-120c0 4.4-3.6 8-8 8c-75.1 0-136 60.9-136 136c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-83.9 68.1-152 152-152c4.4 0 8 3.6 8 8z" />
    </Icon>
);

export default NfcSignal;