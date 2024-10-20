
import { Icon } from "../../index";

/**
 * A component that renders the `hand-horns` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-horns?s=solid hand-horns}
 * @preview ![hand-horns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hand-horns.svg)
 */
const HandHorns: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32C32 14.3 46.3 0 64 0S96 14.3 96 32l0 208-64 0L32 32zM224 192c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm-64-64c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32zM320 96c0-17.7 14.3-32 32-32s32 14.3 32 32l0 96 0 96 0 64c0 88.4-71.6 160-160 160l-61.7 0c-42.4 0-83.1-16.9-113.1-46.9L37.5 453.5C13.5 429.5 0 396.9 0 363l0-27c0-35.3 28.7-64 64-64l88 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-56 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l56 0c39.8 0 72-32.2 72-72l0-.6c9.4 5.4 20.3 8.6 32 8.6c35.3 0 64-28.7 64-64l0-64 0-96z" />
    </Icon>
);

export default HandHorns;