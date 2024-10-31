
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chair-office` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair-office?s=duotone chair-office}
 * @preview ![chair-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/chair-office.svg)
 */
const ChairOffice: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 64l0 224 256 0 0-224c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64zm32 416c0 17.7 14.3 32 32 32l64 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0-64-64 0 0 64-32 0c-17.7 0-32 14.3-32 32z" />
        <path d="M64 160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64zm384 0c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64zM80 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S52.9 384 64 384l320 0c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C391.2 294.8 380.1 288 368 288L80 288z" />
    </Icon>
);

export default ChairOffice;