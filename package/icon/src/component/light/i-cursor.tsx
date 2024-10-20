
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=light i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M0 14.9C-.6 23.7 6 31.3 14.9 32l8 .6C73.1 36.1 112 77.9 112 128.3L112 240l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 111.7c0 50.4-38.9 92.2-89.2 95.8l-8 .6C6 480.7-.6 488.3 0 497.1S8.3 512.6 17.1 512l8-.6c44.6-3.2 82.5-29 102.9-65.7c20.4 36.7 58.3 62.5 102.9 65.7l8 .6c8.8 .6 16.5-6 17.1-14.8s-6-16.5-14.8-17.1l-8-.6c-50.2-3.6-89.2-45.4-89.2-95.8L144 272l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-111.7c0-50.4 38.9-92.2 89.2-95.8l8-.6c8.8-.6 15.4-8.3 14.8-17.1S247.7-.6 238.9 0l-8 .6c-44.6 3.2-82.5 29-102.9 65.7C107.6 29.6 69.7 3.8 25.1 .6l-8-.6C8.3-.6 .7 6 0 14.9z" />
    </Icon>
);

export default ICursor;