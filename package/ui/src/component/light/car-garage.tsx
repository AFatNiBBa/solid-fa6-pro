
import { Icon } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=light car-garage}
 * @preview ![car-garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/car-garage.svg)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M328.5 2.5c-5.2-3.3-11.9-3.3-17.1 0l-304 192c-7.5 4.7-9.7 14.6-5 22.1s14.6 9.7 22.1 5L320 34.9 615.5 221.5c7.5 4.7 17.4 2.5 22.1-5s2.5-17.4-5-22.1l-304-192zM252.2 208l135.6 0c14.3 0 26.8 9.5 30.8 23.2L434.8 288c-.9 0-1.9 0-2.8 0l-224 0c-.9 0-1.9 0-2.8 0l16.2-56.8c3.9-13.7 16.5-23.2 30.8-23.2zm-61.5 14.4L169 298.1c-24.5 13.7-41 39.9-41 69.9l0 48 0 16 0 32 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 320 0 0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 0-32 0-16 0-48c0-30-16.6-56.2-41-69.9l-21.6-75.7c-7.9-27.5-33-46.4-61.5-46.4l-135.6 0c-28.6 0-53.7 18.9-61.5 46.4zM480 416l0 16-320 0 0-16 0-48c0-26.5 21.5-48 48-48l224 0c26.5 0 48 21.5 48 48l0 48zM208 400a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm248-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CarGarage;