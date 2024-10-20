
import { Icon, generic } from "../../index";

/**
 * A component that renders the `virus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus?s=sharp-duotone-solid virus}
 * @preview ![virus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/virus.svg)
 */
const Virus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224l0 32 0 32 32 0 11.5 0c49.9 0 74.9 60.3 39.6 95.6L75 391.8 52.4 414.4 75 437c7.5 7.5 15.1 15.1 22.6 22.6L120.2 437l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6l0 11.5 0 32 32 0 32 0 0-32 0-11.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2 22.6 22.6L437 437l22.6-22.6L437 391.8l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6l11.5 0 32 0 0-32 0-32-32 0-11.5 0c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2 22.6-22.6L437 75 414.4 52.4 391.8 75l-8.2 8.2C348.3 118.4 288 93.4 288 43.5L288 32l0-32L256 0 224 0l0 32 0 11.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75 97.6 52.4 75 75 52.4 97.6 75 120.2l8.2 8.2C118.4 163.7 93.4 224 43.5 224L32 224 0 224zm272 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm56 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M224 176a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default Virus;