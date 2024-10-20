
import { Icon } from "../../index";

/**
 * A component that renders the `file-word` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-word?s=light file-word}
 * @preview ![file-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/file-word.svg)
 */
const FileWord: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 480L64 480c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l128 0 0 112c0 26.5 21.5 48 48 48l112 0 0 256c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16l0-111.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4L240 160zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-284.1c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1L64 0zm39.2 235.1c-2.7-8.4-11.7-13.1-20.1-10.4s-13.1 11.7-10.4 20.1l56 176c2.2 6.8 8.5 11.3 15.6 11.1s13.2-4.9 15.1-11.8L192 300.8l32.6 119.4c1.9 6.8 8 11.6 15.1 11.8s13.4-4.4 15.6-11.1l56-176c2.7-8.4-2-17.4-10.4-20.1s-17.4 2-20.1 10.4L241.2 359.5 207.4 235.8c-1.9-7-8.2-11.8-15.4-11.8s-13.5 4.8-15.4 11.8L142.8 359.5 103.2 235.1z" />
    </Icon>
);

export default FileWord;