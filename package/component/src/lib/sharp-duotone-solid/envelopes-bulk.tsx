
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelopes-bulk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes-bulk?s=sharp-duotone-solid envelopes-bulk}
 * @preview ![envelopes-bulk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/envelopes-bulk.svg)
 */
const EnvelopesBulk: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 306.1c53.3 38.1 106.7 76.2 160 114.3L352 306.1l0 39.3C301.8 381.3 251.5 417.1 201.3 453c-3.1 2.2-6.2 4.4-9.3 6.6c-3.1-2.2-6.2-4.4-9.3-6.6C132.5 417.1 82.2 381.3 32 345.4l0-39.3zM96 0L480 0l0 128-256 0-32 0 0 32 0 64-96 0L96 0zM224 160l32 0 352 0 0 256-224 0 0-160 0-32-32 0-128 0 0-32 0-32zm256 64l0 64 64 0 0-64-64 0z" />
        <path d="M544 224l0 64-64 0 0-64 64 0zM32 256l320 0 0 50.1L192 420.3 32 306.1 32 256zM201.3 453L352 345.4 352 512 32 512l0-166.6L182.7 453l9.3 6.6 9.3-6.6z" />
    </Icon>
);

export default EnvelopesBulk;