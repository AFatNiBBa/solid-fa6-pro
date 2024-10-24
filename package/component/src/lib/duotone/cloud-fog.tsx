
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-fog` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=duotone cloud-fog}
 * @preview ![cloud-fog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-fog.svg)
 */
const CloudFog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 392c0 13.3 10.7 24 24 24l528 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 368c-13.3 0-24 10.7-24 24zm64 96c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 464c-13.3 0-24 10.7-24 24zm208 0c0 13.3 10.7 24 24 24l320 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-320 0c-13.3 0-24 10.7-24 24z" />
        <path d="M64 224c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C320.5 24.3 283.1 0 240 0C178.1 0 128 50.1 128 112c0 7.1 .7 14.1 1.9 20.8C91.6 145.4 64 181.5 64 224z" />
    </Icon>
);

export default CloudFog;