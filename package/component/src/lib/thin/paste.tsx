
import { Icon } from "../../index";

/**
 * A component that renders the `paste` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paste?s=thin paste}
 * @preview ![paste](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/paste.svg)
 */
const Paste: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128.6 41.6C131.6 27 144.5 16 160 16s28.4 11 31.4 25.6c.8 3.7 4 6.4 7.8 6.4L216 48c13.3 0 24 10.7 24 24l0 16c0 4.4-3.6 8-8 8L88 96c-4.4 0-8-3.6-8-8l0-16c0-13.3 10.7-24 24-24l16.8 0c3.8 0 7.1-2.7 7.8-6.4zM160 0c-20.9 0-38.7 13.4-45.3 32L104 32c-13.1 0-24.7 6.3-32 16l-8 0C28.7 48 0 76.7 0 112L0 384c0 35.3 28.7 64 64 64l128 0 0-16L64 432c-26.5 0-48-21.5-48-48l0-272c0-26.5 21.5-48 48-48l.8 0c-.5 2.6-.8 5.3-.8 8l0 16c0 13.3 10.7 24 24 24l144 0c13.3 0 24-10.7 24-24l0-16c0-2.7-.3-5.4-.8-8l.8 0c20.9 0 38.7 13.4 45.3 32L318 96c-7.1-27.6-32.2-48-62-48l-8 0c-7.3-9.7-18.9-16-32-16l-10.7 0C198.7 13.4 180.9 0 160 0zM448 496l-160 0c-26.5 0-48-21.5-48-48l0-256c0-26.5 21.5-48 48-48l108.1 0c8.5 0 16.6 3.4 22.6 9.4l67.9 67.9c6 6 9.4 14.1 9.4 22.6L496 448c0 26.5-21.5 48-48 48zM288 512l160 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9l-67.9-67.9c-9-9-21.2-14.1-33.9-14.1L288 128c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default Paste;