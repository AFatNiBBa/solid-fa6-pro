
import { Icon } from "../../index";

/**
 * A component that renders the `burger-cheese` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-cheese?s=light burger-cheese}
 * @preview ![burger-cheese](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/burger-cheese.svg)
 */
const BurgerCheese: typeof Icon = x => (
    <Icon {...x}>
        <path d="M445 221.8C428.9 132.1 350.4 64 256 64S83.1 132.1 67 221.8l0 .1c0 .1 .1 .2 .3 .3c.7 .8 2.4 1.7 4.7 1.7l368 0c2.4 0 4-1 4.7-1.7c.1-.1 .2-.2 .3-.3l0-.1zM72 256c-22.1 0-40.4-18.1-36.5-39.8C54.3 111.5 145.9 32 256 32s201.7 79.5 220.5 184.2c3.9 21.7-14.4 39.8-36.5 39.8l-24 0-192 0L72 256zm358.5 96l17.5 0c17.7 0 32 14.3 32 32c0 53-43 96-96 96l-256 0c-53 0-96-43-96-96c0-17.7 14.3-32 32-32l145.5 0 48 32L64 384c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l-65.5 0 48-32zM160 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm80-16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112 16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM32 288l192 0c3.2 0 6.2 .9 8.9 2.7L320 348.8l87.1-58.1c2.6-1.8 5.7-2.7 8.9-2.7l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-59.2 0-92 61.3c-5.4 3.6-12.4 3.6-17.8 0l-92-61.3L32 320c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default BurgerCheese;