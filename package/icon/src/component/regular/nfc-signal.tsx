
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-signal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-signal?s=regular nfc-signal}
 * @preview ![nfc-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-signal.svg)
 */
const NfcSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M384 80L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l166 0c-3.4 15.5-5.3 31.6-5.8 48L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 131c-16.6 2.5-32.6 6.6-48 12l0-143c0-8.8-7.2-16-16-16zm-16 72l0 100.8c-17.2 8.8-33.3 19.4-48 31.6L320 160l-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-62.4c0-22.1 17.9-40 40-40l88 0c22.1 0 40 17.9 40 40zM239 400l-119 0c-22.1 0-40-17.9-40-40l0-208c0-22.1 17.9-40 40-40l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 192 133.7 0c-9.1 15.1-16.7 31.1-22.7 48zM488 256c13.3 0 24 10.7 24 24s-10.7 24-24 24c-101.6 0-184 82.4-184 184c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1 103.9-232 232-232zm-8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm32-72c0 13.3-10.7 24-24 24c-48.6 0-88 39.4-88 88c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1 60.9-136 136-136c13.3 0 24 10.7 24 24z" />
    </Icon>
);

export default NfcSignal;