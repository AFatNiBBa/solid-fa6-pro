
import { Icon, generic } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=duotone delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256c0 8.5 3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6zm264 64c0-6.1 2.3-12.3 7-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.4-31.4-47-47c-9.4-9.4-9.4-24.6 0-33.9c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c15.7 15.7 31.4 31.4 47 47c15.7-15.7 31.4-31.4 47-47c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c2.3 2.3 4.1 5.1 5.3 7.9c.6 1.4 1 2.9 1.3 4.4c.2 1.1 .3 2.2 .3 2.2c.1 .8 .1 1.6 .1 2.5c-.1 1.5-.1 1.9-.1 2.3c-.1 .7-.2 1.5-.3 2.2c-.3 1.5-.7 3-1.3 4.4c-1.2 2.9-2.9 5.6-5.3 7.9c-15.7 15.7-31.4 31.4-47 47c15.7 15.7 31.4 31.4 47 47c2.3 2.3 4.1 5.1 5.3 7.9c.6 1.4 1 2.9 1.3 4.4c.2 1.1 .3 2.2 .3 2.2c.1 1.2 .1 1.2 .1 2.5c-.1 1.5-.1 1.9-.1 2.3c-.1 .7-.2 1.5-.3 2.2c-.3 1.5-.7 3-1.3 4.4c-1.2 2.9-2.9 5.6-5.3 7.9c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7l-47-47c-15.7 15.7-31.4 31.4-47 47c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7s-7-10.8-7-17z" />
        <path d="M399 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47 47-47z" />
    </Icon>
);

export default DeleteLeft;