
import { Icon } from "../../index";

/**
 * A component that renders the `syringe` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/syringe?s=sharp-solid syringe}
 * @preview ![syringe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/syringe.svg)
 */
const Syringe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M452.2 18.2L473 39l20.8 20.8 17 17-33.9 33.9-17-17L456 89.9 417.9 128l55 55 17 17L456 233.9l-17-17-72-72L295 73l-17-17L312 22.1l17 17 55 55L422.1 56l-3.8-3.8-17-17L435.2 1.3l17 17zM210.3 155.7l61.1-61.1c.3 .3 .6 .7 1 1l16 16 56 56 56 56 16 16c.3 .3 .7 .6 1 1L217 441l-7 7-9.9 0L97.9 448 52.2 493.8l-17 17L1.3 476.8l17-17L64 414.1 64 312l0-9.9 7-7 52.7-52.7 57 57L192 310.6 214.6 288l-11.3-11.3-57-57 41.4-41.4 57 57L256 246.6 278.6 224l-11.3-11.3-57-57z" />
    </Icon>
);

export default Syringe;