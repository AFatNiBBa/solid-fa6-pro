
import { Icon } from "../../index";

/**
 * A component that renders the `box-archive` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-archive?s=regular box-archive}
 * @preview ![box-archive](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/box-archive.svg)
 */
const BoxArchive: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 80l0 48 416 0 0-48L48 80zM32 32l448 0c17.7 0 32 14.3 32 32l0 80c0 17.7-14.3 32-32 32L32 176c-17.7 0-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zM160 248c0-13.3 10.7-24 24-24l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24zM32 416l0-208 48 0 0 208c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-208 48 0 0 208c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default BoxArchive;