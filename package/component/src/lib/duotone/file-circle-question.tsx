
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-question` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-question?s=duotone file-circle-question}
 * @preview ![file-circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-circle-question.svg)
 */
const FileCircleQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7L64 512c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-64-94.4c0-23 18.6-41.6 41.6-41.6l40.5 0c25.4 0 45.9 20.6 45.9 45.9c0 17.1-9.5 32.7-24.5 40.6L448 378.9l0 5.1c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-14.8c0-5.9 3.3-11.4 8.6-14.2l32-16.8c4.6-2.4 7.4-7.2 7.4-12.3c0-7.7-6.2-13.9-13.9-13.9l-40.5 0c-5.3 0-9.6 4.3-9.6 9.6l0 6.4c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-6.4z" />
    </Icon>
);

export default FileCircleQuestion;