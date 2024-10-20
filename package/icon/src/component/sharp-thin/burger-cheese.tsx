
import { Icon } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=sharp-thin burger-cheese}
 * @preview ![burger-cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/burger-cheese.svg)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M33.3 208C32 218 32 224 32 224l16 0 416 0 16 0s0-6-1.3-16C472.9 161.9 440.2 32 256 32S39.1 161.9 33.3 208zm429.4 0L49.4 208c.4-3.3 1-6.9 1.8-10.9c3.3-16.8 9.8-39 22.6-61C98.9 93 149.6 48 256 48s157.1 45 182.2 88.1c12.9 22 19.4 44.2 22.6 61c.8 4 1.4 7.7 1.8 10.9zM48 400l416 0 0 64L48 464l0-64zm0-16l-16 0 0 16 0 64 0 16 16 0 416 0 16 0 0-16 0-64 0-16-16 0L48 384zm96-240a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm240-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM256 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm-8 160l144 0-72 48-72-48zm-28.8 0l92 61.3 4 2.7 4.8 3.2 4.8-3.2 4-2.7 92-61.3 27.2 0 32 0 0 64-97.5 0-24 16L480 352l16 0 0-16 0-64 0-16-16 0-32 0-32 0-192 0-32 0L32 256l-16 0 0 16 0 64 0 16 16 0 249.5 0-24-16L32 336l0-64 160 0 27.2 0z" />
    </Icon>
);

export default BurgerCheese;