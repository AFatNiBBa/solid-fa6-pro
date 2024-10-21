
import { Icon } from "../../index";

/**
 * A component that renders the `tree` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tree?s=regular tree}
 * @preview ![tree](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/tree.svg)
 */
const Tree: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M241.8 7.9C237.3 2.9 230.8 0 224 0s-13.3 2.9-17.8 7.9l-144 160c-6.3 7-7.9 17.2-4.1 25.8S70.5 208 80 208l11.8 0-62 72.4c-6.1 7.1-7.5 17.1-3.6 25.6s12.4 14 21.8 14l24 0L4.8 409.6c-5.5 7.3-6.3 17-2.3 25.1S14.9 448 24 448l136 0 40 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0 136 0c9.1 0 17.4-5.1 21.5-13.3s3.2-17.9-2.3-25.1L376 320l24 0c9.4 0 17.9-5.5 21.8-14s2.5-18.5-3.6-25.6l-62-72.4 11.8 0c9.5 0 18.1-5.6 21.9-14.2s2.3-18.8-4.1-25.8l-144-160zM248 400l0-184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 184-40 0-88 0 67.2-89.6c5.5-7.3 6.3-17 2.3-25.1s-12.4-13.3-21.5-13.3l-19.8 0 62-72.4c6.1-7.1 7.5-17.1 3.6-25.6s-12.4-14-21.8-14l-10.1 0L224 59.9 314.1 160 304 160c-9.4 0-17.9 5.5-21.8 14s-2.5 18.5 3.6 25.6l62 72.4L328 272c-9.1 0-17.4 5.1-21.5 13.3s-3.2 17.9 2.3 25.1L376 400l-88 0-40 0z" />
    </Icon>
);

export default Tree;