
import { Icon } from "../../index";

/**
 * A component that renders the `gif` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=thin gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM296 160c-4.4 0-8 3.6-8 8l0 176c0 4.4 3.6 8 8 8s8-3.6 8-8l0-176c0-4.4-3.6-8-8-8zm72 8l0 96 0 80c0 4.4 3.6 8 8 8s8-3.6 8-8l0-72 80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-80 96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-104 0c-4.4 0-8 3.6-8 8zM96 256c0-44.2 35.8-80 80-80c19.3 0 37.1 6.9 50.9 18.3c3.4 2.8 8.4 2.3 11.3-1.1s2.3-8.4-1.1-11.3C220.5 168.2 199.2 160 176 160c-53 0-96 43-96 96s43 96 96 96c23.2 0 44.5-8.2 61.1-21.9c1.8-1.5 2.9-3.8 2.9-6.2l0-67.9c0-4.4-3.6-8-8-8l-72 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0 0 56c-13.4 10-30 16-48 16c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default Gif;