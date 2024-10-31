
import { Icon, generic } from "../../index";

/**
 * A component that renders the `file-contract` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/file-contract?s=duotone file-contract}
 * @preview ![file-contract](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/file-contract.svg)
 */
const FileContract: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zM64 80c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 64c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0c-8.8 0-16 7.2-16 16zm0 256c0 8.8 7.2 16 16 16l8.2 0c21.2 0 39.9-13.9 46-34.2L144 349l16.7 55.6c1.9 6.3 7.4 10.8 13.9 11.3s12.8-2.9 15.7-8.8l8.8-17.7c1.7-3.4 5.1-5.5 8.8-5.5s7.2 2.1 8.8 5.5l8.8 17.7c2.7 5.4 8.3 8.8 14.3 8.8l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-54.1 0-4.4-8.8C238.4 361 223.9 352 208 352c-10 0-19.4 3.5-26.8 9.7l-11.6-38.6C166.2 311.7 155.8 304 144 304s-22.2 7.7-25.6 19.1l-14.9 49.5c-2 6.8-8.3 11.4-15.3 11.4L80 384c-8.8 0-16 7.2-16 16z" />
        <path d="M384 160L224 0l0 128c0 17.7 14.3 32 32 32l128 0zM134.2 381.8L144 349l16.7 55.6c1.9 6.3 7.4 10.8 13.9 11.3s12.8-2.9 15.7-8.8l8.8-17.7c1.7-3.4 5.1-5.5 8.8-5.5s7.2 2.1 8.8 5.5l8.8 17.7c2.7 5.4 8.3 8.8 14.3 8.8l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-54.1 0-4.4-8.8C238.4 361 223.9 352 208 352c-10 0-19.4 3.5-26.8 9.7l-11.6-38.6C166.2 311.7 155.8 304 144 304s-22.2 7.7-25.6 19.1l-14.9 49.5c-2 6.8-8.3 11.4-15.3 11.4L80 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l8.2 0c21.2 0 39.9-13.9 46-34.2z" />
    </Icon>
);

export default FileContract;