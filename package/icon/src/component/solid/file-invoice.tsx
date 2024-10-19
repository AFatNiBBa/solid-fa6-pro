
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-invoice` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-invoice?s=solid file-invoice}
 * @preview ![file-invoice](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0yODggMjU2SDk2VjMyMEgyODhWMjU2Wk0yMjQgMTI4VjBINDhDMjEuNDkyIDAgMCAyMS40OTIgMCA0OFY0NjRDMCA0OTAuNTA4IDIxLjQ5MiA1MTIgNDggNTEySDMzNkMzNjIuNTA4IDUxMiAzODQgNDkwLjUwOCAzODQgNDY0VjE2MEgyNTZDMjM4LjMyOCAxNjAgMjI0IDE0NS42NzIgMjI0IDEyOFpNNjQgNzJDNjQgNjcuNjI1IDY3LjYyNSA2NCA3MiA2NEgxNTJDMTU2LjM3NSA2NCAxNjAgNjcuNjI1IDE2MCA3MlY4OEMxNjAgOTIuMzc1IDE1Ni4zNzUgOTYgMTUyIDk2SDcyQzY3LjYyNSA5NiA2NCA5Mi4zNzUgNjQgODhWNzJaTTY0IDEzNkM2NCAxMzEuNjI1IDY3LjYyNSAxMjggNzIgMTI4SDE1MkMxNTYuMzc1IDEyOCAxNjAgMTMxLjYyNSAxNjAgMTM2VjE1MkMxNjAgMTU2LjM3NSAxNTYuMzc1IDE2MCAxNTIgMTYwSDcyQzY3LjYyNSAxNjAgNjQgMTU2LjM3NSA2NCAxNTJWMTM2Wk0zMjAgNDQwQzMyMCA0NDQuMzc1IDMxNi4zNzUgNDQ4IDMxMiA0NDhIMjMyQzIyNy42MjUgNDQ4IDIyNCA0NDQuMzc1IDIyNCA0NDBWNDI0QzIyNCA0MTkuNjI1IDIyNy42MjUgNDE2IDIzMiA0MTZIMzEyQzMxNi4zNzUgNDE2IDMyMCA0MTkuNjI1IDMyMCA0MjRWNDQwWk0zMjAgMjQwVjMzNkMzMjAgMzQ0Ljg3NSAzMTIuODc1IDM1MiAzMDQgMzUySDgwQzcxLjEyNSAzNTIgNjQgMzQ0Ljg3NSA2NCAzMzZWMjQwQzY0IDIzMS4xMjUgNzEuMTI1IDIyNCA4MCAyMjRIMzA0QzMxMi44NzUgMjI0IDMyMCAyMzEuMTI1IDMyMCAyNDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function FileInvoice(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M256 0V128H384L256 0ZM288 256H96V320H288V256ZM224 128V0H48C21.492 0 0 21.492 0 48V464C0 490.508 21.492 512 48 512H336C362.508 512 384 490.508 384 464V160H256C238.328 160 224 145.672 224 128ZM64 72C64 67.625 67.625 64 72 64H152C156.375 64 160 67.625 160 72V88C160 92.375 156.375 96 152 96H72C67.625 96 64 92.375 64 88V72ZM64 136C64 131.625 67.625 128 72 128H152C156.375 128 160 131.625 160 136V152C160 156.375 156.375 160 152 160H72C67.625 160 64 156.375 64 152V136ZM320 440C320 444.375 316.375 448 312 448H232C227.625 448 224 444.375 224 440V424C224 419.625 227.625 416 232 416H312C316.375 416 320 419.625 320 424V440ZM320 240V336C320 344.875 312.875 352 304 352H80C71.125 352 64 344.875 64 336V240C64 231.125 71.125 224 80 224H304C312.875 224 320 231.125 320 240Z" />
        </Icon>
    </>
}