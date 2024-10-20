
import { Icon } from "../../index";

/**
 * A component that renders the `car-on` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-on?s=light car-on}
 * @preview ![car-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/car-on.svg)
 */
const CarOn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 24c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 80c0 8.8 7.2 16 16 16s16-7.2 16-16l0-80zM188.2 208l135.6 0c14.3 0 26.8 9.5 30.8 23.2L370.8 288c-.9 0-1.9 0-2.8 0l-224 0c-.9 0-1.9 0-2.8 0l16.2-56.8c3.9-13.7 16.5-23.2 30.8-23.2zm-61.5 14.4L105 298.1C80.6 311.8 64 338 64 368l0 48 0 16 0 32 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 320 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 0-32 0-16 0-48c0-30-16.6-56.2-41-69.9l-21.6-75.7c-7.8-27.5-33-46.4-61.5-46.4l-135.6 0c-28.6 0-53.7 18.9-61.5 46.4zM416 416l0 16L96 432l0-16 0-48c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 48zM144 400a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm248-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM44.7 44.7c-6.2 6.2-6.2 16.4 0 22.6l48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48c-6.2-6.2-16.4-6.2-22.6 0zm400 0l-48 48c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l48-48c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z" />
    </Icon>
);

export default CarOn;