
import { Icon } from "../../index";

/**
 * A component that renders the `building` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building?s=light building}
 * @preview ![building](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/building.svg)
 */
const Building: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 384c0 17.7 14.3 32 32 32l64 0 0-64c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 64 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L64 32zM224 416c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64 64 0 0-64zm-96 96l-64 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64l-64 0-32 0-64 0-32 0zM64 120c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zm32 8l0 32 32 0 0-32-32 0zM248 96l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zm8 64l32 0 0-32-32 0 0 32zM64 248c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48zm32 8l0 32 32 0 0-32-32 0zm152-32l48 0c13.3 0 24 10.7 24 24l0 48c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-48c0-13.3 10.7-24 24-24zm8 64l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default Building;