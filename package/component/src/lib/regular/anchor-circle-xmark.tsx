
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-circle-xmark` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-xmark?s=regular anchor-circle-xmark}
 * @preview ![anchor-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/anchor-circle-xmark.svg)
 */
const AnchorCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 80a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 0c-44.2 0-80 35.8-80 80c0 35.9 23.7 66.3 56.3 76.4c-.2 1.2-.3 2.4-.3 3.6l0 32-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 224-24 0c-73.7 0-133.7-58.6-135.9-131.8l16.3 14c10.1 8.6 25.2 7.5 33.8-2.6s7.5-25.2-2.6-33.8l-56-48c-9-7.7-22.3-7.7-31.2 0l-56 48c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6L56 332.1C58.2 431.8 139.8 512 240 512l48 0 48 0c17.2 0 33.9-2.4 49.7-6.8c-14.7-11.8-27.4-25.9-37.6-41.7c-4 .4-8 .5-12.1 .5l-24 0 0-224 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-32c0-1.2-.1-2.4-.3-3.6C344.3 146.3 368 115.9 368 80c0-44.2-35.8-80-80-80zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L518.6 368l36.7 36.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L496 390.6l-36.7 36.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L473.4 368l-36.7-36.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L496 345.4l36.7-36.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default AnchorCircleXmark;