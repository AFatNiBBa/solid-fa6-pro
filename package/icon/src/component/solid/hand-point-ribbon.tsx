
import { Icon } from "../../index";

/**
 * A component that renders the `hand-point-ribbon` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-ribbon?s=solid hand-point-ribbon}
 * @preview ![hand-point-ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hand-point-ribbon.svg)
 */
const HandPointRibbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 32C64 14.3 78.3 0 96 0s32 14.3 32 32l16 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16L11.8 128C5.3 128 0 122.7 0 116.2c0-3.9 1.9-7.5 5.1-9.7L43.6 80 5.1 53.5C1.9 51.3 0 47.7 0 43.8C0 37.3 5.3 32 11.8 32L64 32zm0 208l0-80 64 0 0 80-64 0zm192-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-64-64c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32zm160 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-96 88l0-.6c9.4 5.4 20.3 8.6 32 8.6c13.2 0 25.4-4 35.6-10.8c8.7 24.9 32.5 42.8 60.4 42.8c11.7 0 22.6-3.1 32-8.6l0 8.6c0 88.4-71.6 160-160 160l-61.7 0c-42.4 0-83.1-16.9-113.1-46.9L69.5 453.5C45.5 429.5 32 396.9 32 363l0-27c0-35.3 28.7-64 64-64l88 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72z" />
    </Icon>
);

export default HandPointRibbon;