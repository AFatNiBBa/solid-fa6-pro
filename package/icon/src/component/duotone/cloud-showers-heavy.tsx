
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-showers-heavy` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-showers-heavy?s=duotone cloud-showers-heavy}
 * @preview ![cloud-showers-heavy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-showers-heavy.svg)
 */
const CloudShowersHeavy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.9 478.5c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5c-3.1-1.3-6.3-1.9-9.4-1.9c-9.3 0-18.2 5.5-22.1 14.6l-48 112zm120 0c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5c-3.1-1.3-6.3-1.9-9.4-1.9c-9.3 0-18.2 5.5-22.1 14.6l-48 112zm112 0c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5c-3.1-1.3-6.3-1.9-9.4-1.9c-9.3 0-18.2 5.5-22.1 14.6l-48 112zm120 0c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c1.3-3.1 1.9-6.3 1.9-9.4c0-9.3-5.5-18.2-14.6-22.1c-3.1-1.3-6.3-1.9-9.4-1.9c-9.3 0-18.2 5.5-22.1 14.6l-48 112z" />
        <path d="M0 224c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224z" />
    </Icon>
);

export default CloudShowersHeavy;