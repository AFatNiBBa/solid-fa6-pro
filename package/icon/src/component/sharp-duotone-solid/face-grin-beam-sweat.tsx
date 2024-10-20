
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-beam-sweat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-beam-sweat?s=sharp-duotone-solid face-grin-beam-sweat}
 * @preview ![face-grin-beam-sweat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-beam-sweat.svg)
 */
const FaceGrinBeamSweat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256c0-35.8-7.3-69.9-20.6-100.8c-8.6 3.1-17.8 4.8-27.4 4.8c-43.4 0-80-34.6-80-79c0-12.6 5-24.6 8.8-32.6c1.1-2.2 2.2-4.4 3.4-6.6C356 15.4 307.8 0 256 0C114.6 0 0 114.6 0 256zm96 46.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2zM120 232c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M512 81c0 26-21.5 47-48 47s-48-21-48-47c0-18.3 29.2-56.5 44.3-76.1c1.4-1.8 2.6-3.4 3.7-4.9c1.3 1.7 2.8 3.7 4.5 5.9C483.7 25.9 512 63 512 81zM176 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm104 80c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceGrinBeamSweat;