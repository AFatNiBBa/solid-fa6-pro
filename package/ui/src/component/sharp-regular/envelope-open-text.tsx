
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=sharp-regular envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48l0 167.6L64 183 64 48 64 0l48 0L400 0l48 0 0 48 0 135-48 32.6L400 48 112 48zM256 410l-27-18.3L48 268.9 48 464l416 0 0-195.1L283 391.7 256 410zM464 210.9l48-32.6 0 58L512 464l0 48-48 0L48 512 0 512l0-48L0 236.3l0-58 48 32.6L256 352 464 210.9zM184 96l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0zm0 80l144 0 24 0 0 48-24 0-144 0-24 0 0-48 24 0z" />
    </Icon>
);

export default EnvelopeOpenText;