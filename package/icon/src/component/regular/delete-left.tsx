
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=regular delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7L512 448c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L205.3 64zM528 128l0 256c0 8.8-7.2 16-16 16l-306.7 0c-4.2 0-8.3-1.7-11.3-4.7L54.6 256 193.9 116.7c3-3 7.1-4.7 11.3-4.7L512 112c8.8 0 16 7.2 16 16zm-95 47c-9.4-9.4-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9z" />
    </Icon>
);

export default DeleteLeft;