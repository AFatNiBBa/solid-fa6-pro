
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=light envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64c17.7 0 32 14.3 32 32l0 19.6L364.4 247.3c-16.9 12.4-39.9 12.4-56.8 0L128 115.6 128 96c0-17.7 14.3-32 32-32l352 0zM128 320l0-164.7L288.7 273.1c28.2 20.7 66.5 20.7 94.6 0L544 155.3 544 320c0 17.7-14.3 32-32 32l-352 0c-17.7 0-32-14.3-32-32zM160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM32 112c0-8.8-7.2-16-16-16s-16 7.2-16 16L0 352c0 70.7 57.3 128 128 128l336 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-336 0c-53 0-96-43-96-96l0-240z" />
    </Icon>
);

export default Envelopes;