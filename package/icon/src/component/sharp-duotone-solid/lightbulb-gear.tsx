
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-gear` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-gear?s=sharp-duotone-solid lightbulb-gear}
 * @preview ![lightbulb-gear](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-gear.svg)
 */
const LightbulbGear: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4c19.8 27.1 39.7 54.4 49.2 86.2l120.5 0-6.6-11.5L262 351.7l-36.1-20.8 76.9-133.3L340 219.1l0-44.6 28 0C367.1 77.9 288.7 0 192 0C94.8 0 16 78.8 16 176zm64 0c0-61.9 50.1-112 112-112l0 32c-44.2 0-80 35.8-80 80l-32 0zm32 240l0 96 160 0 0-59.7L251 416l-139 0z" />
        <path d="M460.1 206.4l-88.1 0 0 42.2c-8 3.4-15.6 7.8-22.5 12.9l-34.9-20.2-44.9 77.8 34.9 20.2c-.4 4.1-.7 8.2-.7 12.4s.2 8.3 .7 12.4l-34.9 20.1 45 77.8 34.9-20.1c6.9 5.1 14.5 9.4 22.5 12.9l0 42.2 88.1 0 0-42.4c7.9-3.4 15.4-7.7 22.3-12.8l35 20.2 45-77.8L527.2 364c.4-4 .7-8.1 .7-12.3s-.2-8.2-.7-12.3l35.2-20.3-45-77.8-35 20.2c-6.9-5.1-14.3-9.4-22.3-12.8l0-42.4zM416 303.7a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default LightbulbGear;