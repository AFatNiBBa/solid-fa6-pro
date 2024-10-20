
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=light bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 96l0 40.6c9.4-5.4 20.3-8.6 32-8.6l112 0c19.1 0 36.3 8.4 48 21.7c11.7-13.3 28.9-21.7 48-21.7l112 0c11.7 0 22.6 3.1 32 8.6L448 96c0-17.7-14.3-32-32-32L96 64C78.3 64 64 78.3 64 96zm416 96l0 48c19.4 14.6 32 37.8 32 64l0 96 0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48L32 416l0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-96c0-26.2 12.6-49.4 32-64l0-48 0-96c0-35.3 28.7-64 64-64l320 0c35.3 0 64 28.7 64 64l0 96zm-32 33.6l0-33.6c0-17.7-14.3-32-32-32l-112 0c-17.7 0-32 14.3-32 32l0 32 160 0c5.5 0 10.8 .6 16 1.6zM240 224l0-32c0-17.7-14.3-32-32-32L96 160c-17.7 0-32 14.3-32 32l0 33.6c5.2-1 10.5-1.6 16-1.6l160 0zm240 80c0-26.5-21.5-48-48-48L80 256c-26.5 0-48 21.5-48 48l0 80 448 0 0-80z" />
    </Icon>
);

export default BedFront;