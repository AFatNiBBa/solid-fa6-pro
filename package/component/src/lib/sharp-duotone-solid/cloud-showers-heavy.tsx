
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cloud-showers-heavy` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-showers-heavy?s=sharp-duotone-solid cloud-showers-heavy}
 * @preview ![cloud-showers-heavy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cloud-showers-heavy.svg)
 */
const CloudShowersHeavy: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 512l56 0 72-160-56 0L0 512zm120 0l56 0 72-160-56 0L120 512zm112 0l56 0 72-160-56 0L232 512zm120 0l56 0 72-160-56 0L352 512z" />
        <path d="M0 320l96 0 320 0 96 0 0-96c0-53-43-96-96-96l0-16c0-44.2-35.8-80-80-80c-24.3 0-46.1 10.9-60.8 28C256.5 24.3 219.1 0 176 0C114.1 0 64 50.1 64 112l0 21.5C26.7 146.6 0 182.2 0 224l0 96z" />
    </Icon>
);

export default CloudShowersHeavy;