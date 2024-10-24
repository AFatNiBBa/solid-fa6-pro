
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-sleet` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-sleet?s=duotone cloud-sleet}
 * @preview ![cloud-sleet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-sleet.svg)
 */
const CloudSleet: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.9 478.5c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6l-48 112zM128 416c0 13.3 10.7 24 24 24l16 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-16 0c-13.3 0-24 10.7-24 24zm145.9 62.5c-5.2 12.2 .4 26.3 12.6 31.5s26.3-.4 31.5-12.6l48-112c5.2-12.2-.4-26.3-12.6-31.5s-26.3 .4-31.5 12.6l-48 112zM384 416c0 13.3 10.7 24 24 24l16 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-16 0c-13.3 0-24 10.7-24 24z" />
        <path d="M0 224c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224z" />
    </Icon>
);

export default CloudSleet;