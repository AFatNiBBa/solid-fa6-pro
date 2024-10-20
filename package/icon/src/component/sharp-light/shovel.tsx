
import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=sharp-light shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M361.4 22.6L384 0l22.6 22.6 82.7 82.7L512 128l-22.6 22.6-46.9 46.9c-17 17-40 26.5-64 26.5c-19.2 0-37-6-51.7-16.2l-99.5 99.5 54.1 54.1L304 384l-22.6 22.6L176 512 32 512 0 512l0-32L0 336 105.4 230.6 128 208l22.6 22.6 54.1 54.1 99.5-99.5C294 170.5 288 152.7 288 133.5c0-24 9.5-47 26.5-64l46.9-46.9zM466.7 128L384 45.3 337.1 92.1c-11 11-17.1 25.9-17.1 41.4c0 32.3 26.2 58.5 58.5 58.5c15.5 0 30.4-6.2 41.4-17.1L466.7 128zM32 349.3L32 480l130.7 0 96-96L128 253.3l-96 96z" />
    </Icon>
);

export default Shovel;