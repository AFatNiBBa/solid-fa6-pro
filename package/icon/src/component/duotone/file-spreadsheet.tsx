
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `file-spreadsheet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/file-spreadsheet?s=duotone file-spreadsheet}
 * @preview ![file-spreadsheet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAxMjhWMEg0OEMyMS40OSAwIDAgMjEuNDkyIDAgNDhWNDY0QzAgNDkwLjUwOCAyMS40OSA1MTIgNDggNTEySDMzNkMzNjIuNTEgNTEyIDM4NCA0OTAuNTA4IDM4NCA0NjRWMTI4SDI1NlpNMzI4IDQzMkMzMjggNDQwLjg3NSAzMjAuODc1IDQ0OCAzMTIgNDQ4SDcyQzYzLjEyNSA0NDggNTYgNDQwLjg3NSA1NiA0MzJWMjQwQzU2IDIzMS4xMjUgNjMuMTI1IDIyNCA3MiAyMjRIMzEyQzMyMC44NzUgMjI0IDMyOCAyMzEuMTI1IDMyOCAyNDBWNDMyWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0yNTYgMFYxMjhIMzg0TDI1NiAwWk0zMTIgMjI0SDcyQzYzLjEyNSAyMjQgNTYgMjMxLjEyNSA1NiAyNDBWNDMyQzU2IDQ0MC44NzUgNjMuMTI1IDQ0OCA3MiA0NDhIMzEyQzMyMC44NzUgNDQ4IDMyOCA0NDAuODc1IDMyOCA0MzJWMjQwQzMyOCAyMzEuMTI1IDMyMC44NzUgMjI0IDMxMiAyMjRaTTEzNiA0MTZIODhWMzY4SDEzNlY0MTZaTTEzNiAzMzZIODhWMjg4SDEzNlYzMzZaTTIxNiA0MTZIMTY4VjM2OEgyMTZWNDE2Wk0yMTYgMzM2SDE2OFYyODhIMjE2VjMzNlpNMjk2IDQxNkgyNDhWMzY4SDI5NlY0MTZaTTI5NiAzMzZIMjQ4VjI4OEgyOTZWMzM2WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FileSpreadsheet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M256 128V0H48C21.49 0 0 21.492 0 48V464C0 490.508 21.49 512 48 512H336C362.51 512 384 490.508 384 464V128H256ZM328 432C328 440.875 320.875 448 312 448H72C63.125 448 56 440.875 56 432V240C56 231.125 63.125 224 72 224H312C320.875 224 328 231.125 328 240V432Z" />
            <path d="M256 0V128H384L256 0ZM312 224H72C63.125 224 56 231.125 56 240V432C56 440.875 63.125 448 72 448H312C320.875 448 328 440.875 328 432V240C328 231.125 320.875 224 312 224ZM136 416H88V368H136V416ZM136 336H88V288H136V336ZM216 416H168V368H216V416ZM216 336H168V288H216V336ZM296 416H248V368H296V416ZM296 336H248V288H296V336Z" />
        </Icon>
    </>
}