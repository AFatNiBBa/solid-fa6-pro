
import { Icon } from "../../index";

/**
 * A component that renders the `monument` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=light monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M180.7 4.7c6.2-6.2 16.4-6.2 22.6 0l80 80c2.5 2.5 4.2 5.9 4.6 9.4l32 272c1 8.8-5.2 16.7-14 17.8s-16.7-5.2-17.8-14L256.8 103.4 192 38.6l-64.8 64.8L95.9 369.9c-1 8.8-9 15.1-17.8 14s-15.1-9-14-17.8l32-272c.4-3.6 2-6.9 4.6-9.4l80-80zM144 304c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zM40 416l304 0c22.1 0 40 17.9 40 40l0 16c0 22.1-17.9 40-40 40L40 512c-22.1 0-40-17.9-40-40l0-16c0-22.1 17.9-40 40-40zm-8 40l0 16c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8l0-16c0-4.4-3.6-8-8-8L40 448c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default Monument;