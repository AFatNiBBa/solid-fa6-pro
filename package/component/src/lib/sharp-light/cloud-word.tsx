
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-word` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-word?s=sharp-light cloud-word}
 * @preview ![cloud-word](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cloud-word.svg)
 */
const CloudWord: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 259.6l16 9.2c28.8 16.6 48 47.7 48 83.2l0 96-96 0-368 0L32 448l0-112c0-48.7 31.1-90.2 74.7-105.6l21.3-7.5 0-22.6 0-8.2c0-70.7 57.3-128 128-128c45.1 0 84.8 23.3 107.6 58.7l14.2 22 24.3-9.5c11.7-4.6 24.4-7.1 37.9-7.1c57.4 0 104 46.6 104 104l0 9.1 0 18.5zM96 200.2C40.1 220 0 273.3 0 336L0 448l0 32 32 0 112 0 368 0 96 0 32 0 0-32 0-96c0-47.4-25.7-88.7-64-110.9l0-9.1c0-75.1-60.9-136-136-136c-17.5 0-34.2 3.3-49.5 9.3C362 61.2 312.4 32 256 32C167.6 32 96 103.6 96 192l0 8.2zM512 352l-16 0-192 0-16 0 0 32 16 0 192 0 16 0 0-32zm-272 0l-96 0-16 0 0 32 16 0 96 0 16 0 0-32-16 0zM128 288l0 32 16 0 192 0 16 0 0-32-16 0-192 0-16 0zm272 0l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0z" />
    </Icon>
);

export default CloudWord;