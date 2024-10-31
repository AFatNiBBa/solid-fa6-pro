
import { Icon } from "../../index";

/**
 * A component that renders the `place-of-worship` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/place-of-worship?s=thin place-of-worship}
 * @preview ![place-of-worship](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/place-of-worship.svg)
 */
const PlaceOfWorship: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M314.3 2.3c3.1-3.1 8.2-3.1 11.3 0L409 85.7c4.5 4.5 7 10.6 7 17l0 103.7 44 25.5c12.4 7.2 20 20.3 20 34.6L480 496l104 0c22.1 0 40-17.9 40-40l0-70.3c0-13.4-6.7-25.9-17.8-33.3l-98.6-65.8c-3.7-2.5-4.7-7.4-2.2-11.1s7.4-4.7 11.1-2.2l98.6 65.8C630.6 349.5 640 367 640 385.7l0 70.3c0 30.9-25.1 56-56 56l-111.7 0c-.1 0-.2 0-.3 0l-88 0-16 0-96 0-16 0-47.8 0c-.1 0-.1 0-.2 0L56 512c-30.9 0-56-25.1-56-56l0-70.3c0-18.7 9.4-36.2 24.9-46.6l98.6-65.8c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1L33.8 352.4C22.7 359.8 16 372.3 16 385.7L16 456c0 22.1 17.9 40 40 40l104 0 0-229.6c0-14.3 7.6-27.5 20-34.6l44-25.5 0-103.7c0-6.4 2.5-12.5 7-17L314.3 2.3zM464 496l0-229.5c0-8.6-4.6-16.5-12-20.8l-48-27.8c-2.5-1.4-4-4.1-4-6.9l0-108.3c0-2.1-.8-4.2-2.3-5.7L320 19.3 242.3 97c-1.5 1.5-2.3 3.5-2.3 5.7l0 108.3c0 2.9-1.5 5.5-4 6.9l-48 27.8c-7.4 4.3-12 12.2-12 20.8L176 496l80 0 0-112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112 47.7 0c.1 0 .2 0 .3 0l32 0zM368 384c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 112 96 0 0-112z" />
    </Icon>
);

export default PlaceOfWorship;