
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `rectangle-vertical-history` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-vertical-history?s=regular rectangle-vertical-history}
 * @preview ![rectangle-vertical-history](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0wIDE0NFYzNjhDMCAzOTQuNTA4IDIxLjQ5IDQxNiA0OCA0MTZWOTZDMjEuNDkgOTYgMCAxMTcuNDkyIDAgMTQ0Wk05NiA5NlY0MTZDOTYgNDQyLjUwOCAxMTcuNDkgNDY0IDE0NCA0NjRWNDhDMTE3LjQ5IDQ4IDk2IDY5LjQ5MiA5NiA5NlpNNTEyIDBIMjU2QzIyMC42NTQgMCAxOTIgMjguNjUyIDE5MiA2NFY0NDhDMTkyIDQ4My4zNDggMjIwLjY1NCA1MTIgMjU2IDUxMkg1MTJDNTQ3LjM0NiA1MTIgNTc2IDQ4My4zNDggNTc2IDQ0OFY2NEM1NzYgMjguNjUyIDU0Ny4zNDYgMCA1MTIgMFpNNTI4IDQ0OEM1MjggNDU2LjgzNiA1MjAuODM2IDQ2NCA1MTIgNDY0SDI1NkMyNDcuMTY0IDQ2NCAyNDAgNDU2LjgzNiAyNDAgNDQ4VjY0QzI0MCA1NS4xNjIgMjQ3LjE2NCA0OCAyNTYgNDhINTEyQzUyMC44MzYgNDggNTI4IDU1LjE2MiA1MjggNjRWNDQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function RectangleVerticalHistory(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M0 144V368C0 394.508 21.49 416 48 416V96C21.49 96 0 117.492 0 144ZM96 96V416C96 442.508 117.49 464 144 464V48C117.49 48 96 69.492 96 96ZM512 0H256C220.654 0 192 28.652 192 64V448C192 483.348 220.654 512 256 512H512C547.346 512 576 483.348 576 448V64C576 28.652 547.346 0 512 0ZM528 448C528 456.836 520.836 464 512 464H256C247.164 464 240 456.836 240 448V64C240 55.162 247.164 48 256 48H512C520.836 48 528 55.162 528 64V448Z" />
        </Icon>
    </>
}