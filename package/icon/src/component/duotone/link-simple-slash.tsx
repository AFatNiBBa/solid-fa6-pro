
import { Icon, generic } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=duotone link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 88.4 71.6 160 160 160l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96-43-96-96c0-24.9 9.5-47.6 25-64.6L70.7 151.7C46.6 179.7 32 216.1 32 256zM159.1 99.4c25.8 20.2 51.6 40.4 77.3 60.6l19.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-11.3 0-22.3 1.2-32.9 3.4zM318.1 224c27.2 21.3 54.4 42.7 81.7 64l16.3 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-97.9 0zM352 128c0 17.7 14.3 32 32 32l64 0c53 0 96 43 96 96c0 43.3-28.6 79.8-67.9 91.8c18.8 14.7 37.5 29.4 56.3 44.1c45.4-28.2 75.6-78.6 75.6-136c0-88.4-71.6-160-160-160l-64 0c-17.7 0-32 14.3-32 32z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default LinkSimpleSlash;