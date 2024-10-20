
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bug-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bug-slash?s=duotone bug-slash}
 * @preview ![bug-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bug-slash.svg)
 */
const BugSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 288c0 17.7 14.3 32 32 32l64 0c0 24.6 5.5 47.8 15.4 68.6c-2.2 1.3-4.2 2.9-6 4.8l-64 64c-12.5 12.5-12.5 32.8 0 45.3c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l63.1-63.1c24.5 21.8 55.8 36.2 90.3 39.6l0-143.7L166.7 227.3c-3.4 9-5.6 18.7-6.4 28.7L96 256c-17.7 0-32 14.3-32 32zM224 96l0 3.6c0 15.7 12.7 28.4 28.4 28.4l135.1 0c15.7 0 28.4-12.7 28.4-28.4l0-3.6c0-53-43-96-96-96s-96 43-96 96zm16 66.8c79.1 62 158.3 124 237.4 186.1c1.7-9.4 2.6-19 2.6-28.9l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64.3 0c-1.1-14.1-5-27.5-11.1-39.5c.7-.6 1.4-1.2 2.1-1.9l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-.7 .7-1.3 1.4-1.9 2.1C409.2 164.1 393.1 160 376 160l-112 0c-8.3 0-16.3 1-24 2.8zm96 197.9l0 118.5c36.6-3.6 69.7-19.6 94.8-43.8L336 360.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default BugSlash;