
import { Icon } from "../../index";

/**
 * A component that renders the `sparkles` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sparkles?s=sharp-light sparkles}
 * @preview ![sparkles](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sparkles.svg)
 */
const Sparkles: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 32l0 16 0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0zm0 288l0 16 0 48 48 0 16 0 0 32-16 0-48 0 0 48 0 16-32 0 0-16 0-48-48 0-16 0 0-32 16 0 48 0 0-48 0-16 32 0zm-99.8-46.1L256 320l-46.1 92.2L192 448l-17.9-35.8L128 320 35.8 273.9 0 256l35.8-17.9L128 192l46.1-92.2L192 64l17.9 35.8L256 192l92.2 46.1L384 256l-35.8 17.9zM227.4 305.7l4.8-9.5 9.5-4.8L312.4 256l-70.8-35.4-9.5-4.8-4.8-9.5L192 135.6l-35.4 70.8-4.8 9.5-9.5 4.8L71.6 256l70.8 35.4 9.5 4.8 4.8 9.5L192 376.4l35.4-70.8z" />
    </Icon>
);

export default Sparkles;