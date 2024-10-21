
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=thin inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 327.9L16 416c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-88.1c0-2.6-.2-5.3-.6-7.9l-101.5 0c-3 0-5.8 1.7-7.2 4.4l-23.2 46.3c-4.1 8.1-12.4 13.3-21.5 13.3l-172.2 0c-9.1 0-17.4-5.1-21.5-13.3l-23.2-46.3c-1.4-2.7-4.1-4.4-7.2-4.4L16.7 320c-.4 2.6-.7 5.2-.7 7.9zM436.6 84.4C431.3 63 412.1 48 390 48L122 48c-22 0-41.2 15-46.6 36.4L20.5 304l97.6 0c9.1 0 17.4 5.1 21.5 13.3l23.2 46.3c1.4 2.7 4.1 4.4 7.2 4.4l172.2 0c3 0 5.8-1.7 7.2-4.4l23.2-46.3c4.1-8.1 12.4-13.3 21.5-13.3l97.6 0L436.6 84.4zM0 416l0-88.1c0-5.2 .6-10.4 1.9-15.5l58-231.9C67 52 92.6 32 122 32L390 32c29.4 0 55 20 62.1 48.5l58 231.9c1.3 5.1 1.9 10.3 1.9 15.5l0 88.1c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM152 112l216 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-216 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-24 64l256 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-256 0c-4.4 0-8-3.6-8-8s3.6-8 8-8zm-16 64l280 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-280 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default InboxFull;