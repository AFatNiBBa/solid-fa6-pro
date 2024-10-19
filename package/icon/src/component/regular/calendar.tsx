
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `calendar` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/calendar?s=regular calendar}
 * @preview ![calendar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgNjRIMzQ0VjI0QzM0NCAxMC43NSAzMzMuMjUgMCAzMjAgMFMyOTYgMTAuNzUgMjk2IDI0VjY0SDE1MlYyNEMxNTIgMTAuNzUgMTQxLjI1IDAgMTI4IDBTMTA0IDEwLjc1IDEwNCAyNFY2NEg2NEMyOC42NTQgNjQgMCA5Mi42NTIgMCAxMjhWNDQ4QzAgNDgzLjM0OCAyOC42NTQgNTEyIDY0IDUxMkgzODRDNDE5LjM0NiA1MTIgNDQ4IDQ4My4zNDggNDQ4IDQ0OFYxMjhDNDQ4IDkyLjY1MiA0MTkuMzQ2IDY0IDM4NCA2NFpNMzg0IDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjQgNDggNDQ4VjE5Mkg0MDBWNDQ4QzQwMCA0NTYuODI0IDM5Mi44MjIgNDY0IDM4NCA0NjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Calendar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 64H344V24C344 10.75 333.25 0 320 0S296 10.75 296 24V64H152V24C152 10.75 141.25 0 128 0S104 10.75 104 24V64H64C28.654 64 0 92.652 0 128V448C0 483.348 28.654 512 64 512H384C419.346 512 448 483.348 448 448V128C448 92.652 419.346 64 384 64ZM384 464H64C55.178 464 48 456.824 48 448V192H400V448C400 456.824 392.822 464 384 464Z" />
        </Icon>
    </>
}