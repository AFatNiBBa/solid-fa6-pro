
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-signature` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-signature?s=duotone file-signature}
 * @preview ![file-signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-signature.svg)
 */
const FileSignature: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-57.2-1.1 1.1c-4.1 4.1-9.2 7-14.9 8.4L310 414.9c-1.8 .7-3.9 1.1-6 1.1c-21.3 .1-42.7 .1-64 .1c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 349l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2L80 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.7 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 41.6 0c4-16.1 8-32.1 12-48.2c1.4-5.6 4.3-10.8 8.4-14.9c24-24 48-48.1 72.1-72.1l0-88.9-128 0c-17.7 0-32-14.3-32-32L224 0 64 0C28.7 0 0 28.7 0 64z" />
        <path d="M384 160l-128 0c-17.7 0-32-14.3-32-32L224 0 384 160zm165.8-20.3l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 321L441.1 191.8l71 71L382.9 391.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
    </Icon>
);

export default FileSignature;