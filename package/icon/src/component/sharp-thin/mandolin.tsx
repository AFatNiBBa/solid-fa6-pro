
import { Icon } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=sharp-thin mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M451.9 2.2l4.9 4.9 48 48 4.9 4.9-4.2 5.6-51.2 67.2-1.8 2.4-3 .6-77.6 15.5-51.1 51.1C324.5 257.7 332.9 512 176 512C78.8 512 0 433.2 0 336C0 179.1 254.3 187.5 309.5 191.2l51.1-51.1 15.5-77.6 .6-3 2.4-1.8L446.4 6.4l5.6-4.2zM294.3 206.4c-7-.3-15.2-.5-24.4-.6c-29.4-.2-68.4 1.2-107.1 8c-39 6.8-76.2 18.8-103.4 38.4C33 271.4 16 297.8 16 336c0 88.4 71.6 160 160 160c38.2 0 64.6-17 83.8-43.4c19.7-27.2 31.6-64.4 38.4-103.4c6.8-38.7 8.3-77.7 8-107.1c-.1-9.2-.3-17.5-.6-24.4l-63.1 63.1C251 291.6 256 305.2 256 320c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64c14.8 0 28.4 5 39.2 13.4l63.1-63.1zm83.9-72.6l65.3-13.1 45.1-59.2L450.5 23.4 391.3 68.5l-13.1 65.3zM192 368a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Mandolin;