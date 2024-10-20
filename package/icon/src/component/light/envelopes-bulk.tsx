
import { Icon } from "../../index";

/**
 * A component that renders the `envelopes-bulk` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelopes-bulk?s=light envelopes-bulk}
 * @preview ![envelopes-bulk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/envelopes-bulk.svg)
 */
const EnvelopesBulk: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 32l288 0c8.8 0 16 7.2 16 16l0 16 32 0 0-16c0-26.5-21.5-48-48-48L112 0C85.5 0 64 21.5 64 48l0 144 32 0L96 48c0-8.8 7.2-16 16-16zM224 144c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16l-176 0 0 32 176 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48L240 96c-26.5 0-48 21.5-48 48l0 48 32 0 0-48zM48 256l288 0c8.8 0 16 7.2 16 16l0 5L196.9 391.9c-1.4 1-3.1 1.6-4.9 1.6s-3.5-.6-4.9-1.6L32 277l0-5c0-8.8 7.2-16 16-16zM32 464l0-147.2L168 417.6c6.9 5.1 15.3 7.9 24 7.9s17-2.8 24-7.9L352 316.8 352 464c0 8.8-7.2 16-16 16L48 480c-8.8 0-16-7.2-16-16zM48 224c-26.5 0-48 21.5-48 48L0 464c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48L48 224zm448-64c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-64 0zm16 64l0-32 32 0 0 32-32 0z" />
    </Icon>
);

export default EnvelopesBulk;