
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cassette-vhs` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cassette-vhs?s=duotone cassette-vhs}
 * @preview ![cassette-vhs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cassette-vhs.svg)
 */
const CassetteVhs: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-288L0 128zM80 304c0-30.3 10.5-58.1 28.1-80l51.9 0 0 34.7 0 90.5 0 34.7-51.9 0C90.5 362.1 80 334.3 80 304zm144-48c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-96zm192-32l51.9 0c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80L416 384l0-34.7 0-90.5 0-34.7z" />
        <path d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 32L0 128 0 96zM160 384l-51.9 0C90.5 362.1 80 334.3 80 304s10.5-58.1 28.1-80l51.9 0 0 34.7c-18.6 6.6-32 24.4-32 45.3s13.4 38.7 32 45.3l0 34.7zm307.9 0L416 384l0-34.7c18.6-6.6 32-24.4 32-45.3s-13.4-38.7-32-45.3l0-34.7 51.9 0c17.6 21.9 28.1 49.7 28.1 80s-10.5 58.1-28.1 80z" />
    </Icon>
);

export default CassetteVhs;