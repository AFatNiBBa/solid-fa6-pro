
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tire?s=sharp-duotone-solid tire}
 * @preview ![tire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tire.svg)
 */
const Tire: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 256a160 160 0 1 0 320 0A160 160 0 1 0 96 256zm32 0c0-36.8 15.5-69.9 40.3-93.3l28.1 38.7 10.1 13.9c-9.1 11-14.5 25.2-14.5 40.6c0 1.4 0 2.7 .1 4l-61.8 20.1c-1.5-7.8-2.3-15.9-2.3-24.2zm12.2 54.6l61.9-20.1c8.6 13.4 22.1 23.4 37.9 27.5l0 65c-44.2-5.5-81.5-33.6-99.8-72.4zm54-166.7C212.5 133.8 233.6 128 256 128s43.5 5.8 61.8 15.9l-38.2 52.6c-7.3-2.9-15.3-4.5-23.6-4.5s-16.3 1.6-23.6 4.5l-10-13.8-28.1-38.8zM288 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-16.1 62c15.9-4.1 29.4-14.1 38-27.6l61.9 20.1c-18.3 38.8-55.6 66.9-99.8 72.4l0-65zm33.5-102.6l38.2-52.6C368.5 186.1 384 219.2 384 256c0 8.3-.8 16.3-2.3 24.2L319.9 260c.1-1.3 .1-2.7 .1-4c0-15.4-5.5-29.6-14.5-40.6z" />
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm416 0A160 160 0 1 0 96 256a160 160 0 1 0 320 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Tire;