
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=light steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 384l0 95.4C134.4 472 49.1 391.4 34.3 288l106.2 0c2.2 4.2 5.1 8.1 8.6 11.6l73.1 73.1c5.2 5.2 11.4 9 17.9 11.3zm32 0c6.6-2.3 12.7-6.1 17.9-11.3L363 299.6c3.5-3.5 6.3-7.4 8.6-11.6l106.2 0C462.9 391.4 377.6 472 272 479.4l0-95.4zM376.1 256c-.8-4-2.2-8-4.1-11.8l-12.8-25.7C351 202.3 334.4 192 316.2 192l-120.4 0c-18.2 0-34.8 10.3-42.9 26.5L140 244.2c-1.9 3.8-3.3 7.8-4.1 11.8L32 256C32 132.3 132.3 32 256 32s224 100.3 224 224l-103.9 0zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM181.5 232.8c2.7-5.4 8.3-8.8 14.3-8.8l120.4 0c6.1 0 11.6 3.4 14.3 8.8l12.8 25.7c3.1 6.2 1.9 13.6-3 18.5l-73.1 73.1c-6.2 6.2-16.4 6.2-22.6 0L171.6 277c-4.9-4.9-6.1-12.3-3-18.5l12.8-25.7z" />
    </Icon>
);

export default SteeringWheel;