
import { Icon } from "../../index";

/**
 * A component that renders the `stretcher` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=regular stretcher}
 * @preview ![stretcher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stretcher.svg)
 */
const Stretcher: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M41.4 71.5c-9.1-9.6-24.3-10-33.9-.9s-10 24.3-.9 33.9L139.7 244.6c16.6 17.5 39.7 27.4 63.8 27.4L616 272c13.3 0 24-10.7 24-24s-10.7-24-24-24l-412.5 0c-11 0-21.4-4.5-29-12.4L41.4 71.5zM241.2 304l86 62.5-37.3 27.1c-9.8-6.1-21.4-9.7-33.9-9.7c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64c0-5.3-.7-10.5-1.9-15.5L368 396.2l49.9 36.3c-1.2 5-1.9 10.2-1.9 15.5c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-12.4 0-24 3.5-33.9 9.7l-37.3-27.1 86-62.5-81.6 0L368 336.9 322.8 304l-81.6 0zM240 448a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm224 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Stretcher;