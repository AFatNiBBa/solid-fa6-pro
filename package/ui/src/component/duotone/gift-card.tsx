
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gift-card` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift-card?s=duotone gift-card}
 * @preview ![gift-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gift-card.svg)
 */
const GiftCard: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l576 0 0-128c0-35.3-28.7-64-64-64l-41.6 0c-14.6 28.5-44.2 48-78.4 48l-59.4 0 53.9 64.6c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1L288 197.5l-61.6 73.9c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8L243.4 176 184 176c-1.1 0-2.1 0-3.2-.1s-2.1-.1-3.2-.2c-2.1-.1-4.2-.4-6.2-.7c-4.1-.6-8.1-1.5-12-2.6c-7.8-2.3-15.2-5.6-21.9-9.8c-13.5-8.4-24.6-20.4-31.8-34.7L64 128c-35.3 0-64 28.7-64 64zM0 416l0 32c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-32L0 416z" />
        <path d="M186.2 48L184 48c-22.1 0-40 17.9-40 40s17.9 40 40 40l73.3 0L222.5 68.8C214.9 55.9 201.1 48 186.2 48zm57.3 128L184 176c-48.6 0-88-39.4-88-88s39.4-88 88-88l2.2 0c31.9 0 61.5 16.9 77.7 44.4l24.1 41 24.1-41C328.3 16.9 357.9 0 389.8 0L392 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-59.4 0 53.9 64.6c8.5 10.2 7.1 25.3-3.1 33.8s-25.3 7.1-33.8-3.1L288 197.5l-61.6 73.9c-8.5 10.2-23.6 11.6-33.8 3.1s-11.6-23.6-3.1-33.8L243.4 176zM392 128c22.1 0 40-17.9 40-40s-17.9-40-40-40l-2.2 0c-14.9 0-28.8 7.9-36.3 20.8L318.7 128l1.3 0 72 0zM576 416L0 416l0-96 576 0 0 96z" />
    </Icon>
);

export default GiftCard;