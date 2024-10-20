
import { Icon } from "../../index";

/**
 * A component that renders the `martini-glass` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass?s=light martini-glass}
 * @preview ![martini-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/martini-glass.svg)
 */
const MartiniGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 33c0-.5 .4-1 1-1L479 32c.5 0 1 .4 1 1c0 .3-.1 .5-.3 .7l-94.4 94.4c-.4 0-.9-.1-1.3-.1l-256 0c-.4 0-.9 0-1.3 .1L32.3 33.7c-.2-.2-.3-.4-.3-.7zM158.6 160l194.7 0L256 257.4 158.6 160zM9.7 56.3L240 286.6 240 480l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l112 0 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-193.4L502.3 56.3c6.2-6.2 9.7-14.6 9.7-23.3c0-18.2-14.8-33-33-33L33 0C14.8 0 0 14.8 0 33c0 8.7 3.5 17.1 9.7 23.3z" />
    </Icon>
);

export default MartiniGlass;