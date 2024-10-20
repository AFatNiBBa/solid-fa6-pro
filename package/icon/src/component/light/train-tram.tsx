
import { Icon } from "../../index";

/**
 * A component that renders the `train-tram` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/train-tram?s=light train-tram}
 * @preview ![train-tram](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/train-tram.svg)
 */
const TrainTram: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M41.3 50c9.1-11.4 22.9-18 37.5-18L208 32l0 64-48 0c-53 0-96 43-96 96l0 160c0 28.9 12.8 54.8 33 72.4L36.7 484.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l65.8-65.8c10.8 4.2 22.6 6.5 34.9 6.5l128 0c12.3 0 24-2.3 34.9-6.5l65.8 65.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L351 424.4c20.2-17.6 33-43.5 33-72.4l0-160c0-53-43-96-96-96l-48 0 0-64 129.2 0c14.6 0 28.4 6.6 37.5 18l12.8 16c5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5L431.7 30C416.5 11 393.5 0 369.2 0L78.8 0C54.5 0 31.5 11 16.3 30L3.5 46C-2 52.9-.9 63 6 68.5S23 72.9 28.5 66L41.3 50zM160 128l48 0 32 0 48 0c35.3 0 64 28.7 64 64l0 64L96 256l0-64c0-35.3 28.7-64 64-64zM96 288l256 0 0 64c0 35.3-28.7 64-64 64l-128 0c-35.3 0-64-28.7-64-64l0-64zm96 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm88 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default TrainTram;