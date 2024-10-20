
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scanner-gun` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scanner-gun?s=duotone scanner-gun}
 * @preview ![scanner-gun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/scanner-gun.svg)
 */
const ScannerGun: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144c0 50.7 33.8 93.6 80 107.4L8.1 374.7c-13.3 22.8-5.7 52.2 17.1 65.6l53.4 31.4c7.6 4.5 16 6.6 24.3 6.6c16.5 0 32.5-8.5 41.4-23.7L261.2 256l42.8 0c26.5 0 48-21.5 48-48l0-128c0-26.5-21.5-48-48-48L112 32C50.1 32 0 82.1 0 144z" />
        <path d="M440 32c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24L440 32zm0 160c-13.3 0-24 10.7-24 24l0 16c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-112 0zM416 440l0 16c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-16c0-13.3-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm16-312c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0zM416 304c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0c-8.8 0-16 7.2-16 16zm16 48c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0z" />
    </Icon>
);

export default ScannerGun;