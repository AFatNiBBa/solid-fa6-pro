
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-list-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list-check?s=duotone clipboard-list-check}
 * @preview ![clipboard-list-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clipboard-list-check.svg)
 */
const ClipboardListCheck: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64l-49.6 0c.2 .8 .3 1.6 .4 2.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7c.1-.8 .3-1.6 .4-2.3L64 64C28.7 64 0 92.7 0 128zM64 272c0-4.1 1.6-8.2 4.7-11.3c6.2-6.2 16.4-6.2 22.6 0L112 281.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-32-32c-3.1-3.1-4.7-7.2-4.7-11.3zm56 128a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm40 0c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-128 0c-8.8 0-16-7.2-16-16zm32-96c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
        <path d="M113.2 66.3C119.6 28.7 152.5 0 192 0s72.4 28.7 78.8 66.3C290.1 72.6 304 90.7 304 112l0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24c0-21.3 13.9-39.4 33.2-45.7zM216 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM187.3 228.7c6.2 6.2 6.2 16.4 0 22.6l-64 64c-6.2 6.2-16.4 6.2-22.6 0l-32-32c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L112 281.4l52.7-52.7c6.2-6.2 16.4-6.2 22.6 0zM72 400a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default ClipboardListCheck;