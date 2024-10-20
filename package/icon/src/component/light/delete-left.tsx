
import { Icon } from "../../index";

/**
 * A component that renders the `delete-left` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/delete-left?s=light delete-left}
 * @preview ![delete-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/delete-left.svg)
 */
const DeleteLeft: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 128c0-17.7-14.3-32-32-32L205.3 96c-8.5 0-16.6 3.4-22.6 9.4L32 256 182.6 406.6c6 6 14.1 9.4 22.6 9.4L512 416c17.7 0 32-14.3 32-32l0-256zM512 64c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-306.7 0c-17 0-33.3-6.7-45.3-18.7L9.4 278.6c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6L160 82.7c12-12 28.3-18.7 45.3-18.7L512 64zM427.3 180.7c6.2 6.2 6.2 16.4 0 22.6L374.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L352 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L329.4 256l-52.7-52.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L352 233.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0z" />
    </Icon>
);

export default DeleteLeft;