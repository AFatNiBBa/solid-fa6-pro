
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake-angle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake-angle?s=duotone handshake-angle}
 * @preview ![handshake-angle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/handshake-angle.svg)
 */
const HandshakeAngle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M224 128l0 9.1L224 256c0 26.5 21.5 48 48 48s48-21.5 48-48l0-64c45.3 0 90.7 0 136 0c30.9 0 56 25.1 56 56c0 1 0 2-.1 2.9s-.1 1.9-.2 2.9c-.2 1.9-.5 3.8-.9 5.6c-.8 3.7-1.9 7.2-3.3 10.6l4.5 0c8.5 0 16.6-3.4 22.6-9.4l79-79c10.9-10.9 16.4-25.3 16.4-39.6s-5.5-28.7-16.4-39.6L535.6 24.4C524.7 13.5 510.3 8 496 8s-28.7 5.5-39.6 16.4L416.8 64l-.8 0L297.1 64c-37.3 0-68.1 27.9-72.6 64l-.6 0z" />
        <path d="M218.2 128c-38.4 0-73.1 22.9-88.2 58.2L101 253.7 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1l160 0c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16l2.7 0c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.8-5 45.2-27.7 45.2-55c0-30.9-25.1-56-56-56l-136 0 0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-128-5.8 0z" />
    </Icon>
);

export default HandshakeAngle;