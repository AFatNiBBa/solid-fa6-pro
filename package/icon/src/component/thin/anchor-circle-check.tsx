
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-check?s=thin anchor-circle-check}
 * @preview ![anchor-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/anchor-circle-check.svg)
 */
const AnchorCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 80A64 64 0 1 1 224 80a64 64 0 1 1 128 0zM288 0c-44.2 0-80 35.8-80 80c0 41.5 31.6 75.6 72 79.6c0 .1 0 .3 0 .4l0 48-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l80 0 0 272-8 0C170.4 496 88 413.6 88 312l0-27.2 58.1 64.5c3 3.3 8 3.6 11.3 .6s3.6-8 .6-11.3l-72-80C84.4 257 82.3 256 80 256s-4.4 1-5.9 2.6l-72 80c-3 3.3-2.7 8.3 .6 11.3s8.3 2.7 11.3-.6L72 284.8 72 312c0 110.5 89.5 200 200 200l16 0 16 0c25.9 0 50.7-4.9 73.4-13.9c-4.3-3.9-8.5-8.1-12.4-12.5C346 492.3 325.4 496 304 496l-8 0 0-272 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-48c0-.1 0-.3 0-.4c40.4-4 72-38.1 72-79.6c0-44.2-35.8-80-80-80zM496 240a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm69.7-189.7c-3.1-3.1-8.2-3.1-11.3 0L480 396.7l-42.3-42.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l48 48c3.1 3.1 8.2 3.1 11.3 0l80-80c3.1-3.1 3.1-8.2 0-11.3z" />
    </Icon>
);

export default AnchorCircleCheck;