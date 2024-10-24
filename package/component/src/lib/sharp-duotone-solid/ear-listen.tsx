
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ear-listen` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear-listen?s=sharp-duotone-solid ear-listen}
 * @preview ![ear-listen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ear-listen.svg)
 */
const EarListen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480a32 32 0 1 0 64 0A32 32 0 1 0 0 480zm18.7-96l22.6 22.6 64 64L128 493.3 173.3 448l-22.6-22.6-64-64L64 338.7 18.7 384zM128 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM369.7 60.6c.6 .3 1.4 .7 2.3 1.3c2 1.2 5 3 8.7 5.6c7.5 5.2 17.6 13.2 27.7 24.2C428.5 113.4 448 146 448 192l64 0c0-66-28.5-113.4-56.5-143.7C441.6 33.2 427.7 22.2 417.3 15c-5.3-3.7-9.7-6.4-13-8.3c-1.6-1-3-1.7-4-2.2c-.5-.3-.9-.5-1.2-.7l-.4-.2c-.3-.1-.3-.1-14.6 28.5L369.7 60.6z" />
        <path d="M128 240c0-61.9 50.1-112 112-112s112 50.1 112 112c0 38.8-19.7 73-49.8 93.2L288 342.7l0 17.1 0 40.2c0 26.5-21.5 48-48 48l-32 0 0 64 32 0c61.9 0 112-50.1 112-112l0-24.2c39-32.2 64-81.1 64-135.8c0-97.2-78.8-176-176-176S64 142.8 64 240l64 0zm80 0c0-17.7 14.3-32 32-32s32 14.3 32 32l48 0c0-44.2-35.8-80-80-80s-80 35.8-80 80l48 0z" />
    </Icon>
);

export default EarListen;