
import { Icon, generic } from "../../index";

/**
 * A component that renders the `water-ladder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/water-ladder?s=sharp-duotone-solid water-ladder}
 * @preview ![water-ladder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/water-ladder.svg)
 */
const WaterLadder: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c31.9 0 60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9s60.6-9.9 80.4-18.9c5.8-2.7 11.1-5.3 15.6-7.7c4.5 2.4 9.7 5.1 15.6 7.7c19.8 9 48.5 18.9 80.4 18.9l0-64c-19.3 0-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2c-15.4 7-34.7 13.1-54 13.1s-38.6-6.1-54-13.1c-15.6-7.1-28.2-16.3-42-26.2c-13.9 9.9-26.4 19.1-42 26.2C38.6 409.9 19.3 416 0 416z" />
        <path d="M224 32c-53 0-96 43-96 96l0 230.9c8.1 5.6 15.2 10 23.3 13.7c13.1 6 27.7 10.3 40.7 10.3l0-95 192 0 0 95c13 0 27.6-4.3 40.7-10.3c8.1-3.7 15.2-8.1 23.3-13.7L448 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 64 0 0-32c0-53-43-96-96-96s-96 43-96 96l0 96-192 0 0-96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 64 0 0-32c0-53-43-96-96-96z" />
    </Icon>
);

export default WaterLadder;