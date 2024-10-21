
import { Icon } from "../../index";

/**
 * A component that renders the `person-dress` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dress?s=light person-dress}
 * @preview ![person-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/person-dress.svg)
 */
const PersonDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 80a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-80a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM119.2 241.7c7.9 4 11.1 13.6 7.2 21.5L73.9 368l38.1 0 96 0 38.1 0L193.7 263.2c-4-7.9-.7-17.5 7.2-21.5s17.5-.7 21.5 7.2l64 128c2.5 5 2.2 10.9-.7 15.6s-8.1 7.6-13.6 7.6l-48 0 0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96-64 0 0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96-48 0c-5.5 0-10.7-2.9-13.6-7.6s-3.2-10.6-.7-15.6l64-128c4-7.9 13.6-11.1 21.5-7.2zM99 196.6L46.1 295.5c-4.2 7.8-13.9 10.7-21.7 6.6s-10.7-13.9-6.6-21.7l52.9-98.9C88.3 148.6 122.7 128 160 128s71.7 20.6 89.3 53.5l52.9 98.9c4.2 7.8 1.2 17.5-6.6 21.7s-17.5 1.2-21.7-6.6L221 196.6c-12-22.5-35.5-36.6-61-36.6s-49 14.1-61 36.6z" />
    </Icon>
);

export default PersonDress;