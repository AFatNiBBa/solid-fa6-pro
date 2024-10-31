
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music-slash?s=duotone music-slash}
 * @preview ![music-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/music-slash.svg)
 */
const MusicSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 432c0 44.2 43 80 96 80s96-35.8 96-80l0-134.3-64-50.4 0 109.3c-10-3-20.8-4.6-32-4.6c-53 0-96 35.8-96 80zM192.1 125.3c36.2 28.4 72.4 56.7 108.6 85.1L512 147l0 145.5c-10-2.9-20.8-4.6-32-4.6c-22.2 0-42.6 6.3-58.8 16.8c46.1 36.1 92.1 72.2 138.2 108.3C569.8 400.2 576 384.7 576 368l0-264 0-72c0-10.1-4.8-19.6-12.9-25.7C557.5 2.2 550.8 0 544 0c-3.1 0-6.2 .4-9.2 1.3l-320 96c-12.7 3.8-21.6 14.9-22.7 27.9z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default MusicSlash;