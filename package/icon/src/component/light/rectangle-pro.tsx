
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-pro` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-pro?s=light rectangle-pro}
 * @preview ![rectangle-pro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rectangle-pro.svg)
 */
const RectanglePro: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l512 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 64l48 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-96c0-8.8 7.2-16 16-16zm48 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0 64 32 0zm96-80c0-8.8 7.2-16 16-16l48 0c35.3 0 64 28.7 64 64c0 23.2-12.4 43.6-30.9 54.8l35.7 47.6c5.3 7.1 3.9 17.1-3.2 22.4s-17.1 3.9-22.4-3.2L304 288l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-96zm32 80l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0 0 64zm208-96c44.2 0 80 35.8 80 80l0 32c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-32c0-44.2 35.8-80 80-80zm-48 80l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z" />
    </Icon>
);

export default RectanglePro;