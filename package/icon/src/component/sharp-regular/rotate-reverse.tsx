
import { Icon } from "../../index";

/**
 * A component that renders the `rotate-reverse` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rotate-reverse?s=sharp-regular rotate-reverse}
 * @preview ![rotate-reverse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rotate-reverse.svg)
 */
const RotateReverse: typeof Icon = x => (
    <Icon {...x}>
        <path d="M418 187.1C391.2 124.1 328.7 80 256 80c-39.7 0-77.8 15.8-105.9 43.9L145 129l21.1 21.1L200 184l-33.9 33.9L160 224l-96 0-48 0 0-48 0-96 6.1-6.1L56 40 89.9 73.9 111 95l5.1-5.1C153.2 52.8 203.5 32 256 32c92.6 0 172.1 56.2 206.2 136.3L418 187.1zM94.1 325.2C121 388.1 183.4 432 256 432c39.7 0 77.8-15.8 105.9-43.9L367 383l-21.1-21.1L312 328l33.9-33.9L352 288l96 0 48 0 0 48 0 96-6.1 6.1L456 472l-33.9-33.9L401 417l-5.1 5.1C358.8 459.2 308.5 480 256 480c-92.5 0-171.8-56-206-135.9l44.1-18.9zm30-149.2L64 115.9 64 176l60.1 0zM387.9 336L448 396.1l0-60.1-60.1 0z" />
    </Icon>
);

export default RotateReverse;