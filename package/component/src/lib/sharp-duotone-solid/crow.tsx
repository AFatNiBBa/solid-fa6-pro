
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crow` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=sharp-duotone-solid crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M259.2 384l18.6 45.1 14 34 14 34 6.1 14.9 51.9 0-13.6-33.1-14-34-14-34L311.1 384l-51.9 0zm96 0l46.6 113.2 6.1 14.9 51.9 0-13.6-33.1-42-102c-15.6 4.4-32 6.9-49 7.1zM523.9 32C536.5 47.2 544 66.7 544 88l0 32 96-24 0-32L592 32l-68.1 0z" />
        <path d="M456 0c-48.6 0-88 39.4-88 88l0 29.2L.3 400l39 50.7L126.1 384 352 384c106 0 192-86 192-192l0-64 0-40c0-48.6-39.4-88-88-88zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Crow;