
import { Icon, generic } from "../../index";

/**
 * A component that renders the `austral-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/austral-sign?s=duotone austral-sign}
 * @preview ![austral-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/austral-sign.svg)
 */
const AustralSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 256c0-17.7 14.3-32 32-32l90.7 0L96 288l-64 0c-17.7 0-32-14.3-32-32zm0 96c0-17.7 14.3-32 32-32l50.7 0L56 384l-24 0c-17.7 0-32-14.3-32-32zm125.3 32L152 320l144 0 26.7 64-197.3 0zm40-96L192 224l64 0c8.9 21.3 17.8 42.7 26.7 64l-117.3 0zm160-64l90.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-26.7-64zm40 96l50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-24 0-26.7-64z" />
        <path d="M224 32c12.9 0 24.6 7.8 29.5 19.7l160 384c6.8 16.3-.9 35-17.2 41.8s-35-.9-41.8-17.2L224 147.2 93.5 460.3c-6.8 16.3-25.5 24-41.8 17.2s-24-25.5-17.2-41.8l160-384C199.4 39.8 211.1 32 224 32z" />
    </Icon>
);

export default AustralSign;