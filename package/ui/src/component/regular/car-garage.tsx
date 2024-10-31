
import { Icon } from "../../index";

/**
 * A component that renders the `car-garage` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-garage?s=regular car-garage}
 * @preview ![car-garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/car-garage.svg)
 */
const CarGarage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M331.4 2.9c-7.1-3.8-15.7-3.8-22.8 0l-296 160c-11.7 6.3-16 20.9-9.7 32.5s20.9 16 32.5 9.7L320 51.3 604.6 205.1c11.7 6.3 26.2 2 32.5-9.7s2-26.2-9.7-32.5l-296-160zM249.8 208l140.3 0c10.1 0 19.2 6.4 22.6 15.9L429.9 272l-219.9 0 17.2-48.1c3.4-9.6 12.5-15.9 22.6-15.9zm-96.4 79.9c-.2 .5-.3 .9-.5 1.4C128.2 306.7 112 335.5 112 368l0 32 0 16 0 32 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 320 0 0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 0-32 0-16 0-32c0-32.5-16.2-61.3-40.9-78.7c-.1-.5-.3-.9-.5-1.4L458 207.8c-10.2-28.7-37.4-47.8-67.8-47.8l-140.3 0c-30.4 0-57.6 19.1-67.8 47.8l-28.6 80.1zM432 320c26.5 0 48 21.5 48 48l0 32-320 0 0-32c0-26.5 21.5-48 48-48l224 0zM224 384a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm216-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default CarGarage;