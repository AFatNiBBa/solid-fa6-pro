
import { Icon } from "../../index";

/**
 * A component that renders the `keynote` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=sharp-light keynote}
 * @preview ![keynote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/keynote.svg)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 32c8.8 0 16 7.2 16 16s-7.2 16-16 16l-80 0 0-32 80 0zM224 0L192 0l0 32-8 0c-44.2 0-80 35.8-80 80l0 48-40 0L0 288l0 16 0 48 0 32 32 0 448 0 32 0 0-32 0-48 0-16L448 160l-312 0 0-48c0-26.5 21.5-48 48-48l8 0 0 32 32 0 80 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L224 0zM32 352l0-32 448 0 0 32L32 352zm3.8-64l48-96 344.4 0 48 96L35.8 288zM128 512l16 0 112 0 112 0 16 0 0-32-16 0-96 0 0-64-32 0 0 64-96 0-16 0 0 32z" />
    </Icon>
);

export default Keynote;