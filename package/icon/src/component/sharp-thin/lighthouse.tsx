
import { Icon } from "../../index";

/**
 * A component that renders the `lighthouse` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lighthouse?s=sharp-thin lighthouse}
 * @preview ![lighthouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/lighthouse.svg)
 */
const Lighthouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M11.3 .7L4.8 15.3l144 64 7.3 3.2 6.5-14.6-7.3-3.2L11.3 .7zM162.6 188.1l-6.5-14.6-7.3 3.2-144 64 6.5 14.6 144-64 7.3-3.2zM237.4 176l165.3 0 58.2 320L368 496l0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64-92.8 0 58.2-320zM477.1 496L418.9 176l5.1 0 8 0 0-16-8 0-8 0-192 0-8 0-8 0 0 16 8 0 5.1 0L162.9 496 144 496l-8 0 0 16 8 0 16 0 16.3 0 95.7 0 16 0 64 0 16 0 95.7 0 16.3 0 16 0 8 0 0-16-8 0-18.9 0zM352 496l-64 0 0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64zM484.8 64.7l-7.3 3.2 6.5 14.6 7.3-3.2 144-64L628.8 .7l-144 64zm0 126.6l144 64 6.5-14.6-144-64-7.3-3.2-6.5 14.6 7.3 3.2zM324.2 3.6L320 1l-4.2 2.6-112 69.6L197 77.4 205.4 91l6.8-4.2L224 79.5l0 48.5 16 0 0-58.5 80-49.7 80 49.7 0 58.5 16 0 0-48.5 11.8 7.3 6.8 4.2L443 77.4l-6.8-4.2L324.2 3.6z" />
    </Icon>
);

export default Lighthouse;