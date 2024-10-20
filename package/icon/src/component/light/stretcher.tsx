
import { Icon } from "../../index";

/**
 * A component that renders the `stretcher` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stretcher?s=light stretcher}
 * @preview ![stretcher](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/stretcher.svg)
 */
const Stretcher: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M27.3 68.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L145.9 232.6c15 15 35.4 23.4 56.6 23.4L624 256c8.8 0 16-7.2 16-16s-7.2-16-16-16l-95.8 0-.4 0-319.6 0-.4 0-5.3 0c-12.7 0-24.9-5.1-33.9-14.1L27.3 68.7zM224 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0c0-8.8-1.8-17.3-5-24.9l53-40.6 53 40.6c-3.2 7.7-5 16.1-5 24.9c0 35.3 28.7 64 64 64s64-28.7 64-64s-28.7-64-64-64c-14.9 0-28.6 5.1-39.5 13.6l-46.2-35.3L491.6 288l-52.7 0L368 342.2 297.1 288l-52.7 0 97.2 74.4-46.2 35.3C284.6 389.1 270.9 384 256 384c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Stretcher;