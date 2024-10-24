
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vial-virus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial-virus?s=sharp-duotone-solid vial-virus}
 * @preview ![vial-virus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vial-virus.svg)
 */
const VialVirus: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 64 0 96l32 0 0 288c0 53 43 96 96 96c22.6 0 43.3-7.8 59.7-20.8l-11-11 39.6-39.6 .6-.6-.8 0-56 0 0-112 56 0 .8 0-.6-.6-39.6-39.6L224 208.5 224 96l32 0 0-32 0-32-32 0-64 0L96 32 32 32 0 32zM96 96l64 0 0 96-64 0 0-96z" />
        <path d="M238.9 431.2c20.4-20.4 5.9-55.2-22.9-55.2c0 0 0 0 0 0l-24 0 0-24 0-24 24 0c0 0 0 0 .1 0c28.8 0 43.2-34.8 22.8-55.2l-17-17 17-17 17-17 17 17c20.4 20.4 55.2 5.9 55.2-22.9l0-.1 0-23.9 24 0 24 0 0 24 0 .2c.1 28.7 34.9 43 55.2 22.7l17-17 17 17 17 17-17 17c-20.4 20.4-6 55.2 22.8 55.2c0 0 0 0 .1 0l24 0 0 24 0 24-24 0c0 0 0 0 0 0c-28.8 0-43.2 34.8-22.9 55.2l17 17-17 17-17 17-17-17c-20.3-20.3-55-6-55.2 22.7l0 .2 0 24-24 0-24 0 0-23.8 0-.2c0-28.8-34.8-43.2-55.2-22.9l-17 17-17-17-17-17 17-17zM352 320a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default VialVirus;