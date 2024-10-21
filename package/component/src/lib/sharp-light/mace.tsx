
import { Icon } from "../../index";

/**
 * A component that renders the `mace` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mace?s=sharp-light mace}
 * @preview ![mace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/mace.svg)
 */
const Mace: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312.5 114l-5.9-11.1L288 68l-18.6 34.8L263.5 114 251.6 118c-32.5 11.2-58.4 37-69.5 69.5L178 199.5l-11.1 5.9L132 224l34.8 18.6 11.1 5.9 4.1 11.9c11.2 32.5 37 58.4 69.5 69.5l11.9 4.1 5.9 11.1L288 380l18.6-34.8 5.9-11.1 11.9-4.1c32.5-11.2 58.4-37 69.5-69.5l4.1-11.9 11.1-5.9L444 224l-34.8-18.6L398 199.5 394 187.6c-11.2-32.5-37-58.4-69.5-69.5L312.5 114zM478 205.9L512 224l-34 18.1-53.8 28.7c-14.4 41.9-47.5 75-89.4 89.4L306.1 414 288 448l-18.1-34-28.7-53.8c-15.8-5.4-30.3-13.5-43.1-23.7L35.3 499.3 24 510.6 1.4 488l11.3-11.3L175.5 313.9c-10.2-12.8-18.3-27.3-23.7-43.1L98 242.1 64 224l34-18.1 53.8-28.7c14.4-41.9 47.5-75 89.4-89.4L269.9 34 288 0l18.1 34 28.7 53.8c41.9 14.4 75 47.5 89.4 89.4L478 205.9zM288 208a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm48 16a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
    </Icon>
);

export default Mace;