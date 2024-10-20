
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-hail` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-hail?s=duotone cloud-hail}
 * @preview ![cloud-hail](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cloud-hail.svg)
 */
const CloudHail: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 480a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm64-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M0 224c0 53 43 96 96 96l320 0c53 0 96-43 96-96s-43-96-96-96c-.5 0-1.1 0-1.6 0c1.1-5.2 1.6-10.5 1.6-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112c0 7.1 .7 14.1 1.9 20.8C27.6 145.4 0 181.5 0 224z" />
    </Icon>
);

export default CloudHail;