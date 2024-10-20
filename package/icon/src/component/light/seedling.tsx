
import { Icon } from "../../index";

/**
 * A component that renders the `seedling` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/seedling?s=light seedling}
 * @preview ![seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/seedling.svg)
 */
const Seedling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 32c0 95.3-69.4 174.4-160.5 189.4c2.7 10.2 4.7 20.7 6.1 31.4C431.4 234.9 512 142.9 512 32c0-17.7-14.3-32-32-32L448 0C367 0 296 43 256.6 107.5c7.8 8.3 15.1 17.2 21.8 26.4C310.7 73.3 374.5 32 448 32l32 0zM64 96c106 0 192 86 192 192l-32 0C118 288 32 202 32 96l32 0zM32 64C14.3 64 0 78.3 0 96C0 219.7 100.3 320 224 320l32 0 0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176 0-16 0-16C288 164.3 187.7 64 64 64L32 64z" />
    </Icon>
);

export default Seedling;