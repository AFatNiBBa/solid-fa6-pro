
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-keyboard` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-keyboard?s=duotone scanner-keyboard}
 * @preview ![scanner-keyboard](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scanner-keyboard.svg)
 */
const ScannerKeyboard: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160L0 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 96C28.7 96 0 124.7 0 160zm64 24c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24L88 224c-13.3 0-24-10.7-24-24l0-16zm0 120c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-32zm128-96c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-32zm0 96c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-32z" />
        <path d="M152 0l16 0c13.3 0 24 10.7 24 24l0 40-64 0 0-40c0-13.3 10.7-24 24-24zM312 0l16 0c13.3 0 24 10.7 24 24l0 40-64 0 0-40c0-13.3 10.7-24 24-24zM224 16c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48-32 0 0-48zM400 0c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16zm48 24c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 240c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-240zM88 160l176 0c13.3 0 24 10.7 24 24l0 16c0 13.3-10.7 24-24 24L88 224c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ScannerKeyboard;