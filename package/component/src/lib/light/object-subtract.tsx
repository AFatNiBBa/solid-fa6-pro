
import { Icon } from "../../index";

/**
 * A component that renders the `object-subtract` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-subtract?s=light object-subtract}
 * @preview ![object-subtract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/object-subtract.svg)
 */
const ObjectSubtract: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l32 0L96 0 64 0C28.7 0 0 28.7 0 64L0 96l32 0 0-32c0-17.7 14.3-32 32-32zm160 0l0-32L128 0l0 32 96 0zM32 128L0 128l0 96 32 0 0-96zm0 128L0 256l0 32c0 35.3 28.7 64 64 64l32 0 0-32-32 0c-17.7 0-32-14.3-32-32l0-32zm96 96l32 0 32 0 32 0 0-32-32 0-32 0-32 0 0 32zm32 32l0 64c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-64 0 0 32 64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-224 0c-17.7 0-32-14.3-32-32l0-64-32 0zM352 192l0-32 0-32-32 0 0 32 0 32 0 32 32 0 0-32zm0-128c0-35.3-28.7-64-64-64L256 0l0 32 32 0c17.7 0 32 14.3 32 32l0 32 32 0 0-32zM256 320l0 32 32 0c35.3 0 64-28.7 64-64l0-32-32 0 0 32c0 17.7-14.3 32-32 32l-32 0z" />
    </Icon>
);

export default ObjectSubtract;