
import { Icon } from "../../index";

/**
 * A component that renders the `download` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/download?s=light download}
 * @preview ![download](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/download.svg)
 */
const Download: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 313.4L139.3 228.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l128 128c6.2 6.2 16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 329.4 272 16zM140.1 320L64 320c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64l-76.1 0-32 32L448 352c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l108.1 0-32-32zM432 416a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Download;