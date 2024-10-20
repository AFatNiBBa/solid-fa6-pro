
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-prescription` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-prescription?s=solid clipboard-prescription}
 * @preview ![clipboard-prescription](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/clipboard-prescription.svg)
 */
const ClipboardPrescription: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0c-41.8 0-77.4 26.7-90.5 64L64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-37.5 0C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM104 196l72 0c33.1 0 60 26.9 60 60c0 25.5-15.9 47.2-38.3 55.9l43 40.3 33.8-31c8.1-7.5 20.8-6.9 28.3 1.2s6.9 20.8-1.2 28.3L270 379.7l31.7 29.7c8.1 7.6 8.5 20.2 .9 28.3s-20.2 8.5-28.3 .9l-33.9-31.8-34.9 32c-8.1 7.5-20.8 6.9-28.3-1.2s-6.9-20.8 1.2-28.3l32.6-29.9-64.8-60.8c-.9-.8-1.6-1.7-2.3-2.6l-20 0 0 44c0 11-9 20-20 20s-20-9-20-20l0-64 0-80c0-11 9-20 20-20zm72 80c11 0 20-9 20-20s-9-20-20-20l-52 0 0 40 52 0z" />
    </Icon>
);

export default ClipboardPrescription;