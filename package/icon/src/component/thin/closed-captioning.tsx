
import { Icon } from "../../index";

/**
 * A component that renders the `closed-captioning` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=thin closed-captioning}
 * @preview ![closed-captioning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/closed-captioning.svg)
 */
const ClosedCaptioning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 48c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l448 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM192 176c24.8 0 47 11.3 61.6 29c2.8 3.4 7.9 3.9 11.3 1.1s3.9-7.9 1.1-11.3c-17.6-21.2-44.2-34.8-74-34.8c-53 0-96 43-96 96s43 96 96 96c29.8 0 56.4-13.6 74-34.8c2.8-3.4 2.3-8.4-1.1-11.3s-8.4-2.3-11.3 1.1c-14.7 17.7-36.8 29-61.6 29c-44.2 0-80-35.8-80-80s35.8-80 80-80zm128 80c0-44.2 35.8-80 80-80c24.8 0 47 11.3 61.6 29c2.8 3.4 7.9 3.9 11.3 1.1s3.9-7.9 1.1-11.3c-17.6-21.2-44.2-34.8-74-34.8c-53 0-96 43-96 96s43 96 96 96c29.8 0 56.4-13.6 74-34.8c2.8-3.4 2.3-8.4-1.1-11.3s-8.4-2.3-11.3 1.1c-14.7 17.7-36.8 29-61.6 29c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default ClosedCaptioning;