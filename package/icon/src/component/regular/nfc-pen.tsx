
import { Icon } from "../../index";

/**
 * A component that renders the `nfc-pen` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-pen?s=regular nfc-pen}
 * @preview ![nfc-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/nfc-pen.svg)
 */
const NfcPen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 80L64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l206.5 0-12 48L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 139.6-48 48L400 96c0-8.8-7.2-16-16-16zM289.3 394.3c-1.8 1.8-3.5 3.7-5 5.7L120 400c-22.1 0-40-17.9-40-40l0-208c0-22.1 17.9-40 40-40l16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 192 192 0 0-192-72 0 0 54.4c14.3 8.3 24 23.8 24 41.6c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-17.8 9.7-33.3 24-41.6l0-62.4c0-22.1 17.9-40 40-40l88 0c22.1 0 40 17.9 40 40l0 163.6-78.7 78.7zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
    </Icon>
);

export default NfcPen;