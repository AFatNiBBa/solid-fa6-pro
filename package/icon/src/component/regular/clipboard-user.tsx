
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-user?s=regular clipboard-user}
 * @preview ![clipboard-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clipboard-user.svg)
 */
const ClipboardUser: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 64l-40 0-9.6 0C263 27.5 230.7 0 192 0s-71 27.5-78.4 64L104 64 64 64C28.7 64 0 92.7 0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64zM80 112l0 24c0 13.3 10.7 24 24 24l88 0 88 0c13.3 0 24-10.7 24-24l0-24 16 0c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16l-16 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-16 0c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l16 0zm88-32a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 208a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default ClipboardUser;