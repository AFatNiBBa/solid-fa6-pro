
import { Icon } from "../../index";

/**
 * A component that renders the `outlet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=light outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 256c0 49.2 24.6 79.3 39.5 93.1c1.2 1.1 4.3 2.9 10.9 2.9l155.3 0c6.6 0 9.7-1.8 10.9-2.9C327.4 335.3 352 305.2 352 256s-24.6-79.3-39.5-93.1c-1.2-1.1-4.3-2.9-10.9-2.9l-155.3 0c-6.6 0-9.7 1.8-10.9 2.9C120.6 176.7 96 206.8 96 256zm-32 0c0-61.1 30.8-99.1 49.7-116.6c8.8-8.2 20.7-11.4 32.6-11.4l155.3 0c12 0 23.9 3.3 32.6 11.4C353.2 156.9 384 194.9 384 256s-30.8 99-49.7 116.6c-8.8 8.2-20.7 11.4-32.6 11.4l-155.3 0c-12 0-23.9-3.3-32.6-11.4C94.8 355 64 317.1 64 256zm112-64c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zm96 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zm-48 96c13.3 0 24 10.7 24 24l0 16c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-16c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default Outlet;