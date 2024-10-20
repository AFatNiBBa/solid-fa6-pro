
import { Icon } from "../../index";

/**
 * A component that renders the `person-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-simple?s=thin person-simple}
 * @preview ![person-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-simple.svg)
 */
const PersonSimple: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M176 64A48 48 0 1 0 80 64a48 48 0 1 0 96 0zM64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM41.8 234.7L37.7 284c-2.3 28 19.8 52 47.8 52l26.4 0 32 0 26.4 0c28.1 0 50.2-24 47.8-52l-4.1-49.3c-2.8-33.2-30.5-58.7-63.8-58.7l-44.8 0c-33.3 0-61 25.5-63.8 58.7zM136 352l-16 0 0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-135.2c-22.1-11.5-36.4-35.4-34.2-62.1l4.1-49.3C29.3 191.9 64 160 105.6 160l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.2 26.7-12.2 50.6-34.2 62.1L200 480c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128zm48-1.4c-4.4 .9-8.9 1.4-13.6 1.4L152 352l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-129.4zM85.6 352c-4.7 0-9.2-.5-13.6-1.4L72 480c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128-18.4 0z" />
    </Icon>
);

export default PersonSimple;