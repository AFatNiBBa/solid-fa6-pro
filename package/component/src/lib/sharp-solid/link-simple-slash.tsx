
import { Icon } from "../../index";

/**
 * A component that renders the `link-simple-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-simple-slash?s=sharp-solid link-simple-slash}
 * @preview ![link-simple-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/link-simple-slash.svg)
 */
const LinkSimpleSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-87.5-68C578.2 363 608 313 608 256c0-88.4-71.6-160-160-160l-64 0-32 0 0 64 32 0 64 0c53 0 96 43 96 96c0 42.9-28.2 79.3-67 91.5L400.3 288l15.7 0 32 0 0-64-32 0-98.1 0-82.4-64 20.6 0 32 0 0-64-32 0-64 0c-11.8 0-23.2 1.3-34.3 3.7L48.4 14.8zM70.7 151.7C46.6 179.7 32 216.1 32 256c0 88.4 71.6 160 160 160l64 0 32 0 0-64-32 0-64 0c-53 0-96-43-96-96c0-24.9 9.5-47.6 25-64.6L70.7 151.7z" />
    </Icon>
);

export default LinkSimpleSlash;