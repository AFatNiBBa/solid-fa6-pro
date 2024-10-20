
import { Icon } from "../../index";

/**
 * A component that renders the `laptop-file` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-file?s=thin laptop-file}
 * @preview ![laptop-file](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/laptop-file.svg)
 */
const LaptopFile: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 16L128 16c-26.5 0-48 21.5-48 48l0 224 240 0 0 16L80 304l-16 0-44.8 0c-1.8 0-3.2 1.4-3.2 3.2C16 340.8 43.2 368 76.8 368L320 368l0 16L76.8 384C34.4 384 0 349.6 0 307.2C0 296.6 8.6 288 19.2 288L64 288 64 64C64 28.7 92.7 0 128 0L448 0c35.3 0 64 28.7 64 64l0 32-16 0 0-32c0-26.5-21.5-48-48-48zM624 464l0-204.1c0-1.3-.1-2.6-.2-3.9L552 256c-22.1 0-40-17.9-40-40l0-71.8c-1.3-.2-2.6-.2-3.9-.2L400 144c-17.7 0-32 14.3-32 32l0 288c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32zM528 150.9l0 65.1c0 13.3 10.7 24 24 24l65.1 0c-.8-1-1.6-1.9-2.4-2.7l-83.9-83.9c-.9-.9-1.8-1.7-2.7-2.4zM592 512l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48l108.1 0c12.7 0 24.9 5.1 33.9 14.1l83.9 83.9c9 9 14.1 21.2 14.1 33.9L640 464c0 26.5-21.5 48-48 48z" />
    </Icon>
);

export default LaptopFile;