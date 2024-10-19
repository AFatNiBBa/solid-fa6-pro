
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-nested` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-nested?s=light diagram-nested}
 * @preview ![diagram-nested](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NjQgMjg4SDMzNkMzMDkuNDkgMjg4IDI4OCAzMDkuNDkgMjg4IDMzNlY0NjRDMjg4IDQ5MC41MSAzMDkuNDkgNTEyIDMzNiA1MTJINDY0QzQ5MC41MSA1MTIgNTEyIDQ5MC41MSA1MTIgNDY0VjMzNkM1MTIgMzA5LjQ5IDQ5MC41MSAyODggNDY0IDI4OFpNNDgwIDQ2NEM0ODAgNDcyLjgyMiA0NzIuODIyIDQ4MCA0NjQgNDgwSDMzNkMzMjcuMTc4IDQ4MCAzMjAgNDcyLjgyMiAzMjAgNDY0VjMzNkMzMjAgMzI3LjE3OCAzMjcuMTc4IDMyMCAzMzYgMzIwSDQ2NEM0NzIuODIyIDMyMCA0ODAgMzI3LjE3OCA0ODAgMzM2VjQ2NFpNMjQwIDM4NEgxNzZDMTQ5LjUzMSAzODQgMTI4IDM2Mi40NjkgMTI4IDMzNlYyMjRIMTc2QzIwMi41MSAyMjQgMjI0IDIwMi41MSAyMjQgMTc2VjQ4QzIyNCAyMS40OSAyMDIuNTEgMCAxNzYgMEg0OEMyMS40OSAwIDAgMjEuNDkgMCA0OFYxNzZDMCAyMDIuNTEgMjEuNDkgMjI0IDQ4IDIyNEg5NlYzMzZDOTYgMzgwLjEyNSAxMzEuODc1IDQxNiAxNzYgNDE2SDI0MEMyNDguODQ0IDQxNiAyNTYgNDA4Ljg0NCAyNTYgNDAwUzI0OC44NDQgMzg0IDI0MCAzODRaTTQ4IDE5MkMzOS4xNzggMTkyIDMyIDE4NC44MjIgMzIgMTc2VjQ4QzMyIDM5LjE3OCAzOS4xNzggMzIgNDggMzJIMTc2QzE4NC44MjIgMzIgMTkyIDM5LjE3OCAxOTIgNDhWMTc2QzE5MiAxODQuODIyIDE4NC44MjIgMTkyIDE3NiAxOTJINDhaIi8+PC9zdmc+|width=32|height=32)
 */
export default function DiagramNested(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M464 288H336C309.49 288 288 309.49 288 336V464C288 490.51 309.49 512 336 512H464C490.51 512 512 490.51 512 464V336C512 309.49 490.51 288 464 288ZM480 464C480 472.822 472.822 480 464 480H336C327.178 480 320 472.822 320 464V336C320 327.178 327.178 320 336 320H464C472.822 320 480 327.178 480 336V464ZM240 384H176C149.531 384 128 362.469 128 336V224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H96V336C96 380.125 131.875 416 176 416H240C248.844 416 256 408.844 256 400S248.844 384 240 384ZM48 192C39.178 192 32 184.822 32 176V48C32 39.178 39.178 32 48 32H176C184.822 32 192 39.178 192 48V176C192 184.822 184.822 192 176 192H48Z" />
        </Icon>
    </>
}