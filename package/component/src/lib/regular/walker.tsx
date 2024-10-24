
import { Icon } from "../../index";

/**
 * A component that renders the `walker` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walker?s=regular walker}
 * @preview ![walker](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/walker.svg)
 */
const Walker: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M186.4 48L320 48c22.1 0 40 17.9 40 40l0 88-236 0 23.5-97.4c4.3-18 20.4-30.6 38.9-30.6zM360 224l0 164.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64c0-26.9-16.5-49.9-40-59.3L408 88c0-48.6-39.4-88-88-88L186.4 0c-40.6 0-76 27.8-85.5 67.4L.7 482.4c-3.1 12.9 4.8 25.9 17.7 29s25.9-4.8 29-17.7L112.4 224 360 224zm24 208a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Walker;