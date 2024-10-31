
import { Icon } from "../../index";

/**
 * A component that renders the `paragraph-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph-left?s=light paragraph-left}
 * @preview ![paragraph-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/paragraph-left.svg)
 */
const ParagraphLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 32l16 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L224 0 208 0 176 0 144 0C82.1 0 32 50.1 32 112s50.1 112 112 112l48 0 0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80 0-16 0-176 64 0 0 272c0 8.8 7.2 16 16 16s16-7.2 16-16l0-272zM192 32l0 160-48 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l32 0 16 0zM122.2 348.3c6.8-5.7 7.7-15.7 2-22.5s-15.7-7.7-22.5-2l-96 80C2.1 406.7 0 411.3 0 416s2.1 9.3 5.8 12.3l96 80c6.8 5.7 16.9 4.7 22.5-2s4.7-16.9-2-22.5L60.2 432 368 432c8.8 0 16-7.2 16-16s-7.2-16-16-16L60.2 400l62.1-51.7z" />
    </Icon>
);

export default ParagraphLeft;