
import { Icon } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=solid burger-cheese}
 * @preview ![burger-cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/burger-cheese.svg)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 194.9C32 211 45 224 61.1 224l389.8 0c16.1 0 29.1-13 29.1-29.1c0-1.9-.2-3.7-.6-5.6C474.1 168.3 433.2 32 256 32S37.9 168.3 32.6 189.3c-.5 1.9-.6 3.7-.6 5.6zM128 112a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm240 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM32 400l0 16c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-16c0-8.8-7.2-16-16-16L48 384c-8.8 0-16 7.2-16 16zM234 262.7c-6.5-4.4-14.2-6.7-22.1-6.7l-3.9 0-.1 0L64 256c-26.5 0-48 21.5-48 48s21.5 48 48 48l384 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-15.9 0-.1 0-3.9 0c-7.9 0-15.6 2.3-22.1 6.7l-68.2 45.5c-10.7 7.2-24.8 7.2-35.5 0L234 262.7z" />
    </Icon>
);

export default BurgerCheese;