
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelope-open-text` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-open-text?s=sharp-duotone-solid envelope-open-text}
 * @preview ![envelope-open-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/envelope-open-text.svg)
 */
const EnvelopeOpenText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 32l149.3 0 85.3 0L448 32l0 112 0 80 0 27.2L256 388.3 64 251.2 64 224l0-80L64 32zm96 96l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm0 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0z" />
        <path d="M489.3 221.7L448 251.2l0-27.2 0-80 64 48 0 13.5-22.7 16.2zm18.6 26l4.1-2.9L512 448l0 64-64 0L64 512 0 512l0-64L0 244.8l4.1 2.9L246.7 421l9.3 6.6 9.3-6.6L507.9 247.7zm-485.2-26L0 205.5 0 192l64-48 0 80 0 27.2L22.7 221.7zM256 0l42.7 32-85.3 0L256 0zM176 128l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm0 64l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0z" />
    </Icon>
);

export default EnvelopeOpenText;