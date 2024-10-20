
import { Icon } from "../../index";

/**
 * A component that renders the `anchor-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor-lock?s=light anchor-lock}
 * @preview ![anchor-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/anchor-lock.svg)
 */
const AnchorLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 80a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM288 0c-44.2 0-80 35.8-80 80c0 38.7 27.5 71 64.1 78.4c-.1 .5-.1 1-.1 1.6l0 32-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0 0 256-32 0c-79.5 0-144-64.5-144-144l0-25.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L64 310.6 64 336c0 97.2 78.8 176 176 176l48 0 48 0c18.3 0 36-2.8 52.6-8c-3-7.4-4.6-15.5-4.6-24l0-8.2c-15 5.3-31.2 8.2-48 8.2l-32 0 0-256 64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-32c0-.5 0-1.1-.1-1.6C340.5 151 368 118.7 368 80c0-44.2-35.8-80-80-80zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default AnchorLock;