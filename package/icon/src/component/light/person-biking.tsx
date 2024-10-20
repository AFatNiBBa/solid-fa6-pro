
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=light person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M392 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80A56 56 0 1 0 392 0a56 56 0 1 0 0 112zM224 384A96 96 0 1 1 32 384a96 96 0 1 1 192 0zM128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM608 384a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM512 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM309.1 166.4c6.1-5.2 15.1-5.1 21.1 .3l59.1 53.2c2.9 2.6 6.8 4.1 10.7 4.1l80 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-73.9 0-54.5-49.1c-17.9-16.1-45-16.5-63.3-.8l-59.1 50.6c-23.9 20.5-21.9 58.1 4 76L320 328.4l0 87.6c0 8.8 7.2 16 16 16s16-7.2 16-16l0-96c0-5.3-2.6-10.2-6.9-13.2l-93.7-64.4c-8.7-6-9.3-18.5-1.3-25.3l59.1-50.6z" />
    </Icon>
);

export default PersonBiking;