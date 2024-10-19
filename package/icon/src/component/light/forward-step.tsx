
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `forward-step` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/forward-step?s=light forward-step}
 * @preview ![forward-step](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNzIgNjRDMjYzLjE1NiA2NCAyNTYgNzEuMTU2IDI1NiA4MFYyMTQuMTYyTDgxLjUzMSA3MC44NzVDNzYuMDMxIDY2LjM0NCA2OS4zNzUgNjQgNjIuNjI1IDY0QzUyLjI3NyA2NCAzMiA3Mi4xMjUgMzIgOTYuMDMxVjQxNS45NjlDMzIgNDM5Ljg3NSA1Mi4yNzcgNDQ4IDYyLjYyNSA0NDhDNjkuMzc1IDQ0OCA3Ni4wMzEgNDQ1LjY1NiA4MS41MzEgNDQxLjEyNUwyNTYgMjk3LjgzOFY0MzJDMjU2IDQ0MC44NDQgMjYzLjE1NiA0NDggMjcyIDQ0OFMyODggNDQwLjg0NCAyODggNDMyVjgwQzI4OCA3MS4xNTYgMjgwLjg0NCA2NCAyNzIgNjRaTTY0IDQxNi40MDZWOTUuNTk0TDI1NS40NzkgMjU2TDY0IDQxNi40MDZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function ForwardStep(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 320 512" {...props}>
            <path d="M272 64C263.156 64 256 71.156 256 80V214.162L81.531 70.875C76.031 66.344 69.375 64 62.625 64C52.277 64 32 72.125 32 96.031V415.969C32 439.875 52.277 448 62.625 448C69.375 448 76.031 445.656 81.531 441.125L256 297.838V432C256 440.844 263.156 448 272 448S288 440.844 288 432V80C288 71.156 280.844 64 272 64ZM64 416.406V95.594L255.479 256L64 416.406Z" />
        </Icon>
    </>
}