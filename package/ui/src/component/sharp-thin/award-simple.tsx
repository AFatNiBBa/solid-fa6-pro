
import { Icon } from "../../index";

/**
 * A component that renders the `award-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/award-simple?s=sharp-thin award-simple}
 * @preview ![award-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/award-simple.svg)
 */
const AwardSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M236.2 26.9L192 0 147.8 26.9 96 25.7 71.2 71.2 25.7 96l1.2 51.8L0 192l26.9 44.2L25.7 288l45.4 24.8L96 358.3l51.8-1.2L192 384l44.2-26.9 51.8 1.2 24.8-45.4L358.3 288l-1.2-51.8L384 192l-26.9-44.2L358.3 96 312.8 71.2 288 25.7l-51.8 1.2zm42.4 15l20.2 36.9L301 83l4.1 2.3 36.9 20.2-1 42-.1 4.7 2.4 4L365.3 192l-21.9 35.9-2.4 4 .1 4.7 1 42-36.9 20.2L301 301l-2.3 4.1-20.2 36.9-42-1-4.7-.1-4 2.4L192 365.3l-35.9-21.9-4-2.4-4.7 .1-42 1L85.2 305.2 83 301l-4.1-2.3L41.9 278.6l1-42 .1-4.7-2.4-4L18.7 192l21.9-35.9 2.4-4-.1-4.7-1-42L78.8 85.2 83 83l2.3-4.1 20.2-36.9 42 1 4.7 .1 4-2.4L192 18.7l35.9 21.9 4 2.4 4.7-.1 42-1zM192 264a72 72 0 1 1 0-144 72 72 0 1 1 0 144zm-88-72a88 88 0 1 0 176 0 88 88 0 1 0 -176 0zM92.1 390.4L68.7 491.8 64 512l18.6-9.3L192 448l109.4 54.7L320 512l-4.7-20.2L291.9 390.4l-4.7-.1-11.8-.3 21.3 92.5-97.6-48.8-7.2-3.6-7.2 3.6L87.2 482.5 108.6 390l-11.8 .3-4.7 .1z" />
    </Icon>
);

export default AwardSimple;