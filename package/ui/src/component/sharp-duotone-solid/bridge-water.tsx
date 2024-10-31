
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bridge-water` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bridge-water?s=sharp-duotone-solid bridge-water}
 * @preview ![bridge-water](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bridge-water.svg)
 */
const BridgeWater: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9l0-64c-19.3 0-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2C38.6 409.9 19.3 416 0 416z" />
        <path d="M576 64L0 64l0 96c53 0 96 43 96 96l0 80s0 0 0 0l18.6 13.4 1.1 .8s0 0 0 0c13.9 10 23.6 17 35.5 22.5c13.1 6 27.7 10.3 40.7 10.3l0-127c0-53 43-96 96-96s96 43 96 96l0 127c13 0 27.6-4.3 40.7-10.3c12-5.5 21.7-12.5 35.5-22.5c0 0 0 0 0 0L480 336l0-80c0-53 43-96 96-96l0-96z" />
    </Icon>
);

export default BridgeWater;