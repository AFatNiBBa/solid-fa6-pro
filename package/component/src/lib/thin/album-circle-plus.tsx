
import { Icon } from "../../index";

/**
 * A component that renders the `album-circle-plus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/album-circle-plus?s=thin album-circle-plus}
 * @preview ![album-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/album-circle-plus.svg)
 */
const AlbumCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 48L64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l220.5 0c3.6 5.6 7.6 10.9 11.8 16L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 96.7c-5.3-.5-10.6-.7-16-.7l0-96c0-26.5-21.5-48-48-48zM224 96c69.3 0 128.3 44 150.5 105.6c-5.1 1.8-10 3.7-14.9 5.9C339.7 151.8 286.5 112 224 112c-79.5 0-144 64.5-144 144s64.5 144 144 144c11.8 0 23.2-1.4 34.2-4.1c.8 5.3 1.9 10.5 3.2 15.7c-12 2.9-24.5 4.4-37.4 4.4c-88.4 0-160-71.6-160-160s71.6-160 160-160zm16 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-48 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm152-72l0 64 64 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0 0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64-64 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l64 0 0-64c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default AlbumCirclePlus;