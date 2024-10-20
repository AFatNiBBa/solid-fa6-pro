
import { Icon } from "../../index";

/**
 * A component that renders the `file-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-heart?s=light file-heart}
 * @preview ![file-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-heart.svg)
 */
const FileHeart: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 480L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4L240 160zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zm61.7 306.8c0-11.9 9.6-21.5 21.5-21.5l1.5 0c6 0 11.7 2.3 16 6.5l16.1 15.6c6.2 6 16.1 6 22.3 0l16.1-15.6c4.3-4.2 10.1-6.5 16-6.5l1.5 0c11.9 0 21.5 9.6 21.5 21.5c0 5.8-2.3 11.4-6.5 15.4L192 380.4l-59.8-58.1c-4.2-4-6.5-9.6-6.5-15.4zm21.5-53.5c-29.5 0-53.5 23.9-53.5 53.5c0 14.4 5.8 28.3 16.2 38.4l70.9 69c6.2 6 16.1 6 22.3 0l70.9-69c10.4-10.1 16.2-23.9 16.2-38.4c0-29.5-23.9-53.5-53.5-53.5l-1.5 0c-14.3 0-28.1 5.6-38.4 15.6l-4.9 4.8-4.9-4.8c-10.3-10-24-15.6-38.4-15.6l-1.5 0z" />
    </Icon>
);

export default FileHeart;