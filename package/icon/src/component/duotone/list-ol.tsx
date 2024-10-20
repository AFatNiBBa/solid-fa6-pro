
import { Icon, generic } from "../../index";

/**
 * A component that renders the `list-ol` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/list-ol?s=duotone list-ol}
 * @preview ![list-ol](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/list-ol.svg)
 */
const ListOl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M192 96c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l264 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-264 0c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32z" />
        <path d="M48 32C34.7 32 24 42.8 24 56s10.7 24 24 24l8 0 0 96-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-120c0-13.3-10.7-24-24-24L48 32zM62.6 342.4c5.7-8.1 17.5-8.6 24-1.2c5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4l88 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-33.2 0 34.8-37.7c22-23.8 22.4-60.3 1.1-84.7c-26.9-30.7-75.4-28.4-99.2 4.9L12.5 330.1c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6l11.1-15.6z" />
    </Icon>
);

export default ListOl;