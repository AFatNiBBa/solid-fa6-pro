
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=duotone burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 194.9C32 211 45 224 61.1 224l389.8 0c16.1 0 29.1-13 29.1-29.1c0-1.9-.2-3.7-.6-5.6C474.1 168.3 433.2 32 256 32S37.9 168.3 32.6 189.3c-.5 1.9-.6 3.7-.6 5.6zM32 400l0 16c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-16c0-8.8-7.2-16-16-16L48 384c-8.8 0-16 7.2-16 16zM144 128a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM272 96a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm128 32a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default Burger;