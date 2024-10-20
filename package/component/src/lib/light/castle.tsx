
import { Icon } from "../../index";

/**
 * A component that renders the `castle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/castle?s=light castle}
 * @preview ![castle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/castle.svg)
 */
const Castle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 40c0-22.1 17.9-40 40-40l24 0c22.1 0 40 17.9 40 40l0 24 32 0 0-24c0-22.1 17.9-40 40-40l32 0c22.1 0 40 17.9 40 40l0 24 32 0 0-24c0-22.1 17.9-40 40-40l24 0c22.1 0 40 17.9 40 40l0 184 32 0 0-24c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 232c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 200c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 24 32 0 0-184zm40-8c-4.4 0-8 3.6-8 8l0 184 320 0 0-184c0-4.4-3.6-8-8-8l-24 0c-4.4 0-8 3.6-8 8l0 40c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-40c0-4.4-3.6-8-8-8l-32 0c-4.4 0-8 3.6-8 8l0 40c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-40c0-4.4-3.6-8-8-8l-24 0zM496 256l-352 0-64 0c-8.8 0-16-7.2-16-16l0-40c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 232c0 26.5 21.5 48 48 48l144 0 0-80c0-53 43-96 96-96s96 43 96 96l0 80 144 0c26.5 0 48-21.5 48-48l0-232c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 40c0 8.8-7.2 16-16 16l-64 0zM384 400c0-35.3-28.7-64-64-64s-64 28.7-64 64l0 80 128 0 0-80z" />
    </Icon>
);

export default Castle;