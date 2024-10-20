
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=duotone burger-cheese}
 * @preview ![burger-cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/burger-cheese.svg)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224C45 224 32 211 32 194.9zM32 400c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16zm80-272a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm99.9 128c72 0 144.1 0 216.1 0c-7.9 0-15.6 2.3-22.1 6.7c-22.7 15.2-45.5 30.3-68.2 45.5c-10.7 7.2-24.8 7.2-35.5 0c-22.7-15.2-45.5-30.3-68.2-45.5c-6.5-4.4-14.2-6.7-22.1-6.7zM240 96a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm128 32a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M302.2 308.2L234 262.7c-6.5-4.4-14.2-6.7-22.1-6.7l-3.9 0-.1 0L64 256c-26.5 0-48 21.5-48 48s21.5 48 48 48l384 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-15.9 0-.1 0-3.9 0c-7.9 0-15.6 2.3-22.1 6.7l-68.2 45.5c-10.7 7.2-24.8 7.2-35.5 0z" />
    </Icon>
);

export default BurgerCheese;