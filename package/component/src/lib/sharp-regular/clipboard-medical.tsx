
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-medical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-medical?s=sharp-regular clipboard-medical}
 * @preview ![clipboard-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clipboard-medical.svg)
 */
const ClipboardMedical: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M336 64l-32 0-33.6 0C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L80 64 48 64 0 64l0 48L0 464l0 48 48 0 288 0 48 0 0-48 0-352 0-48-48 0zM80 112l0 48 112 0 112 0 0-48 32 0 0 352L48 464l0-352 32 0zm88-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-8 208l-64 0 0 64 64 0 0 64 64 0 0-64 64 0 0-64-64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default ClipboardMedical;