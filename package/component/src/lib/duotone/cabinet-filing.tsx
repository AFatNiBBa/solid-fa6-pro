
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cabinet-filing` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cabinet-filing?s=duotone cabinet-filing}
 * @preview ![cabinet-filing](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cabinet-filing.svg)
 */
const CabinetFiling: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 176L0 240 0 64zM0 272l448 0 0 176c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 272zM128 128l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 128 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16c0-17.7-14.3-32-32-32L160 96c-17.7 0-32 14.3-32 32zm0 256l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 128 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z" />
        <path d="M160 96c-17.7 0-32 14.3-32 32l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 128 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16c0-17.7-14.3-32-32-32L160 96zm0 256c-17.7 0-32 14.3-32 32l0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 128 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16c0-17.7-14.3-32-32-32l-128 0zM0 272l448 0 0-32L0 240l0 32z" />
    </Icon>
);

export default CabinetFiling;