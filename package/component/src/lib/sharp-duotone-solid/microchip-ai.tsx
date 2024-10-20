
import { Icon, generic } from "../../index";

/**
 * A component that renders the `microchip-ai` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip-ai?s=sharp-duotone-solid microchip-ai}
 * @preview ![microchip-ai](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/microchip-ai.svg)
 */
const MicrochipAi: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l0 48 24 0 40 0 0-48-40 0L0 128zM0 232l0 48 24 0 40 0 0-48-40 0L0 232zM0 336l0 48 24 0 40 0 0-48-40 0L0 336zM128 0l0 24 0 40 48 0 0-40 0-24L128 0zm0 448l0 40 0 24 48 0 0-24 0-40-48 0zM232 0l0 24 0 40 48 0 0-40 0-24L232 0zm0 448l0 40 0 24 48 0 0-24 0-40-48 0zM336 0l0 24 0 40 48 0 0-40 0-24L336 0zm0 448l0 40 0 24 48 0 0-24 0-40-48 0zM448 128l0 48 40 0 24 0 0-48-24 0-40 0zm0 104l0 48 40 0 24 0 0-48-24 0-40 0zm0 104l0 48 40 0 24 0 0-48-24 0-40 0z" />
        <path d="M448 64L64 64l0 384 384 0 0-384zM320 176l32 0 0 16 0 128 0 16-32 0 0-16 0-128 0-16zM127.5 336l9.8-22.4 14-32 42-96 4.2-9.6 20.9 0 4.2 9.6 42 96 14 32 9.8 22.4-34.9 0-4.2-9.6L239.5 304l-63.1 0-9.8 22.4-4.2 9.6-34.9 0zm98-64L208 231.9 190.5 272l35.1 0z" />
    </Icon>
);

export default MicrochipAi;