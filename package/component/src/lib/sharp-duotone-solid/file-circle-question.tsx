
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-circle-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-circle-question?s=sharp-duotone-solid file-circle-question}
 * @preview ![file-circle-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-circle-question.svg)
 */
const FileCircleQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 38.6C310.1 219.5 256 287.4 256 368c0 59.5 29.6 112.1 74.8 144L0 512 0 0z" />
        <path d="M384 160L224 0l0 160 160 0zm48 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288zM409.6 280l40.5 0c25.4 0 45.9 20.6 45.9 45.9c0 17.1-9.5 32.7-24.5 40.6L448 378.9l0 13.1-32 0 0-16 0-6.8 0-9.7 8.6-4.5 32-16.8c4.6-2.4 7.4-7.2 7.4-12.3c0-7.7-6.2-13.9-13.9-13.9l-40.5 0c-5.3 0-9.6 4.3-9.6 9.6l0 6.4-32 0 0-6.4c0-23 18.6-41.6 41.6-41.6zM448 416l0 32-32 0 0-32 32 0z" />
    </Icon>
);

export default FileCircleQuestion;