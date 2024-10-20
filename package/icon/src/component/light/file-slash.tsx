
import { Icon } from "../../index";

/**
 * A component that renders the `file-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-slash?s=light file-slash}
 * @preview ![file-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-slash.svg)
 */
const FileSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 163.9c0-12.7-5.1-24.9-14.1-33.9L382.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-23 0-43.2 12.2-54.5 30.4L163 50.5C168.1 39.6 179.2 32 192 32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 108.8L512 326l0-162.2zM160 448l0-236.8L128 186l0 262c0 35.3 28.7 64 64 64l256 0c23 0 43.2-12.2 54.5-30.4L477 461.5c-5.1 10.9-16.2 18.5-29 18.5l-256 0c-17.7 0-32-14.3-32-32zM479.5 160L368 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L475.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default FileSlash;