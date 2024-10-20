
import { Icon, generic } from "../../index";

/**
 * A component that renders the `envelopes-bulk` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes-bulk?s=duotone envelopes-bulk}
 * @preview ![envelopes-bulk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/envelopes-bulk.svg)
 */
const EnvelopesBulk: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 301l0 39.8L168 441.6c6.9 5.1 15.3 7.9 24 7.9s17-2.8 24-7.9L352 340.8l0-39.8c-51.7 38.3-103.4 76.6-155.1 114.9c-1.4 1-3.1 1.6-4.9 1.6s-3.5-.6-4.9-1.6C135.4 377.6 83.7 339.3 32 301zM96 32l0 192 96 0 0-32c0-35.3 28.7-64 64-64l224 0 0-96c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32zM224 192l0 32 96 0c35.3 0 64 28.7 64 64l0 128 192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-320 0c-17.7 0-32 14.3-32 32zm256 48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M496 224l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM32 288c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 13L196.9 415.9c-1.4 1-3.1 1.6-4.9 1.6s-3.5-.6-4.9-1.6L32 301l0-13zM216 441.6L352 340.8 352 480c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-139.2L168 441.6c6.9 5.1 15.3 7.9 24 7.9s17-2.8 24-7.9z" />
    </Icon>
);

export default EnvelopesBulk;