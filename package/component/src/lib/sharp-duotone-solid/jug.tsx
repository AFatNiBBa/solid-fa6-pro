
import { Icon, generic } from "../../index";

/**
 * A component that renders the `jug` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/jug?s=sharp-duotone-solid jug}
 * @preview ![jug](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/jug.svg)
 */
const Jug: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 288l384 0 0 128L32 416l0-128zM128 0l32 0L288 0l32 0 0 64-16 0-16 0L160 64l-16 0-16 0 0-64z" />
        <path d="M144 64l0 32L32 240l0 48 384 0 0-48-6.4-8.3C432.4 219.7 448 195.6 448 168c0-39.8-32.2-72-72-72c-21.2 0-40.3 9.2-53.5 23.8L304 96l0-32-16 0L160 64l-16 0zM32 512l384 0 0-96L32 416l0 96zM378.6 191.9l-25.1-32.2c3.4-9.1 12.2-15.6 22.5-15.6c13.3 0 24 10.7 24 24c0 12.4-9.4 22.6-21.4 23.9z" />
    </Icon>
);

export default Jug;