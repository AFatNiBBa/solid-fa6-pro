
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-vhs` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-vhs?s=sharp-duotone-solid cassette-vhs}
 * @preview ![cassette-vhs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cassette-vhs.svg)
 */
const CassetteVhs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 480l576 0 0-352L0 128zM80 304c0-30.3 10.5-58.1 28.1-80l51.9 0 0 34.7 0 90.5 0 34.7-51.9 0C90.5 362.1 80 334.3 80 304zm144-80l128 0 0 160-128 0 0-160zm192 0l51.9 0c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80L416 384l0-34.7 0-90.5 0-34.7z" />
        <path d="M0 32l576 0 0 96L0 128 0 32zM160 384l-51.9 0C90.5 362.1 80 334.3 80 304s10.5-58.1 28.1-80l51.9 0 0 34.7c-18.6 6.6-32 24.4-32 45.3s13.4 38.7 32 45.3l0 34.7zm307.9 0L416 384l0-34.7c18.6-6.6 32-24.4 32-45.3s-13.4-38.7-32-45.3l0-34.7 51.9 0c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80z" />
    </Icon>
);

export default CassetteVhs;