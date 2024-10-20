
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-circle-xmark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-circle-xmark?s=sharp-regular anchor-circle-xmark}
 * @preview ![anchor-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/anchor-circle-xmark.svg)
 */
const AnchorCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 80a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM288 0c-44.2 0-80 35.8-80 80c0 35.9 23.7 66.3 56.3 76.4c-.2 1.2-.3 2.4-.3 3.6l0 32-48 0-24 0 0 48 24 0 48 0 0 224-144 0 0-112 72 0L96 256 0 352l72 0 0 136 0 24 24 0 192 0 106.8 0c-18.3-12.9-34.1-29.2-46.3-48L312 464l0-224 48 0 15.2 0c2.8-2.7 5.8-5.3 8.8-7.8l0-40.2-24 0-48 0 0-32c0-1.2-.1-2.4-.3-3.6C344.3 146.3 368 115.9 368 80c0-44.2-35.8-80-80-80zM496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm59.3-180.7L518.6 368l36.7 36.7L566.6 416 544 438.6l-11.3-11.3L496 390.6l-36.7 36.7L448 438.6 425.4 416l11.3-11.3L473.4 368l-36.7-36.7L425.4 320 448 297.4l11.3 11.3L496 345.4l36.7-36.7L544 297.4 566.6 320l-11.3 11.3z" />
    </Icon>
);

export default AnchorCircleXmark;