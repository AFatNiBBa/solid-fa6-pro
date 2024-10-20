
import { Icon } from "../../index";

/**
 * A component that renders the `square-bolt` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-bolt?s=thin square-bolt}
 * @preview ![square-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-bolt.svg)
 */
const SquareBolt: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM235.6 232.8L288 128 128 256l70.1 0c5.5 0 10.7 2.9 13.6 7.6s3.2 10.6 .7 15.6L160 384 320 256l-70.1 0c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6zm66.7-97.7L257.9 224l-8 16 17.9 0 52.2 0c6.8 0 12.9 4.3 15.1 10.7s.2 13.5-5.1 17.8l-160 128c-5.9 4.7-14.2 4.7-20.1-.1s-7.6-12.9-4.3-19.6L190.1 288l8-16-17.9 0L128 272c-6.8 0-12.8-4.3-15.1-10.7s-.2-13.5 5.1-17.8l160-128c5.9-4.7 14.2-4.7 20.1 .1s7.6 12.9 4.3 19.6z" />
    </Icon>
);

export default SquareBolt;