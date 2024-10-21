
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=thin meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 23.7c0-19.7-22.4-31-38.2-19.3l4.7 6.4-4.7-6.4L81.1 152.2C30.1 189.8 0 249.8 0 313.1C0 422.4 88.6 512 197.9 512c64.1 0 124.2-31 161.4-83.3L500.6 229.9C511.9 214 500.5 192 481 192l-35.1 0L509.3 47.8c1.8-4.1 2.7-8.5 2.7-12.9l0-3c0-17.7-14.3-32-32-32l-3 0c-4.4 0-8.8 .9-12.9 2.7l3.2 7.3-3.2-7.3L320 66.1l0-42.5zm-28.7-6.4c5.3-3.9 12.7-.1 12.7 6.4l0 54.7c0 2.7 1.4 5.2 3.6 6.7s5.1 1.7 7.6 .6L470.6 17.4c2-.9 4.2-1.4 6.4-1.4l3 0c8.8 0 16 7.2 16 16l0 3c0 2.2-.5 4.4-1.4 6.4L426.3 196.8c-1.1 2.5-.9 5.3 .6 7.6s4 3.6 6.7 3.6l47.4 0c6.5 0 10.3 7.3 6.5 12.6L346.3 419.4c-34.1 48-89.4 76.6-148.3 76.6C97.5 496 16 413.7 16 313.1c0-58.3 27.7-113.5 74.6-148L291.3 17.2zM64 320a128 128 0 1 0 256 0A128 128 0 1 0 64 320zm16 0a112 112 0 1 1 224 0A112 112 0 1 1 80 320zm144 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48-80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default Meteor;