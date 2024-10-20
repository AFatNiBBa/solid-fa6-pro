
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poop?s=sharp-duotone-solid poop}
 * @preview ![poop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/poop.svg)
 */
const Poop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 440l0 40 512 0 0-40c0-35.7-25.9-65.3-60-71c.4-.3 .8-.7 1.3-1L58.7 368c.4 .3 .8 .7 1.3 1c-34.1 5.7-60 35.3-60 71zM32 312c0 8.4 1.4 16.5 4.1 24l439.8 0c2.7-7.5 4.1-15.6 4.1-24c0-39.8-32.2-72-72-72l-13.7 0-276.7 0L104 240c-39.8 0-72 32.2-72 72zM96 192c0 5.5 .7 10.9 2 16l316 0c1.3-5.1 2-10.5 2-16c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96c-5.1 0-10.2 .4-15.1 1.2C250.4 14.3 256 30.5 256 48c0 44.2-35.8 80-80 80l-10.5 0-5.5 0c-35.3 0-64 28.7-64 64z" />
        <path d="M58.7 368l394.5 0c10.2-8.3 18.2-19.3 22.6-32L36.1 336c4.5 12.7 12.4 23.7 22.6 32zM0 480l0 32 512 0 0-32L0 480zM414 208L98 208c3.2 12.6 10.2 23.7 19.7 32l276.7 0c9.4-8.3 16.4-19.4 19.7-32z" />
    </Icon>
);

export default Poop;