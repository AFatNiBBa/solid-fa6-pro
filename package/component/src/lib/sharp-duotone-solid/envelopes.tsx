
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelopes` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes?s=sharp-duotone-solid envelopes}
 * @preview ![envelopes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/envelopes.svg)
 */
const Envelopes: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 56.9c2.2 1.6 4.5 3.2 6.7 4.8C180.5 149.2 258.2 204.8 336 260.3c77.8-55.6 155.5-111.1 233.3-166.6c2.2-1.6 4.5-3.2 6.7-4.8L576 32 96 32zm0 96.2L96 384l480 0 0-255.8C499.1 183.2 422.2 238.1 345.3 293c-3.1 2.2-6.2 4.4-9.3 6.6c-3.1-2.2-6.2-4.4-9.3-6.6C249.8 238.1 172.9 183.2 96 128.2z" />
        <path d="M336 299.7l9.3-6.6L576 128.2l0-39.3-6.7 4.8L336 260.3 102.7 93.7 96 88.9l0 39.3L326.7 293l9.3 6.6zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default Envelopes;