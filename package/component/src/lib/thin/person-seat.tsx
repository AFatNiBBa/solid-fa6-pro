
import { Icon } from "../../index";

/**
 * A component that renders the `person-seat` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-seat?s=thin person-seat}
 * @preview ![person-seat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-seat.svg)
 */
const PersonSeat: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 240l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-66.7 0c-6.8 0-12.8-4.3-15.1-10.7C169.8 184.9 157.9 176 144 176c-17.7 0-32 14.3-32 32l0 96c0 26.5 21.5 48 48 48l86.4 0c15.9 0 29.4 11.7 31.7 27.5l10.1 70.8c1.1 7.9 7.9 13.7 15.8 13.7l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-20.2 0c-8 0-14.7-5.9-15.8-13.7L309.7 375c-4.5-31.5-31.5-55-63.4-55L192 320c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM176 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm16 224l16 0 38.4 0c39.8 0 73.6 29.3 79.2 68.7l6.2 43.3 20.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-15.9 0-29.4-11.7-31.7-27.5l-10.1-70.8c-1.1-7.9-7.9-13.7-15.8-13.7L160 368c-35.3 0-64-28.7-64-64l0-96c0-26.5 21.5-48 48-48c20.9 0 38.7 13.4 45.3 32l66.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0-16 0 0 16 0 16 0 16zM96 80a48 48 0 1 1 96 0A48 48 0 1 1 96 80zM16 136l0 192c0 48.6 39.4 88 88 88l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0C46.6 432 0 385.4 0 328L0 136c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default PersonSeat;