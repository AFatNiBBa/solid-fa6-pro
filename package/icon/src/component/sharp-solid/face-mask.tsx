
import { Icon } from "../../index";

/**
 * A component that renders the `face-mask` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-mask?s=sharp-solid face-mask}
 * @preview ![face-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-mask.svg)
 */
const FaceMask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M509.8 384c21.8-37.7 34.2-81.4 34.2-128c0-2.2 0-4.5-.1-6.7L416 284.2l0 99.8 93.8 0zm-21.9 32L416 416s0 0 0 0l-32 32-192 0-32-32s0 0 0 0l-71.9 0c46.9 58.5 119 96 199.9 96s152.9-37.5 199.9-96zM66.2 384l93.8 0 0-99.8L32.1 249.3c-.1 2.2-.1 4.4-.1 6.7c0 46.6 12.5 90.3 34.2 128zM35 216.9l143.2 39 219.7 0 143.2-39C522.2 94.1 416.1 0 288 0S53.8 94.1 35 216.9zM240 176c-47 0-77.1 19.7-84.7 27.3l-22.6-22.6C146.4 167 184.6 144 240 144l16 0 0 32-16 0zm80-32l16 0c55.4 0 93.6 23 107.3 36.7l-22.6 22.6C413.1 195.7 383 176 336 176l-16 0 0-32zM208 304l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0zm0 64l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default FaceMask;