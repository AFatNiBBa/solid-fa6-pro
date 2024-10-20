
import { Icon, generic } from "../../index";

/**
 * A component that renders the `closed-captioning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=sharp-duotone-solid closed-captioning}
 * @preview ![closed-captioning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/closed-captioning.svg)
 */
const ClosedCaptioning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l576 0 0 448L0 480 0 32zM104 256c0 53 43 96 96 96c34.2 0 64.1-17.8 81.1-44.6l-40.5-25.7C232 295.1 217 304 200 304c-26.5 0-48-21.5-48-48s21.5-48 48-48c17 0 32 8.9 40.6 22.3l40.5-25.7c-17-26.8-46.9-44.6-81.1-44.6c-53 0-96 43-96 96zm192 0c0 53 43 96 96 96c34.2 0 64.1-17.8 81.1-44.6l-40.5-25.7C424 295.1 409 304 392 304c-26.5 0-48-21.5-48-48s21.5-48 48-48c17 0 32 8.9 40.6 22.3l40.5-25.7c-17-26.8-47-44.6-81.1-44.6c-53 0-96 43-96 96z" />
        <path d="M152 256c0-26.5 21.5-48 48-48c17 0 32 8.9 40.6 22.3l40.5-25.7c-17-26.8-46.9-44.6-81.1-44.6c-53 0-96 43-96 96s43 96 96 96c34.2 0 64.1-17.8 81.1-44.6l-40.5-25.7C232 295.1 217 304 200 304c-26.5 0-48-21.5-48-48zm192 0c0-26.5 21.5-48 48-48c17 0 32 8.9 40.6 22.3l40.5-25.7c-17-26.8-47-44.6-81.1-44.6c-53 0-96 43-96 96s43 96 96 96c34.2 0 64.1-17.8 81.1-44.6l-40.5-25.7C424 295.1 409 304 392 304c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default ClosedCaptioning;