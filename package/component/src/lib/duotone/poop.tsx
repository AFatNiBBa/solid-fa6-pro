
import { Icon, generic } from "../../index";

/**
 * A component that renders the `poop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poop?s=duotone poop}
 * @preview ![poop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/poop.svg)
 */
const Poop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 440c0 14.8 4.5 28.6 12.1 40l487.8 0c7.7-11.4 12.1-25.2 12.1-40c0-35.7-25.9-65.3-60-71c.4-.3 .8-.7 1.3-1L58.7 368c.4 .3 .8 .7 1.3 1c-34.1 5.7-60 35.3-60 71zM32 312c0 8.4 1.4 16.5 4.1 24l439.8 0c2.7-7.5 4.1-15.6 4.1-24c0-39.8-32.2-72-72-72c-4.6 0-9.1 0-13.7 0l-276.7 0c-4.6 0-9.1 0-13.7 0c-39.8 0-72 32.2-72 72zM96 192c0 5.5 .7 10.9 2 16l316 0c1.3-5.1 2-10.5 2-16c0-35.3-28.7-64-64-64l-5.5 0c3.5-10 5.5-20.8 5.5-32c0-48.6-36.2-88.8-83.1-95.1c-.7-.1-1.4-.1-2.1-.1c-4.8 0-9.3 2.1-12.4 5.9c-3.5 4.3-4.6 10.1-2.8 15.4c2.8 8.2 4.3 16.9 4.3 26.1c0 44.1-35.7 79.9-79.8 80L160 128c-35.3 0-64 28.7-64 64z" />
        <path d="M117.7 240c-9.4-8.3-16.4-19.4-19.7-32l316 0c-3.2 12.6-10.2 23.7-19.7 32l-276.7 0zM58.7 368c-10.2-8.3-18.2-19.3-22.6-32l439.8 0c-4.5 12.7-12.4 23.7-22.6 32L58.7 368zM71.8 512c-24.9-.1-46.8-12.8-59.7-32l487.8 0c-12.9 19.2-34.8 31.9-59.7 32L71.8 512z" />
    </Icon>
);

export default Poop;