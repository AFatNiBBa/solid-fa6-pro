
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard?s=duotone clipboard}
 * @preview ![clipboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clipboard.svg)
 */
const Clipboard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-49.6 0c.2 .8 .3 1.6 .4 2.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7c.1-.8 .3-1.6 .4-2.3L64 64C28.7 64 0 92.7 0 128z" />
        <path d="M192 0c-39.5 0-72.4 28.7-78.8 66.3C93.9 72.6 80 90.7 80 112l0 24c0 13.3 10.7 24 24 24l88 0 88 0c13.3 0 24-10.7 24-24l0-24c0-21.3-13.9-39.4-33.2-45.7C264.4 28.7 231.5 0 192 0zm0 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Clipboard;