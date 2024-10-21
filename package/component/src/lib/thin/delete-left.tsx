
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=thin delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 128c0-26.5-21.5-48-48-48L205.3 80c-12.7 0-24.9 5.1-33.9 14.1L20.7 244.7c-3 3-4.7 7.1-4.7 11.3s1.7 8.3 4.7 11.3L171.3 417.9c9 9 21.2 14.1 33.9 14.1L512 432c26.5 0 48-21.5 48-48l0-256zM9.4 233.4L160 82.7c12-12 28.3-18.7 45.3-18.7L512 64c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-306.7 0c-17 0-33.3-6.7-45.3-18.7L9.4 278.6c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6zm420.3-55c3.1 3.1 3.1 8.2 0 11.3L363.3 256l66.3 66.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L352 267.3l-66.3 66.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L340.7 256l-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L352 244.7l66.3-66.3c3.1-3.1 8.2-3.1 11.3 0z" />
    </Icon>
);

export default DeleteLeft;