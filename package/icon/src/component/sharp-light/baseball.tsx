
import { Icon } from "../../index";

/**
 * A component that renders the `baseball` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baseball?s=sharp-light baseball}
 * @preview ![baseball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/baseball.svg)
 */
const Baseball: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256.6 480c-.4-5.3-.6-10.6-.6-16c0-5.8 .2-11.6 .7-17.3l31.9 2.6c-.4 4.8-.6 9.7-.6 14.7c0 4.6 .2 9.1 .5 13.7c97.7-14.2 174.9-91.5 189.1-189.1c-4.5-.3-9.1-.5-13.7-.5c-4.9 0-9.8 .2-14.7 .6l-2.6-31.9c5.7-.5 11.5-.7 17.3-.7c5.4 0 10.7 .2 16 .6l0-.6C480 132.3 379.7 32 256 32l-.6 0c.4 5.3 .6 10.6 .6 16c0 5.8-.2 11.6-.7 17.3l-31.9-2.6c.4-4.8 .6-9.7 .6-14.7c0-4.6-.2-9.1-.5-13.7C125.8 48.6 48.6 125.8 34.3 223.5c4.5 .3 9.1 .5 13.7 .5c4.9 0 9.8-.2 14.7-.6l2.6 31.9c-5.7 .5-11.5 .7-17.3 .7c-5.4 0-10.7-.2-16-.6l0 .6c0 123.7 100.3 224 224 224l.6 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM208 121.3l29.1 13.3c-20.8 45.2-57.2 81.7-102.5 102.5L121.3 208c38.3-17.6 69.2-48.5 86.7-86.7zM304 390.7l-29.1-13.4c20.8-45.2 57.2-81.7 102.5-102.5L390.7 304c-38.3 17.6-69.2 48.5-86.7 86.7z" />
    </Icon>
);

export default Baseball;