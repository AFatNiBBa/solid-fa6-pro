
import { Icon } from "../../index";

/**
 * A component that renders the `person-to-door` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-to-door?s=sharp-regular person-to-door}
 * @preview ![person-to-door](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-to-door.svg)
 */
const PersonToDoor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM136 112l-8 0-6.4 4.8-64 48L38.4 179.2l28.8 38.4 19.2-14.4L144 160l33.4 0-31.8 95.4c-8.5 25.5 2.3 53.4 25.7 66.5l88 49.5L215.4 512l50.3 0 45.3-144.8 5.8-18.5-16.9-9.5-43.4-24.4 28.1-84.4 12.5 40.8 5.2 16.9 17.7 0 72 0 24 0 0-48-24 0-54.3 0-26.8-87.1-3.9-12.6-12.7-3.5-88-24-3.1-.8-3.2 0-64 0zm55.1 158.5l34.2-102.7 27 7.4L213.8 290.7l-19-10.7c-3.3-1.9-4.9-5.9-3.7-9.5zM103.4 368L24 368 0 368l0 48 24 0 96 0 16.6 0 5.9-15.5 18-47.9-4.9-2.8c-14.1-8-25.4-19.3-33-32.6L103.4 368zM528 48l0 416-96 0 0-144-48 0 0 144 0 48 48 0 96 0 48 0 0-48 0-416 0-48L528 0 432 0 384 0l0 48 0 160 48 0 0-160 96 0z" />
    </Icon>
);

export default PersonToDoor;