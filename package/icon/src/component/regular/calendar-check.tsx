
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar-check` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-check?s=regular calendar-check}
 * @preview ![calendar-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xODMuMDMxIDQwOC45NTNDMTg3LjUzMSA0MTMuNDUzIDE5My42NTYgNDE1Ljk4NCAyMDAgNDE1Ljk4NEMyMDAuMzEyIDQxNS45ODQgMjAwLjYyNSA0MTUuOTg0IDIwMC45MDYgNDE1Ljk1M0MyMDcuNTk0IDQxNS43MDMgMjEzLjg3NSA0MTIuNjcyIDIxOC4yMTkgNDA3LjYwOUwzMTQuMjE5IDI5NS42MDlDMzIyLjg0NCAyODUuNTQ3IDMyMS42ODcgMjcwLjM5MSAzMTEuNjI1IDI2MS43NjZDMzAxLjU5NCAyNTMuMTcyIDI4Ni40MzcgMjU0LjI5NyAyNzcuNzgxIDI2NC4zNTlMMTk4LjY1NiAzNTYuNzAzTDE2OC45NjkgMzI3LjAxNkMxNTkuNTk0IDMxNy42NDEgMTQ0LjQwNiAzMTcuNjQxIDEzNS4wMzEgMzI3LjAxNlMxMjUuNjU2IDM1MS41NzggMTM1LjAzMSAzNjAuOTUzTDE4My4wMzEgNDA4Ljk1M1pNMzg0IDY0SDM0NFYyNEMzNDQgMTAuNzUgMzMzLjI1IDAgMzIwIDBTMjk2IDEwLjc1IDI5NiAyNFY2NEgxNTJWMjRDMTUyIDEwLjc1IDE0MS4yNSAwIDEyOCAwUzEwNCAxMC43NSAxMDQgMjRWNjRINjRDMjguNjU0IDY0IDAgOTIuNjUyIDAgMTI4VjQ0OEMwIDQ4My4zNDggMjguNjU0IDUxMiA2NCA1MTJIMzg0QzQxOS4zNDYgNTEyIDQ0OCA0ODMuMzQ4IDQ0OCA0NDhWMTI4QzQ0OCA5Mi42NTIgNDE5LjM0NiA2NCAzODQgNjRaTTQwMCA0NDhDNDAwIDQ1Ni44MjQgMzkyLjgyMiA0NjQgMzg0IDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjQgNDggNDQ4VjE5Mkg0MDBWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CalendarCheck(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M183.031 408.953C187.531 413.453 193.656 415.984 200 415.984C200.312 415.984 200.625 415.984 200.906 415.953C207.594 415.703 213.875 412.672 218.219 407.609L314.219 295.609C322.844 285.547 321.687 270.391 311.625 261.766C301.594 253.172 286.437 254.297 277.781 264.359L198.656 356.703L168.969 327.016C159.594 317.641 144.406 317.641 135.031 327.016S125.656 351.578 135.031 360.953L183.031 408.953ZM384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM400 448C400 456.824 392.822 464 384 464H64C55.178 464 48 456.824 48 448V192H400V448Z" />
        </Icon>
    </>
}