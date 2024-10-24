
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-contract` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-contract?s=sharp-duotone-solid file-contract}
 * @preview ![file-contract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/file-contract.svg)
 */
const FileContract: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 0L224 0l0 160 160 0 0 352L0 512 0 0zM64 64l0 32 16 0 64 0 16 0 0-32-16 0L80 64 64 64zm0 64l0 32 16 0 64 0 16 0 0-32-16 0-64 0-16 0zm0 256l0 32 16 0 32 0 11.9 0 3.4-11.4L144 349l16.7 55.6c1.1 3.8 2.3 7.6 3.4 11.4l11.9 0 8 0 9.9 0 4.4-8.8L209.9 384l12.2 0 11.6 23.2 4.4 8.8 9.9 0 56 0 16 0 0-32-16 0-46.1 0-11.6-23.2-4.4-8.8-9.9 0-32 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4c-1.1-3.8-2.3-7.6-3.4-11.4L152 304l-16 0-11.9 0-3.4 11.4L100.1 384 80 384l-16 0z" />
        <path d="M384 160L224 0l0 160 160 0zM136 304l-11.9 0-3.4 11.4L100.1 384 80 384l-16 0 0 32 16 0 32 0 11.9 0 3.4-11.4L144 349l16.7 55.6 3.4 11.4 11.9 0 8 0 9.9 0 4.4-8.8L209.9 384l12.2 0 11.6 23.2 4.4 8.8 9.9 0 56 0 16 0 0-32-16 0-46.1 0-11.6-23.2-4.4-8.8-9.9 0-32 0-9.9 0-4.4 8.8-3 5.9-15.4-51.4L163.9 304 152 304l-16 0z" />
    </Icon>
);

export default FileContract;